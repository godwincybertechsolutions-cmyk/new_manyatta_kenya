import { createClient } from '@supabase/supabase-js'
import type { PropertyType, Property, Apartment, Itinerary } from './types'

// Booking types that complement your existing types
export interface Booking {
  id: string
  user_id: string
  property_type: PropertyType
  property_id: string
  property_name: string
  check_in: string
  check_out: string
  guests: number
  total_price: number
  status: 'pending' | 'confirmed' | 'cancelled'
  created_at: string
  updated_at: string
}

// Initialize Supabase client
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables. Please check your .env file.')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
    flowType: 'pkce'
  }
})

// Auth functions (compatible with your AuthContext)
export const auth = {
  signUp: async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signUp({ email, password })
    return { data, error }
  },

  signIn: async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    return { data, error }
  },

  signInWithOAuth: async (provider: 'google' | 'github') => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider,
      options: { redirectTo: `${window.location.origin}/auth/callback` }
    })
    return { data, error }
  },

  signOut: async () => {
    const { error } = await supabase.auth.signOut()
    return { error }
  },

  resetPassword: async (email: string) => {
    const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/auth/reset-password`,
    })
    return { data, error }
  },

  updatePassword: async (newPassword: string) => {
    const { data, error } = await supabase.auth.updateUser({ password: newPassword })
    return { data, error }
  }
}

// Property functions
export const properties = {
  // Get all properties
  getAll: async (type?: PropertyType) => {
    let query = supabase
      .from('properties')
      .select('*')
      .eq('status', 'available')

    if (type) {
      query = query.eq('type', type)
    }

    const { data, error } = await query
    return { data, error }
  },

  // Get property by ID
  getById: async (id: string) => {
    const { data, error } = await supabase
      .from('properties')
      .select('*')
      .eq('id', id)
      .single()
    return { data, error }
  },

  // Get properties by type
  getByType: async (type: PropertyType) => {
    const { data, error } = await supabase
      .from('properties')
      .select('*')
      .eq('type', type)
      .eq('status', 'available')
    return { data, error }
  }
}

// Booking functions for New Manyatta Kenya
export const bookings = {
  create: async (bookingData: Omit<Booking, 'id' | 'user_id' | 'created_at' | 'updated_at' | 'status'>) => {
    const { data: { user }, error: userError } = await supabase.auth.getUser()
    
    if (userError || !user) {
      return { data: null, error: new Error('User not authenticated') }
    }

    const { data, error } = await supabase
      .from('bookings')
      .insert([
        {
          ...bookingData,
          user_id: user.id,
          status: 'pending'
        }
      ])
      .select()
      .single()

    return { data, error }
  },

  // Get all bookings for current user
  getMyBookings: async () => {
    const { data: { user }, error: userError } = await supabase.auth.getUser()
    
    if (userError || !user) {
      return { data: null, error: new Error('User not authenticated') }
    }

    const { data, error } = await supabase
      .from('bookings')
      .select('*')
      .eq('user_id', user.id)
      .order('created_at', { ascending: false })

    return { data, error }
  },

  // Get single booking by ID
  getById: async (bookingId: string) => {
    const { data: { user }, error: userError } = await supabase.auth.getUser()
    
    if (userError || !user) {
      return { data: null, error: new Error('User not authenticated') }
    }

    const { data, error } = await supabase
      .from('bookings')
      .select('*')
      .eq('id', bookingId)
      .eq('user_id', user.id)
      .single()

    return { data, error }
  },

  // Cancel a booking
  cancel: async (bookingId: string) => {
    const { data: { user }, error: userError } = await supabase.auth.getUser()
    
    if (userError || !user) {
      return { data: null, error: new Error('User not authenticated') }
    }

    const { data, error } = await supabase
      .from('bookings')
      .update({ status: 'cancelled' })
      .eq('id', bookingId)
      .eq('user_id', user.id)
      .select()
      .single()

    return { data, error }
  },

  // Update booking
  update: async (bookingId: string, updates: Partial<Booking>) => {
    const { data: { user }, error: userError } = await supabase.auth.getUser()
    
    if (userError || !user) {
      return { data: null, error: new Error('User not authenticated') }
    }

    const { data, error } = await supabase
      .from('bookings')
      .update(updates)
      .eq('id', bookingId)
      .eq('user_id', user.id)
      .select()
      .single()

    return { data, error }
  }
}

// Helper function to check availability (you can expand this based on your needs)
export const checkAvailability = async (propertyId: string, checkIn: string, checkOut: string) => {
  const { data, error } = await supabase
    .from('bookings')
    .select('*')
    .eq('property_id', propertyId)
    .eq('status', 'confirmed')
    .or(`check_in.lte.${checkOut},check_out.gte.${checkIn}`)

  return { 
    available: data?.length === 0,
    conflictingBookings: data,
    error 
  }
}

export default supabase
