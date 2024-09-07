export type Job = {
  id: number
  title: string;
  company: string;
  companyUrl?: string;
  location: string;
  date: string;
  description: string;
  jobUrl?: string;
  categoryId: number;
  employmentType: ('Vollzeit' | 'Teilzeit' | 'Freelance')[]
  listingType: 'offer' | 'search';
  highlight: boolean;
};

const jobs: Job[] = [
  {
    id: 0,
    title: "Fluglehrer in den Südalpen!",
    company: "Bluesky GmbH",
    companyUrl: "https://www.bluesky.at",
    location: "Sillian",
    date: "07.09.2024",
    description: "Einzige Flugschule in Tirol sucht Fluglehrer:in für die Ausbildung von Gleitschirmpilot:innen. Einzige Flugschule in Tirol sucht Fluglehrer:in für die Ausbildung von Gleitschirmpilot:innen. Einzige Flugschule in Tirol sucht Fluglehrer:in für die Ausbildung von Gleitschirmpilot:innen.",
    jobUrl: "https://www.bluesky.at/jobs",
    categoryId: 0,
    employmentType: ["Vollzeit", "Teilzeit", "Freelance"],
    listingType: 'search',
    highlight: false
  },
  {
    id: 1,
    title: "Erfahrener Fluglehrer!",
    company: "Tobias Wust",
    companyUrl: "https://wust.dev",
    location: "Egal",
    date: "07.09.2024",
    description: "Ich kann alles.",
    categoryId: 0,
    employmentType: ["Freelance"],
    listingType: 'offer',
    highlight: true
  },
  {
    id: 2,
    title: "Werkstattmitarbeiter in den Südalpen!",
    company: "Bluesky GmbH",
    companyUrl: "https://www.bluesky.at",
    location: "Sillian",
    date: "07.09.2024",
    description: "Geil Schirme reparieren.",
    jobUrl: "https://www.bluesky.at/jobs",
    categoryId: 3,
    employmentType: ["Vollzeit", "Teilzeit", "Freelance"],
    listingType: 'search',
    highlight: false
  }
]

export default jobs;
