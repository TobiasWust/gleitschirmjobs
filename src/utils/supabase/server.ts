'use server';

import { createServerClient } from '@supabase/ssr'
import { cookies } from 'next/headers'
import { Database } from '../../types/supabase';
import { cache } from 'react';

export async function createClient() {
  const cookieStore = cookies()

  return createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll()
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            )
          } catch {
            // The `setAll` method was called from a Server Component.
            // This can be ignored if you have middleware refreshing
            // user sessions.
          }
        },
      },
    }
  )
}

export const getActiveJobs = cache(async () => {
  const supabase = await createClient();
  const { data: jobs } = await supabase.from("jobs")
    .select('categoryId, company, companyUrl, created_at, description, employmentType, highlight, id, jobUrl, listingType, location, title')
    .eq('isVerified', true)
    .eq('isDeleted', false)
    .eq('isActive', true)
    .order('id', { ascending: false });

  return jobs;
});

export const getJob = cache(async (id: string) => {
  const supabase = await createClient();
  const { data: job } = await supabase.from("jobs").select(`
    categoryId,
    company,
    companyUrl,
    created_at,
    description,
    employmentType,
    highlight,
    id,
    isActive,
    jobUrl,
    listingType,
    location,
    title
  `).eq("id", id).single();

  return job;
});
