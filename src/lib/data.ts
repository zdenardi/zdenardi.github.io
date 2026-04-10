export const personalInfo = {
  name: "Zach De Nardi",
  location: "Los Angeles, CA",
  email: "zdenardi@gmail.com",
  github: "https://github.com/zdenardi",
  linkedin: "https://linkedin.com/in/zdenardi",
  profilePicture: "/zach-hs.jpg",
  heroDescription: [
    "Full-stack software engineer with over 5 years of expertise in building scalable, type-safe systems and developer-friendly tooling.",
    "Found his love of engineering by solving the lack of software for artists in Chicago and never looked back.",
  ],
};

export const workExperience = [
  {
    company: "Marketplace AI",
    position: "Software Engineer",
    period: "Feb 2025 - April 2026",
    achievements: [
      "Improved scalability and reliability of complex UI flows by establishing a strongly typed XState machine architecture, reducing runtime errors and simplifying test coverage",
      "Elevated front-end consistency through creation of reusable, strongly typed React components, reducing duplication and improving maintainability",
      "Led team-wide weekly ticket reviews to keep engineering team aligned and informed",
      "Created a form adapter to dynamically render components with configurable validation logic",
      "Increased development speed by over 60% by introducing replicable component testing",
      "Stabilized user journeys by implementing Cypress end-to-end testing patterns, reducing regression bugs by 90%",
      "Designed VS Code debug profiles for efficient breakpoint debugging",
      "Developed RESTful APIs with robust DTO patterns using Litestar and SQLAlchemy",
    ],
  },
  {
    company: "Landi Industries",
    position: "Software Engineer",
    period: "April 2022 - June 2024",
    achievements: [
      "Pioneered an automated testing pipeline with GitHub Actions integrating a Chrome Extension with a Web3 network",
      "Reduced regression risk and improved code quality by implementing a comprehensive test plan for a previously untested codebase",
      "Built custom authentication patterns to enable seamless CI/CD integration",
      "Improved developer onboarding time by 90% through Docker-based local development environments",
      "Mentored junior engineers to improve coding practices, reviews, and efficiency",
      "Collaborated with stakeholders to translate customer needs into technical solutions",
      "Led sprint planning and coordinated feature delivery across the team",
    ],
  },
  {
    company: "Sterling Healthcare Logistics Industries",
    position: "Software Engineer",
    period: "August 2021 - April 2022",
    achievements: [
      "Introduced object-oriented programming best practices to improve code readability, maintainability, and performance",
      "Improved code readability by implementing scalable data structures",
      "Integrated third-party jQuery library to build a guided wizard with custom validation for improved customer data entry",
    ],
  },
];
export const education = [
  {
    institution: "DePaul University",
    location: "Chicago",
    degree: "MFA",
    period: "2012 - 2015",
  },
];
export const skills = {
  programmingLanguages: ["Javascript", "Typescript", "Python", "PHP"],
  frontendDevelopment: [
    "ReactJS",
    "NextJS",
    "Tailwind",
    "Angular",
    "Astro",
    "HTML",
    "CSS",
  ],
  backendDevelopment: ["Node", "Express", "Deno", "Litestar", "Django"],
  databaseAndStorage: ["SQL", "Postgres", "MongoDB"],
  cloudAndDevOps: ["AWS", "Vercel", "Firebase"],
  toolsAndServices: [
    "JQuery",
    "Cypress",
    "Jest/Mocha",
    "CI/CD",
    "NX",
    "Github/Github Actions",
    "Docker",
  ],
};

export const projects = [
  {
    title: "ClassM8",
    github: "https://github.com/zdenardi/classm8",
    status: "In Progress",
    description: [
      "A Class Management Application running Deno",
      "I'm currently in an acting class that does all of its scheduling through email, so I thought it would be fun to learn Deno and try to fill a need for a better scheduling system.",
    ],
  },
  {
    title: "TikTok Scraper ",
    status: "In Progress - Currently not Public",
    // github: "https://github.com/loremipsum/dolorapp",
    description: [
      "NextJS Project Scraping Comments by TikTok Urls",
      "Friend of mine wanted to scrape comments from a list of his TikTok videos for his Dramatic Podcast for more engagement",
    ],
  },
  {
    title: "Automatic Audition Google Sheet Browser Extension ",
    status: "Just a Proof of Concept ",
    github: "https://github.com/zdenardi/auditionTrackerExtTS",
    description: [
      "Browser Extension that connects Actors Access Submissions to your Google Sheet",
      "Just a proof of concept I was fiddling with",
    ],
  },
  {
    title: "Wiffle Ball Score Counter",
    status: "Done ",
    github: "https://github.com/zdenardi/blitzball-tracker",
    description: ["Simple Project to learn React-Native"],
  },
  {
    title: "Python Monopoly Clone",
    status: "Haven't touched in a while ",
    github: "https://github.com/zdenardi/CapitalismTheGame",
    description: [
      "A fun little side project written in Python",
      "Tried to make Monopoly clone and only use the terminal",
    ],
  },
];
