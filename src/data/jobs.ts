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
  employmentType?: ('Vollzeit' | 'Teilzeit' | 'Freelance')[]
  listingType: 'offer' | 'search';
  highlight: boolean;
};

const jobs: Job[] = [
  {
    id: 0,
    title: "Fluglehrer in den Südalpen!",
    company: "flugschule GmbH",
    companyUrl: "https://www.flugschule.at",
    location: "Sillian",
    date: "07.09.2024",
    description: "Einzige Flugschule in Tirol sucht Fluglehrer:in für die Ausbildung von Gleitschirmpilot:innen. Einzige Flugschule in Tirol sucht Fluglehrer:in für die Ausbildung von Gleitschirmpilot:innen. Einzige Flugschule in Tirol sucht Fluglehrer:in für die Ausbildung von Gleitschirmpilot:innen.",
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
    company: "Ganz unbekannter Checkbetrieb GmbH",
    companyUrl: "https://www.flugschule.at",
    location: "Sillian",
    date: "07.09.2024",
    description: "Geil Schirme reparieren.",
    jobUrl: "https://www.flugschule.at/jobs",
    categoryId: 3,
    employmentType: ["Vollzeit", "Teilzeit", "Freelance"],
    listingType: 'search',
    highlight: false
  },
  {
    id: 3,
    title: "Tandempilot aus Aschau",
    company: "Peter Pilot",
    location: "Aschau",
    date: "08.09.2024",
    description: "Hallo. Flieg mit mir.",
    categoryId: 4,
    listingType: 'offer',
    highlight: false
  },
  {
    id: 4,
    title: "Fluglehrer für Flugreise",
    company: "Flugreisefirma",
    location: "Alaska",
    date: "08.09.2024",
    description: "Wir suchen einen Fluglehrer, der nach Alaska will. Du solltest Erfahrung mit Kälte haben, außerdem solltest du ein Bär sein. Wir haben keine Ahnung von Gleitschirmen. Immerhin haben wir einen Gleitschirm. Vielleicht. Wir haben auch keine Ahnung von Fluglehrern. Aber wir haben eine Ahnung von Flugreisen. Und die machen wir. Nach Alaska. Mit dir. Wenn du ein Bär bist.",
    categoryId: 0,
    listingType: 'search',
    highlight: false
  },
  {
    id: 5,
    title: "Büroaushilfe",
    company: "Irgendwer anders",
    location: "München",
    date: "08.09.2024",
    description: "Wir brauchen jemanden, der uns hilft.",
    categoryId: 0,
    listingType: 'search',
    highlight: false
  },
]

export default jobs;
