import React from 'react';

// Update PropertyType to match database
export type PropertyType = 'mountain_villa' | 'safari_experience' | 'urban_apartment';

export interface Amenity {
  icon: React.ReactNode;
  label: string;
}

export interface PricingTier {
  title: string;
  price: string;
  unit: string;
  features: string[];
}

export interface Activity {
  title: string;
  description: string;
  image: string;
}

export interface ItineraryDay {
  day: number;
  title: string;
  activities: string[];
  lodging: string;
}

export interface Itinerary {
  id: string;
  title: string;
  duration: string;
  locations: string[];
  description: string;
  image: string;
  pricePerPerson: string;
  days: ItineraryDay[];
}

export interface Apartment {
  id: string;
  name: string;
  bedrooms: number;
  salePrice?: string;
  rentLongTerm: string;
  rentShortTerm: string;
  image: string;
  features: string[];
}

// Database Schema Types (Matches Implementation Plan)
export interface Property {
  id: string;
  type: PropertyType; // Now using the updated PropertyType
  name: string;
  location: string;
  description: string;
  base_price: number;
  currency: 'KES' | 'USD';
  max_guests: number;
  status: 'available' | 'maintenance';
}

// Booking type for database
export interface Booking {
  id: string;
  user_id: string;
  property_type: PropertyType;
  property_name: string;
  check_in: string;
  check_out: string;
  guests: number;
  total_price: number;
  status: 'pending' | 'confirmed' | 'cancelled';
  created_at: string;
}
