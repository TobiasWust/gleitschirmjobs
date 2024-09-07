type Category = {
  id: number;
  name: string;
  description: string;
};

const categories: Category[] = [
  {
    id: 0,
    name: "Fluglehrer:in",
    description: "Fluglehrer:innen sind für die Ausbildung verantwortlich.",

  },
  {
    id: 1,
    name: "Tandempilot:in",
    description: "Tandempilot:innen fliegen im Doppelsitzer.",
  },
  {
    id: 2,
    name: "Office-Mitarbeiter:in",
    description: "Office-Mitarbeiter:innen sind für Verwaltung und Organisation zuständig.",
  },
  {
    id: 3,
    name: "Techniker:in",
    description: "Techniker:innen kümmern sich um Wartung und Reparatur.",
  },
  {
    id: 4,
    name: "Sonstiges",
    description: "Sonstige Berufe, die in einem Flugbetrieb vorkommen.",
  },
];

export function getCategoryNameById(id: number) {
  return categories.find((category) => category.id === id)?.name;
}

export default categories;
