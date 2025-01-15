import animations from "@assets/skills/animations.svg";
import frameworks from "@assets/skills/frameworks.svg";
import interfaces from "@assets/skills/interfaces.svg";
import project1 from "@assets/projects/project1.gif";
import project2 from "@assets/projects/project2.gif";
import project3 from "@assets/projects/project3.gif";
import responsive from "@assets/skills/responsive.svg";

export interface NavLink {
  id: string;
  title: string;
}

export const navLinks: NavLink[] = [
  {
    id: "hero",
    title: "Hero",
  },
  {
    id: "portfolio",
    title: "Portfolio",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "tech",
    title: "Tech",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export interface Experience {
  title: string;
  company_name: string;
  date: string;
  details: string[];
}

export const experiences: Experience[] = [
  {
    title: "Frontend Developer",
    company_name: "ProTechnology GmbH",
    date: "2022 - Present",
    details: [
      "Implemented <span style='color: white;'>scalable state-management solutions</span> to reduce code complexity by up to 30%, ensuring smooth data flow and superior user experiences. Leveraged CSS preprocessors like Sass and LESS to decrease CSS file size by 30%, boosting maintainability and cross-browser compatibility.",
      "Spearheaded the development and documentation of a <span style='color: white;'>React-based component library using Storybook</span>, streamlining UI workflows and ensuring cohesive design standards across applications. Achieved a significant reduction in development time while improving scalability and maintainability.",
      "Advocated for <span style='color: white;'>Test-Driven Development (TDD) practices</span>, improving code coverage and reliability by 20%. Supported CI/CD pipelines for cloud-based services, reducing deployment time by 20% and accelerating feature release cycles. Successfully integrated advanced SDKs, including payment gateways and real-time communication tools, enhancing product feature set by 50% and go-to-market speed by 25%.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "5D-institut GmbH",
    date: "2019 - 2022",
    details: [
      "<span style='color: white;'>Delivered a robust MVP for BIMSWARM</span> using React and Redux, seamlessly translating UI/UX designs from Figma and Adobe XD. This initiative accelerated development timelines and ensured the product's scalability, establishing a solid foundation for future growth.",
      "Partnered with developers to integrate <span style='color: white;'>ASP.NET MVC applications with SQL Server databases</span> using Entity Framework, enabling efficient data retrieval and management. Designed and implemented workflows for key corporate partners like Bosch and Schneider, ensuring tailored solutions to meet their specific needs.",
      "Facilitated Agile transformations in cross-functional teams, driving increased productivity and streamlined project delivery. Engineered optimized dashboards and reports leveraging complex SQL, providing real-time insights and actionable KPIs to enhance business performance and decision-making.",
    ],
  },
  {
    title: "Software Developer Intern",
    company_name: "Carl Zeiss",
    date: "2018 - 2018",
    details: [
      "Developed <span style='color: white;'>interactive 3D applications</span> for HoloLens and Web, enabling seamless 3D model manipulation.",
    ],
  },
];

export interface PortfolioItem {
  name: string;
  description: string;
  image: string;
}

export const portfolio: PortfolioItem[] = [
  {
    name: "Expertise in Creating Visually Engaging, Responsive Interfaces",
    description:
      "understand the nuances of responsive design and prioritize making sure every user, regardless of device, experiences your work as intended.",
    image: responsive,
  },
  {
    name: "Proficiency in Modern Frontend Frameworks and Libraries",
    description:
      "knowledge of popular frontend frameworks like React, Vue, or Angular to create dynamic, component-driven web applications. This demonstrates that you’re not only interested in design but are also equipped with the technical skills to bring your designs to life.",
    image: frameworks,
  },
  {
    name: "Deep Understanding of UI/UX Principles",
    description:
      "UI/UX fundamentals like user-centered design, intuitive navigation, accessibility, and consistent branding. Explain how you focus on balancing aesthetics with functionality to ensure designs that are both attractive and easy to use.",
    image: interfaces,
  },
  {
    name: "Attention to Detail in Animation and Micro-Interactions",
    description:
      "Highlight your skill in adding subtle animations and micro-interactions that elevate the user experience without overwhelming it. This skill demonstrates your meticulous attention to detail and an ability to create enjoyable, memorable digital experiences.",
    image: animations,
  },
];

// Projects
export interface Project {
  name: string;
  description: string;
  stack: { name: string; icon: string }[];
  sourceCode?: string;
  livePreview?: string;
  path: string;
  backGround: string;
}

export const projects: Project[] = [
  {
    name: "Job Posting Application",
    description: "Website for job listing, with job description panel",
    stack: [
      { name: "React", icon: "" },
      { name: "TypeScript", icon: "" },
      { name: "Redux", icon: "" },
      { name: "React-bootstrap", icon: "" },
    ],
    sourceCode: "https://github.com/DarpanVats007/job-posting",
    livePreview: "https://darpanvats007.github.io/job-posting/",
    path: project1, // Replace with the actual imported variable if needed
    backGround: "project project__1",
  },
  {
    name: "Sensor Data Visualization",
    description:
      "Interactive website with 400 sample size data from 10 sensors",
    stack: [
      { name: "React", icon: "" },
      { name: "HighCharts", icon: "" },
      { name: "HTML", icon: "" },
      { name: "CSS", icon: "" },
    ],
    sourceCode:
      "https://codesandbox.io/p/sandbox/bold-sea-jqgt6v?file=%2Fsrc%2Findex.js",
    livePreview:
      "https://codesandbox.io/p/sandbox/bold-sea-jqgt6v?file=%2Fsrc%2Findex.js",
    path: project2, // Replace with the actual imported variable if needed
    backGround: "project project__3",
  },
  {
    name: "Quiz app",
    description:
      "Trivia quiz app presents user with 10 questions and shows the result in the end",
    stack: [
      { name: "React", icon: "" },
      { name: "Context API", icon: "" },
      { name: "HTML", icon: "" },
      { name: "CSS", icon: "" },
    ],
    sourceCode:
      "https://codesandbox.io/p/sandbox/trivia-app-ml3lfs?file=%2Fsrc%2Findex.js",
    livePreview:
      "https://codesandbox.io/p/sandbox/trivia-app-ml3lfs?file=%2Fsrc%2Findex.js",
    path: project3, // Replace with the actual imported variable if needed
    backGround: "project project__2",
  },
];
