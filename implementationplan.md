# Implementation Plan: New Manyatta Kenya

## 1. Project Overview
**New Manyatta Kenya** is a luxury hospitality platform designed to unify three distinct product lines: Luxury Mountain Villas, Safari Experiences, and Urban Apartments. The platform requires a robust, scalable architecture to handle complex booking logic, rich media content, and seamless user experiences.

## 2. Technical Architecture

### Frontend (Next.js 14)
*   **Framework**: Next.js 14 (App Router) for Server-Side Rendering (SSR) and SEO.
*   **State Management**: React Context / Zustand for managing booking flow state (dates, guests, selection).
*   **Styling**: Tailwind CSS with a custom luxury design token set (Spacing, Typography, Colors).
*   **Animations**: Framer Motion for parallax and transition effects.

### Backend (Supabase)
*   **Database**: PostgreSQL.
*   **Authentication**: Supabase Auth (Email/Password, Google, Magic Link).
*   **Storage**: Supabase Storage / Cloudinary (for optimized media delivery).
*   **Edge Functions**: For handling complex pricing logic and 3rd party API integrations (Stripe, Email).

### Payments & Operations
*   **Payment Processor**: Stripe Connect (Handling split payments and multi-currency).
*   **Email/Notifications**: Resend (Transactional emails).
*   **Calendar**: Custom implementation synced with database.

---

## 3. Comprehensive Database Schema

### A. Users & Profiles
Extends Supabase Auth to store additional user details.

```sql
create table profiles (
  id uuid references auth.users on delete cascade primary key,
  full_name text,
  phone_number text,
  nationality text,
  preferences jsonb, -- { "dietary": ["vegetarian"], "interests": ["photography"] }
  created_at timestamptz default now()
);
```

### B. Property Management (Villas & Apartments)
Stores physical inventory data for mountain villas and urban apartments.

```sql
create type property_category as enum ('mountain_villa', 'urban_apartment');
create type listing_status as enum ('active', 'maintenance', 'hidden');

create table properties (
  id uuid default gen_random_uuid() primary key,
  category property_category not null,
  name text not null,
  slug text unique not null,
  description text,
  location_data jsonb, -- { "address": "...", "coordinates": { "lat": -1.2, "lng": 36.8 } }
  base_price decimal(10,2) not null, -- Price per night (short term)
  long_term_price decimal(10,2), -- Price per month (optional)
  currency text default 'KES',
  max_guests int not null,
  amenities text[], -- ['wifi', 'pool', 'security']
  images text[], -- Array of Cloudinary URLs
  status listing_status default 'active',
  created_at timestamptz default now()
);
```

### C. Safari Experiences
Stores itinerary-based products which have a different structure than nightly rentals.

```sql
create table safari_packages (
  id uuid default gen_random_uuid() primary key,
  title text not null,
  slug text unique not null,
  duration_nights int not null,
  description text,
  base_price_usd decimal(10,2) not null, -- Per person
  min_guests int default 2,
  itinerary_details jsonb, -- Array of day objects (see Feature Specs)
  included_services text[],
  excluded_services text[],
  is_active boolean default true,
  created_at timestamptz default now()
);
```

### D. Bookings & Availability
Centralized reservation system handling both property rentals and safari tours.

```sql
create type booking_status as enum ('pending_payment', 'confirmed', 'cancelled', 'completed');

create table bookings (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id),
  
  -- Polymorphic relation (can be property OR safari)
  property_id uuid references properties(id),
  safari_package_id uuid references safari_packages(id),
  
  start_date date not null,
  end_date date not null,
  
  guest_adults int default 1,
  guest_children int default 0,
  
  total_amount decimal(10,2) not null,
  currency text not null,
  
  status booking_status default 'pending_payment',
  stripe_payment_intent_id text,
  
  special_requests text,
  created_at timestamptz default now()
);
```

---

## 4. Feature Specifications & Logic

### Feature 1: Unified Availability & Pricing Engine
**Objective**: Ensure accurate pricing and availability checking across different product types.

**Logic Flow**:
1.  **Availability Check (Edge Function)**:
    *   Input: `property_id`, `start_date`, `end_date`.
    *   Query `bookings` table for:
        ```sql
        WHERE property_id = input_id
        AND status IN ('confirmed', 'pending_payment')
        AND (start_date, end_date) OVERLAPS (input_start, input_end)
        ```
    *   Result: If any rows returned, return `Unavailable`.

2.  **Pricing Algorithm (Properties)**:
    *   Calculate `TotalNights`.
    *   **Tier Check**:
        *   If `TotalNights` >= 30 AND `long_term_price` is set -> Use `long_term_price` (pro-rated).
        *   Else -> Use `base_price` * `TotalNights`.
    *   **Seasonality (Optional)**:
        *   Check for holiday multipliers (e.g., Christmas = 1.5x) stored in a `seasonal_rates` config.
    *   **Total**: `(BaseRate * Nights * SeasonMultiplier)`.

### Feature 2: Interactive Safari Itinerary Builder
**Objective**: Rich, expandable day-by-day visualization for users.

**Data Structure (`safari_packages.itinerary_details` JSONB)**:
```json
[
  {
    "day": 1,
    "title": "Arrival in Nairobi",
    "description": "Transfer from JKIA to Hemingways.",
    "activities": ["Airport Pickup", "Giraffe Center Visit"],
    "lodging": "Hemingways Nairobi",
    "meals": ["Dinner"]
  },
  {
    "day": 2,
    "title": "Flight to Masai Mara",
    "description": "Morning flight from Wilson Airport.",
    "activities": ["Afternoon Game Drive", "Sundowner"],
    "lodging": "Governors Camp",
    "meals": ["Breakfast", "Lunch", "Dinner"]
  }
]
```

**Implementation Details**:
*   The frontend fetches this JSONB blob.
*   Renders a timeline view where each "Day" is collapsible.
*   Maps can be generated by extracting location names from the `title` or `lodging` fields.

### Feature 3: Multi-Channel Communication
**Objective**: Automate guest communication via Email and WhatsApp.

**Workflow**:
1.  **Inquiry Received**:
    *   Trigger: Contact form submission.
    *   Action: Save to `inquiries` table.
    *   Action: Supabase Edge Function calls Resend API to send "Welcome Brochure PDF".
2.  **Booking Created (Pending)**:
    *   Action: Email user with Stripe Payment Link.
    *   Action: Hold dates for 24 hours (Cron job to release if unpaid).
3.  **Booking Confirmed**:
    *   Trigger: Webhook from Stripe (`payment_intent.succeeded`).
    *   Action: Update `bookings.status` to `confirmed`.
    *   Action: Send WhatsApp (via Twilio) with Google Maps location and Check-in Guide.

---

## 5. Security & Access Control (RLS)

**Row Level Security (RLS) Policies**:

1.  **Public Read Access**:
    *   `properties`: Enable SELECT for all users.
    *   `safari_packages`: Enable SELECT for all users.
    *   `bookings`: Enable SELECT (restricted columns) for checking availability dates.

2.  **Authenticated User Access**:
    *   `bookings`: Users can SELECT and INSERT their own bookings (`auth.uid() == user_id`).
    *   `profiles`: Users can SELECT and UPDATE their own profile.

3.  **Admin Access**:
    *   Full CRUD access on all tables via specific Role or Admin UI.

---

## 6. API & Edge Functions

**Endpoints**:

*   `POST /api/availability`: Checks conflict for dates/property.
*   `POST /api/booking/create`: Initializes a booking and Stripe Intent.
*   `POST /api/webhooks/stripe`: Handles payment success/failure events.
*   `GET /api/itineraries/:id`: Fetches full itinerary details for the builder.
