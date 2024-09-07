export type Job = {
  id: number
  title: string;
  company: string;
  date: string;
  description: string;
  categoryId: number;
  employmentType: string[];
};

const jobs: Job[] = [
  {
    id: 0,
    title: "Fluglehrer in Tirol!",
    company: "Bluesky GmbH",
    date: "07.09.2024",
    description: "Einzige Flugschule in Tirol sucht Fluglehrer:in für die Ausbildung von Gleitschirmpilot:innen. Einzige Flugschule in Tirol sucht Fluglehrer:in für die Ausbildung von Gleitschirmpilot:innen. Einzige Flugschule in Tirol sucht Fluglehrer:in für die Ausbildung von Gleitschirmpilot:innen.",
    categoryId: 0,
    employmentType: ["Vollzeit", "Teilzeit", "Freelance"]
  },
  {
    id: 2,
    title: "Werkstattmitarbeiter in Tirol!",
    company: "Bluesky GmbH",
    date: "07.09.2024",
    description: "Geil Schirme reparieren.",
    categoryId: 3,
    employmentType: ["Vollzeit", "Teilzeit", "Freelance"]
  }
]

export default jobs;
