export type View = "home" | "experience" | "toolkit" | "contact";

export const experience = [
  {
    role: "Front-end Engineer (Founding Member)",
    company: "Stealth Startup",
    dates: "Jun 2024 - Present",
    location: "Coimbatore, Tamil Nadu, India",
    intro:
      "The sole frontend engineer in a 3-member founding team, owning architecture, development, and delivery across mobile and web.",
    highlights: [
      "Led the production PWA for the 2026 Chennai Book Fair, helping visitors discover 50,000+ books across 1,000+ stalls.",
      "Engineered an interactive SVG-to-Konva exhibition map with clickable stalls, contextual book discovery, and adaptive desktop/mobile interactions.",
      "Reworked bulk data loading into paginated API requests of 200 books per request, improving Lighthouse Performance from 80 to 90+.",
      "Designed the Buy4Me WhatsApp workflow, supporting 20+ fulfilled remote orders, and migrated the React Native app from CLI to Expo.",
    ],
  },
  {
    role: "Software Developer Intern -> Software Developer I",
    company: "UST (Moonraft Innovation Labs)",
    dates: "Aug 2023 - Apr 2024",
    location: "Bangalore, Karnataka, India",
    intro:
      "Built responsive enterprise web experiences with React, JavaScript, Redux, SCSS, and Styled Components alongside cross-functional teams.",
    highlights: [
      "Created 5+ reusable UI components, including buttons, cards, and accordions, improving consistency and reducing duplicated frontend code.",
      "Resolved 50+ frontend bugs across React components, state management, and styling while shipping new product features.",
    ],
  },
];

export const skills = [
  { label: "Languages", value: "TypeScript, JavaScript, Java, Python" },
  { label: "Frontend", value: "React, React Native, Expo, Ionic, HTML5, CSS3" },
  { label: "Styling", value: "Tailwind CSS, SCSS, Styled Components" },
  {
    label: "State + Data",
    value: "Redux Toolkit, Zustand, GraphQL, REST APIs",
  },
  { label: "Tools", value: "Git, GitHub, Postman, Figma" },
];

export const navigation: { id: View; label: string }[] = [
  { id: "home", label: "Home" },
  { id: "experience", label: "Experience" },
  { id: "toolkit", label: "Toolkit" },
  { id: "contact", label: "Contact" },
];

export const greetings = [
  "Hello.",
  "Vanakkam.",
  "Bonjour.",
  "Hola.",
  "Ciao.",
  "Namaste.",
];

export const resumeLink =
  "https://drive.google.com/file/d/14wMMRj8KwDabEWQdknk103_xTMqtb2Uv/view?usp=drivesdk";
