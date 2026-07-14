export const Frontend_skill = [
  { skill_name: "HTML5", Image: "/html.png", width: 80, height: 80 },
  { skill_name: "CSS3", Image: "/css.png", width: 80, height: 80 },
  { skill_name: "JavaScript", Image: "/js.png", width: 65, height: 65 },
  { skill_name: "TypeScript", Image: "/ts.png", width: 80, height: 80 },
  { skill_name: "C#", Image: "/csharp.svg", width: 70, height: 70 },
  { skill_name: "React", Image: "/react.png", width: 80, height: 80 },
  { skill_name: "Angular", Image: "/angular.svg", width: 70, height: 70 },
  { skill_name: "Redux", Image: "/redux.png", width: 80, height: 80 },
  { skill_name: "Next.js", Image: "/next.png", width: 80, height: 80 },
  { skill_name: "Tailwind CSS", Image: "/tailwind.png", width: 80, height: 80 },
  { skill_name: "Bootstrap", Image: "/bootstrap.svg", width: 70, height: 70 },
];

export const Backend_skill = [
  { skill_name: "Node.js", Image: "/node-js.png", width: 80, height: 80 },
  { skill_name: "Express.js", Image: "/express.png", width: 80, height: 80 },
  { skill_name: "NestJS", Image: "/nestjs.svg", width: 70, height: 70 },
  { skill_name: "MongoDB", Image: "/mongodb.png", width: 40, height: 40 },
  { skill_name: "PostgreSQL", Image: "/postger.png", width: 70, height: 70 },
  { skill_name: "Redis", Image: "/redis.svg", width: 70, height: 70 },
  { skill_name: "GraphQL", Image: "/graphql.png", width: 80, height: 80 },
  { skill_name: "RabbitMQ", Image: "/rabbitmq.svg", width: 70, height: 70 },
  { skill_name: "Socket.io", Image: "/socketio.svg", width: 70, height: 70 },
];

export const DevOps_skill = [
  { skill_name: "Docker", Image: "/docker.webp", width: 70, height: 70 },
  { skill_name: "Kubernetes", Image: "/kubernetes.svg", width: 70, height: 70 },
  { skill_name: "AWS", Image: "/aws.svg", width: 70, height: 70 },
  { skill_name: "Azure", Image: "/azure.svg", width: 70, height: 70 },
  { skill_name: "Nginx", Image: "/nginx.svg", width: 70, height: 70 },
  { skill_name: "Jenkins", Image: "/jenkins.svg", width: 70, height: 70 },
  { skill_name: "Git", Image: "/gitwhite.png", width: 70, height: 70 },
  { skill_name: "Figma", Image: "/figma.png", width: 50, height: 50 },
];

export const Socials = [
  {
    name: "LinkedIn",
    src: "/linkedin.svg",
    url: "https://www.linkedin.com/in/jamseer-mc",
  },
  {
    name: "GitHub",
    src: "/github.svg",
    url: "https://github.com/jamsheerply",
  },
  {
    name: "LeetCode",
    src: "/leetcode.svg",
    url: "https://leetcode.com/u/jamsheerply",
  },
];

export const Experience_data = [
  {
    role: "Software Development Engineer",
    companies: [
      {
        name: "Ethereal Covenant",
        url: "https://www.linkedin.com/company/ethereal-covenant/posts/?feedView=all",
      },
      {
        name: "NXGEN Technology AG",
        url: "https://www.linkedin.com/company/nxgen-technology-ag/posts/?feedView=all",
        prefix: " (Client: ",
        suffix: ")",
      },
    ],
    location: "Bengaluru, Karnataka",
    duration: "March 2025 — Present",
    highlights: [
      "Developed and enhanced modules for the NXGEN GCX platform, integrating multiple video surveillance and security systems including Ajax, Hikvision, Dahua, Vivotek, ENEO, Hanwha, and Dahua Cloud.",
      "Designed and maintained scalable backend services using Node.js, TypeScript, Express.js, MongoDB, Redis, RabbitMQ, and Node-RED to support real-time event ingestion, device communication, and distributed system workflows.",
      "Implemented features for live streaming, playback, RTSP/HLS video streaming, event processing, snapshot generation, clip downloads, and camera audio controls, while troubleshooting complex cloud and on-premise device integrations.",
      "Built a production-grade Hikvision clip download pipeline using ISAPI, RTSP fallback, FFmpeg remuxing, and AWS S3 upload, improving reliability across multiple NVR deployments.",
      "Designed a TimescaleDB schema for time-series event and clip-download logging with automated retention policies, enabling scalable monitoring and audit capabilities.",
      "Collaborated with QA teams, product managers, and third-party vendors to troubleshoot production issues, optimize application performance, and deliver production-ready features in Agile environments.",
    ],
  },
  {
    role: "MERN Stack Developer",
    companies: [
      {
        name: "Tenor Hut",
        url: "https://www.linkedin.com/company/tenor-hut/about/",
      },
    ],
    location: "Ernakulam, Kerala",
    duration: "October 2021 — February 2025",
    highlights: [
      "Designed and developed full-stack web applications using React.js, Node.js, Express.js, MongoDB, and TypeScript, delivering scalable and maintainable solutions for multiple client projects.",
      "Built reusable UI components, secure authentication systems, RESTful APIs, and responsive interfaces, ensuring seamless user experiences across desktop and mobile devices.",
      "Optimized backend services, database queries, and application performance while integrating third-party APIs and implementing role-based access control for enterprise applications.",
      "Collaborated with clients and cross-functional teams to gather requirements, develop new features, resolve production issues, and deploy scalable applications following Agile methodologies.",
    ],
  },
];

export const Education_data = [
  {
    school: "APJ Abdul Kalam Technological University",
    url: "https://ktu.edu.in/",
    degree: "Bachelor of Technology (Mechanical Engineering)",
    location: "Ernakulam, Kerala",
    duration: "2015 — 2019",
  },
];

export const Languages_data = [
  { language: "English", level: "Professional / Fluent" },
  { language: "Malayalam", level: "Native" },
  { language: "Hindi", level: "Conversational" },
];

export const Availability = {
  openTo: ["Full-time"],
  locations: ["Remote", "Bengaluru", "Hybrid", "Relocate abroad"],
  badge: "Open to Full-time · Remote / Bengaluru",
};
