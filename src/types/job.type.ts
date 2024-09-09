export type Job = {
  id: number
  title: string;
  company: string;
  companyUrl?: string;
  location?: string;
  created_at: string;
  description: string;
  jobUrl?: string;
  categoryId: number;
  employmentType?: ('Vollzeit' | 'Teilzeit' | 'Freelance')[]
  listingType: 'offer' | 'search';
  highlight?: boolean;
};
