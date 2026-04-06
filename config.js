window.SITE_CONFIG = {
  name: "Belinda Cheah Yi Shuen",
  tagline: "Designer & developer building thoughtful digital experiences.",
  shortBio:
    "I craft accessible, performant interfaces and care about clear communication with teams and users.",
  email: "belindacheahyishuen@gmail.com",
  location: "Singapore, Singapore",
  social: {
    linkedin: "https://www.linkedin.com/in/myprofile",
    github: "https://github.com/bcys-belinda",
  },
 
  formspreeEndpoint: "https://formspree.io/f/mkopkbdo",

  /**
   * Work history
   */
  experience: [
    {
      title: "GRIT Trainee, Corporate Security(Systems and Technology)",
      company: "Grabtaxi Holdings Pte Ltd",
      location: "Singapore, Singapore",
      start: "2 March 2026",
      end: "Present",
      summary:
        "",
      highlights: [
        "Developed a data processing workflow integrating Python, n8n, and Google Sheets to manage and visualize incident data (2023–2026).",
        "Developed Python scripts in Cursor to extract, filter, and load raw data into Google Sheets.",
        "Configured OAuth 2.0 authentication via Google Auth Platform to securely integrate Google Sheets with automation workflows",
        "Built automation using n8n to process incoming data, trigger workflows and retrieve structured messages from Slack via bot integration(Bot ID & token) into google spreadsheet",
        "Automated data transformation and cleaning, ensuring consistency and usability for analysis",
        "Consolidated cleaned datasets into a structured Google Spreadsheet for reporting",
        "Created interactive dashboards using Looker Studio to visualize multi-year trends (2023–2026)"
      ],
    },
    {
      title: "IT Intern",
      company: "Abundant Accounting Pte Ltd",
      location: "Singapore, Singapore",
      start: "March 2023",
      end: "August 2023",
      summary: "",
      highlights: ["Built and maintained the company’s website using WordPress in collaboration with another IT intern.",
         "Used Zapier to automate workflows and streamline daily business operations.",
         "Designed company brochures and digital marketing materials using Canva.",
         "Implemented Google Analytics tracking and applied SEO techniques to boost site visibility and engageent.",
         "Resolved IT issues promptly and maintained system reliability through daily performance checks.",
         "Demonstrated adaptability and strong problem-solving skills when learning new technologies and troubleshooting under pressure."],
    },
  ],

  /**
   * Education — degrees, diplomas
   */
  education: [
    {
      degree: "Bachelor of Information Technology (Major in Business Information Systems)",
      school: "Monash University",
      location: "Melbourne, Australia",
      start: "29 July 2024",
      end: "15 December 2025",
      details: "Core Unites Completed: ",
      highlights: ["Business Information Analysis", 
                  "Programming Fundamentals in Java",
                  "Business Information Systems and Processes",
                  "Mobile Application Development",
                  "Full Stack Development",
                  "Real Time Enterprise Systems",
                  "Data Analytics",
                  "Usability",
                  "Business Decision Modelling",
                  "Industry Experience Studio Project 1 & 2"],
    },
    {
      degree: "Diploma in Information Technology",
      school: "Singapore Polytechnic",
      location: "Singapore, Singapore",
      start: "April 2021",
      end: "May 2024",
      details: "Core Unites Completed: ",
      highlights: [""],
    },
  ],

  projects: [
    {
      title: "My Resume website",
      description:
        "A responsive single-page portfolio with animated skills, project cards, and a contact form. Built with semantic HTML, modern CSS, and a small amount of JavaScript.",
      image: "",
      liveUrl: "#",
      repoUrl: "https://github.com/bcys-belinda/Resume",
      tags: ["HTML", "CSS", "JavaScript", "Accessibility"],
    },
    {
      title: "Project two",
      description:
        "Brief description of what I built, the problem it solved, and technologies I used.",
      image: "",
      liveUrl: "https://example.com",
      repoUrl: "https://github.com/myusername/project-two",
      tags: ["React", "TypeScript", "API"],
    },
    {
      title: "Project three",
      description:
        "Another highlight — keep descriptions concise and outcome-focused.",
      image: "",
      liveUrl: "https://example.com",
      repoUrl: "https://github.com/myusername/project-three",
      tags: ["Node.js", "Database"],
    },
  ],
  /** Technical & soft skills*/
  skillGroups: [
    {
      title: "Programming",
      items: [
        "HTML",
        "CSS",
        "JavaScript",
        "MySQL",
        "MongoDB",
        "Java",
        "Python",
        "CakePHP",
      ],
    },
    {
      title: "Frameworks & tools",
      items: [
        "React Native",
        "cPanel",
        "WordPress",
        "Canva",
        "Figma",
        "Lucidchart",
        "RStudio",
        "Zapier",
        "n8n",
        "Cursor",
        "Looker Studio",
        "Slack integration bot",
      ],
    },
    {
      title: "Web development",
      items: [
        "UI/UX design",
        "Web & mobile app development",
        "SEO",
        "Google Analytics",
        "Google Cloud APIs (Google Sheets API, OAuth 2.0)",
      ],
    },
    {
      title: "Soft skills",
      items: [
        "Critical thinking",
        "Team collaboration",
        "Communication",
        "Time management",
        "Business analysis",
      ],
    },
  ],

  /**
   * Languages — spoken/written proficiency.
   */
  languages: [
    { name: "English", proficiency: "Native or bilingual", level: 100 },
    { name: "Chinese (Mandarin)", proficiency: "Full professional proficiency — reading, writing, speaking", level: 90},
    { name: "Cantonese", proficiency: "Conversational", level: 55 },
  ],
};
