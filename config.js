/**
 * Personalise your site here — edit these values and refresh the page.
 */
window.SITE_CONFIG = {
  name: "Your Name",
  tagline: "Designer & developer building thoughtful digital experiences.",
  shortBio:
    "I craft accessible, performant interfaces and care about clear communication with teams and users.",
  email: "hello@example.com",
  location: "Your City, Country",
  social: {
    linkedin: "https://www.linkedin.com/in/yourprofile",
    github: "https://github.com/yourusername",
  },
  /** Replace with your Formspree form endpoint: https://formspree.io */
  formspreeEndpoint: "https://formspree.io/f/YOUR_FORM_ID",

  /**
   * Work history — newest first. Optional: location, summary, highlights (bullet strings).
   * Dates are free text (e.g. "Jan 2022" and "Present").
   */
  experience: [
    {
      title: "Your job title",
      company: "Company name",
      location: "City, Country",
      start: "2023",
      end: "Present",
      summary:
        "One or two sentences on your role, scope, and impact. Replace with your real experience.",
      highlights: [
        "Outcome or responsibility you want to highlight",
        "Another measurable result or key contribution",
        "Cross-functional collaboration, tooling, or leadership",
      ],
    },
    {
      title: "Previous role",
      company: "Previous company",
      location: "",
      start: "2020",
      end: "2023",
      summary: "",
      highlights: ["Focus area or achievement", "Technologies or domains you owned"],
    },
  ],

  /**
   * Education — degrees, bootcamps, or notable programs. Optional: location, details, highlights.
   */
  education: [
    {
      degree: "B.Sc. in Your Field (or diploma / certificate name)",
      school: "University or institution name",
      location: "City, Country",
      start: "2016",
      end: "2020",
      details: "Relevant coursework, honours, or thesis — optional one line.",
      highlights: ["Dean's list", "Student club or competition — optional bullets"],
    },
  ],

  projects: [
    {
      title: "Portfolio & resume website",
      description:
        "This site — a responsive single-page portfolio with animated skills, project cards, and a contact form. Built with semantic HTML, modern CSS, and a small amount of vanilla JavaScript.",
      image: "",
      liveUrl: "#",
      repoUrl: "https://github.com/yourusername/your-resume-site",
      tags: ["HTML", "CSS", "JavaScript", "Accessibility"],
    },
    {
      title: "Project two",
      description:
        "Brief description of what you built, the problem it solved, and technologies you used.",
      image: "",
      liveUrl: "https://example.com",
      repoUrl: "https://github.com/yourusername/project-two",
      tags: ["React", "TypeScript", "API"],
    },
    {
      title: "Project three",
      description:
        "Another highlight — keep descriptions concise and outcome-focused.",
      image: "",
      liveUrl: "https://example.com",
      repoUrl: "https://github.com/yourusername/project-three",
      tags: ["Node.js", "Database"],
    },
  ],
  skillCategories: [
    {
      name: "Languages & markup",
      skills: [
        { name: "JavaScript / TypeScript", level: 90 },
        { name: "HTML & CSS", level: 95 },
        { name: "Python", level: 75 },
      ],
    },
    {
      name: "Frameworks & tools",
      skills: [
        { name: "React", level: 85 },
        { name: "Git & CI", level: 88 },
        { name: "Testing", level: 70 },
      ],
    },
  ],
  skillTags: [
    "REST APIs",
    "Responsive design",
    "Performance",
    "A11y",
    "Agile",
    "Documentation",
  ],
};
