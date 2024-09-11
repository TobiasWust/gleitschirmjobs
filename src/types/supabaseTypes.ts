import { Database } from './supabase';

export type Job = Database['public']['Tables']['jobs']['Row'];

export type ClientJob = Omit<Job, 'uuid' | 'isVerified' | 'isActive' | 'isDeleted'>;
