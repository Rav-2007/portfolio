/* Designer-focused portfolio data for Ravi Kiran H */

// Website related settings
const settings = {
  isSplash: true,
};

// SEO
const seo = {
  title: "Ravi Kiran H — Product & UX Designer",
  description:
    "Product & UX Designer crafting research-driven, accessible, and beautiful digital experiences for web and mobile.",
  og: {
    title: "Ravi Kiran H Portfolio",
    type: "website",
    url: "https://ravikiran.design/",
  },
};

// Home / Greeting
const greeting = {
  title: "Ravi Kiran H",
  logo_name: "RaviKiranH",
  nickname: "Ravi",
  subTitle:
    "AI and Full-Stack Engineer turned Product Designer — building scalable web applications and secure AI frameworks; proficient in full-stack architecture, machine learning deployment, and cloud API integration.",
  resumeLink: "", // add PDF link if you want
  portfolio_repository: "https://github.com/Rav-2007/masterPortfolio",
  githubProfile: "https://github.com/Rav-2007",
};

// Social links
const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/Rav-2007",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ravi-kiran-5990b6354/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:ravikiran.h2406@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
];

// Skills focused for Developer role
const skills = {
  data: [
    {
      title: "Artificial Intelligence & Machine Learning",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing and fine-tuning Large Language Models (LLMs) and Small Language Models (SLMs)",
        "⚡ Implementing advanced NLP workflows, RAG systems, and Agentic AI using frameworks like Google GenAI SDK and FastAPI",
        "⚡ Ensuring AI security by defending against OWASP Top 10 LLM Vulnerabilities",
      ],
      softwareSkills: [
        {
          skillName: "Python",
          fontAwesomeClassname: "simple-icons:python",
          style: { color: "#3776AB" },
        },
        {
          skillName: "TensorFlow",
          fontAwesomeClassname: "simple-icons:tensorflow",
          style: { color: "#FF6F00" },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "simple-icons:pytorch",
          style: { color: "#EE4C2C" },
        },
        {
          skillName: "OpenAI",
          fontAwesomeClassname: "simple-icons:openai",
          style: { color: "#412991" },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building highly responsive and dynamic frontends using React.js and Next.js",
        "⚡ Creating scalable backend services using Node.js, Express, and Python FastAPI",
        "⚡ Designing secure, strict schema validations and role-based access control systems",
      ],
      softwareSkills: [
        {
          skillName: "React",
          fontAwesomeClassname: "simple-icons:react",
          style: { color: "#61DAFB" },
        },
        {
          skillName: "Node.js",
          fontAwesomeClassname: "simple-icons:nodedotjs",
          style: { color: "#339933" },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: { color: "#3178C6" },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: { color: "#47A248" },
        },
      ],
    },
    {
      title: "Cloud Infrastructure & DevOps",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Architecting cloud solutions using AWS (Bedrock, EC2, S3) and Vercel for zero-downtime deployment",
        "⚡ Setting up automated CI/CD pipelines via GitHub Actions for rapid software delivery",
        "⚡ Managing and securing Linux-based environments and deployments",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: { color: "#232F3E" },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: { color: "#2088FF" },
        },
        {
          skillName: "Vercel",
          fontAwesomeClassname: "simple-icons:vercel",
          style: { color: "#000000" },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: { color: "#FCC624" },
        },
      ],
    },
  ],
};

// Technical proficiencies (from resume)
const technicalProficiencies = {
  programmingLanguages: ["Python", "Java", "C", "C++"],
  frontendBackend: ["React.js", "Next.js", "Tailwind CSS", "Node.js", "Express.js", "TypeScript", "Vite"],
  aiEngineeringSecurity: [
    "LLMs", "SLMs", "NLP", "RAG", "Model Context Protocol (MCP)", "Agentic AI", "Prompt Engineering", "OWASP LLM Top 10 Security"
  ],
  cloudDevOps: ["AWS (Bedrock, IAM, VPC, EC2, S3)", "GitHub Actions (CI/CD)", "Linux", "Vercel"],
  databases: ["MongoDB", "MySQL"],
  toolsFrameworks: ["Canvas API", "Google GenAI SDK", "Google Search Grounding", "FastAPI", "Groq API", "REST APIs"],
};

// Education (from resume)
const degrees = {
  degrees: [
    {
      title: "Bachelor of Technology — Artificial Intelligence and Machine Learning",
      subtitle: "RMD Engineering College",
      duration: "August 2024 — Present",
      descriptions: ["Cumulative GPA: 7.1 / 10.0"],
    },
    {
      title: "Higher Secondary Education",
      subtitle: "Vailankanni Matriculation Higher Secondary School, Veppanapalli",
      duration: "August 2022 — March 2024",
      descriptions: [],
    },
  ],
};

// Experience (resume)
const experienceResume = {
  title: "Professional Experience",
  subtitle: "",
  data: [
    {
      title: "Freelance Full-Stack Developer — Photography Studio Web App",
      duration: "April 2026",
      description: [
        "Delivered a production-grade studio platform with custom administrative controls.",
        "Implemented a mobile-first responsive dynamic image gallery interface.",
        "Developed an administrative asset pipeline enabling non-technical content management.",
      ],
      tech: ["React", "Node.js", "MongoDB", "Vercel"],
    },
    {
      title: "Freelance Full-Stack Developer — Video Tree Platform",
      duration: "April 2026 — Present",
      description: [
        "Built a full-stack web application supporting hierarchical video navigation.",
        "Integrated real-time playback controls with structured database management.",
        "Configured automated CI/CD deployment pipelines on Vercel with zero downtime.",
      ],
      tech: ["React", "Node.js", "Express", "Vercel"],
    },
  ],
};

// Projects (resume)
const projects = {
  data: [
    {
      title: "FUGEN AI — Virtual Try-On Platform",
      date: "April 2026 — Present",
      description: [
        "Developed a virtual outfit preview application using base64 image processing pipelines.",
        "Integrated Google GenAI SDK for conversational AI and real-time product search.",
        "Enforced structured data validation using strict JSON schema definitions.",
      ],
      tech: ["React", "Node.js", "Google GenAI SDK", "Canvas API"],
    },
    {
      title: "AI BharatShield — LLM Security Framework",
      date: "January 2026",
      description: [
        "Engineered an automated security testing suite for OWASP Top 10 LLM vulnerabilities.",
        "Constructed a 5-tier multi-vector attack execution engine with automated evaluation.",
        "Exposed security assessment workflows via FastAPI REST endpoints.",
      ],
      tech: ["Python", "FastAPI", "Groq API"],
    },
    {
      title: "Full-Stack Hackathon & Course Platform",
      date: "January 2026",
      description: [
        "Architected a multi-role web platform for course enrollment and hackathon management.",
        "Designed role-based access control (RBAC) using JWT authentication.",
        "Structured scalable MongoDB collections to guarantee data isolation.",
      ],
      tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    },
  ],
};

// Honors & Certifications (resume)
const honorsCertifications = {
  honors: [
    "IIT Madras Hackathon — National Runner-Up",
    "LeetCode — Solved 180+ problems",
  ],
  certifications: [
    "Oracle: Certified Oracle Generative AI Professional",
    "Oracle Apex Cloud",
    "Google Cloud: Agentic AI Day — 20+ Skill Badges",
    "GitHub Skills: Secure Code Game Completion (Seasons 1–3)",
    "OWASP: LLM Security Labs (10/10 Completed)",
  ],
};

// Competitive coding / profiles (minimal — add links if available)
const competitiveSites = {
  competitiveSites: [],
};

// Certifications for Education page (shallow objects for the existing component)
const certifications = {
  certifications: honorsCertifications.certifications.map((c, i) => ({
    title: c,
    subtitle: "",
    logo_path: "",
    certificate_link: "",
    alt_name: "",
    color_code: "#000000",
  })),
};

// Light Projects header and a few design-focused projects
const projectsHeader = {
  title: "Selected Projects",
  description:
    "Case studies covering product design, research, visual design, and design systems.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Design articles and writeups.",
  avatar_image_path: "projects_image.svg",
};

const publications = { data: [] };

// Minimal Experience tailored for portfolio; keep entries concise
const experience = {
  title: "Experience",
  subtitle: "Design & Product",
  description:
    "I work across research, interaction design, and visual systems to deliver product outcomes.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: experienceResume.data.map((e) => ({
        title: e.title,
        company: e.title.includes("Freelance") ? "Freelance" : "",
        company_url: "",
        logo_path: "",
        duration: e.duration,
        location: e.location || "",
        description: e.description,
        color: "#0879bf",
      })),
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "contactMail.png",
    description:
      "I’m available for product and design roles — email me at ravikiran.h2406@gmail.com",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  technicalProficiencies,
  degrees,
  experienceResume,
  projects,
  honorsCertifications,
  competitiveSites,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
