export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          full_name: string | null
          phone_number: string | null
          nationality: string | null
          preferences: Json | null
          created_at: string
        }
        Insert: {
          id: string
          full_name?: string | null
          phone_number?: string | null
          nationality?: string | null
          preferences?: Json | null
          created_at?: string
        }
        Update: {
          id?: string
          full_name?: string | null
          phone_number?: string | null
          nationality?: string | null
          preferences?: Json | null
          created_at?: string
        }
      }
      properties: {
        Row: {
          id: string
          category: 'mountain_villa' | 'urban_apartment'
          name: string
          slug: string
          description: string | null
          location_data: Json | null
          base_price: number
          long_term_price: number | null
          currency: string
          max_guests: number
          amenities: string[] | null
          images: string[] | null
          status: 'active' | 'maintenance' | 'hidden'
          created_at: string
        }
        Insert: {
          id?: string
          category: 'mountain_villa' | 'urban_apartment'
          name: string
          slug: string
          description?: string | null
          location_data?: Json | null
          base_price: number
          long_term_price?: number | null
          currency?: string
          max_guests: number
          amenities?: string[] | null
          images?: string[] | null
          status?: 'active' | 'maintenance' | 'hidden'
          created_at?: string
        }
        Update: {
          id?: string
          category?: 'mountain_villa' | 'urban_apartment'
          name?: string
          slug?: string
          description?: string | null
          location_data?: Json | null
          base_price?: number
          long_term_price?: number | null
          currency?: string
          max_guests?: number
          amenities?: string[] | null
          images?: string[] | null
          status?: 'active' | 'maintenance' | 'hidden'
          created_at?: string
        }
      }
      safari_packages: {
        Row: {
          id: string
          title: string
          slug: string
          duration_nights: number
          description: string | null
          base_price_usd: number
          min_guests: number
          itinerary_details: Json | null
          included_services: string[] | null
          excluded_services: string[] | null
          is_active: boolean
          created_at: string
        }
        Insert: {
          id?: string
          title: string
          slug: string
          duration_nights: number
          description?: string | null
          base_price_usd: number
          min_guests?: number
          itinerary_details?: Json | null
          included_services?: string[] | null
          excluded_services?: string[] | null
          is_active?: boolean
          created_at?: string
        }
        Update: {
          id?: string
          title?: string
          slug?: string
          duration_nights?: number
          description?: string | null
          base_price_usd?: number
          min_guests?: number
          itinerary_details?: Json | null
          included_services?: string[] | null
          excluded_services?: string[] | null
          is_active?: boolean
          created_at?: string
        }
      }
      bookings: {
        Row: {
          id: string
          user_id: string | null
          property_id: string | null
          safari_package_id: string | null
          start_date: string
          end_date: string
          guest_adults: number
          guest_children: number
          total_amount: number
          currency: string
          status: 'pending_payment' | 'confirmed' | 'cancelled' | 'completed'
          stripe_payment_intent_id: string | null
          special_requests: string | null
          created_at: string
        }
        Insert: {
          id?: string
          user_id?: string | null
          property_id?: string | null
          safari_package_id?: string | null
          start_date: string
          end_date: string
          guest_adults?: number
          guest_children?: number
          total_amount: number
          currency: string
          status?: 'pending_payment' | 'confirmed' | 'cancelled' | 'completed'
          stripe_payment_intent_id?: string | null
          special_requests?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          user_id?: string | null
          property_id?: string | null
          safari_package_id?: string | null
          start_date?: string
          end_date?: string
          guest_adults?: number
          guest_children?: number
          total_amount?: number
          currency?: string
          status?: 'pending_payment' | 'confirmed' | 'cancelled' | 'completed'
          stripe_payment_intent_id?: string | null
          special_requests?: string | null
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      property_category: 'mountain_villa' | 'urban_apartment'
      listing_status: 'active' | 'maintenance' | 'hidden'
      booking_status: 'pending_payment' | 'confirmed' | 'cancelled' | 'completed'
    }
  }
}
