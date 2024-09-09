import { Database } from './supabase';

export type Job = Database['public']['Tables']['jobs']['Row'];
