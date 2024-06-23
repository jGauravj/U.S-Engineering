export interface Job {
  id: number;
  title: string;
  description: string[];
}


const jobsData:Job[] = [
  {
    id: 1,
    title: "MGPS Plant Operator",
    description: [
      "Must be physically fit",
      "ITI (Electrical/Mechanical) certification required",
      "Minimum 3 years of experience as an MGPS operator",
      "Application requirements: Full name, contact number, email ID, resume, and education details",
    ],
  },
  {
    id: 2,
    title: "MGPS Plant Technician",
    description: [
      "Must be physically fit",
      "ITI (Electrical/Mechanical) certification required",
      "Minimum 3 years of relevant experience",
      "Application requirements: Full name, contact number, email ID, resume, and education details",
    ],
  },
  {
    id: 3,
    title: "MGPS Plant Supervisor",
    description: [
      "B.Tech in Engineering or Diploma (Electrical/Mechanical) required",
      "Minimum 3 years of relevant experience",
      "Application requirements: Full name, contact number, email ID, resume, and education details",
    ],
  },
  {
    id: 4,
    title: "Site Incharge",
    description: [
      "B.Tech/Diploma with 5 years of relevant experience",
      "Or ITI (Electrical/Mechanical) with more than 8 years of relevant experience",
      "Experience in MGPS work is mandatory",
      "Application requirements: Full name, contact number, email ID, resume, and education details",
    ],
  },
  {
    id: 5,
    title: "MGPS Helper",
    description: [
      "Must be physically fit",
      "Minimum educational requirement: 12th pass",
      "Application requirements: Full name, contact number, email ID, resume, and education details",
    ],
  },
]
export default jobsData;