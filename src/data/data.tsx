import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
//import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
//import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
//import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
//import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
//import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
//import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
//import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
//import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Marton Szaplonczay - Lead Architect',
  description: "Lead Architect | Technology Strategist | Automation Enthusiast - Professional portfolio of Marton Szaplonczay",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Marton Szaplonczay.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Poland-based <strong className="text-stone-100">Lead Architect & Technology Strategist</strong>, currently working
        at <strong className="text-stone-100">ABB Business Services</strong> guiding Solutions Architects and 
        shaping detailed strategies for complex architectures in the HR domain.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        My expertise spans <strong className="text-stone-100">IT infrastructure, Applications, Security Processes</strong> and 
        <strong className="text-stone-100"> Business Process Automation</strong>. I'm also a proud father of three who believes in 
        introducing <strong className="text-stone-100">best practices</strong> and working within established frameworks like TOGAF.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `As a Lead Architect, I excel in guiding Solutions Architects and shaping detailed strategies for complex architectures. 
  I am a customer-oriented professional with the ability to communicate effectively with stakeholders at different levels in the 
  organization. I am skilled in making informed decisions regarding technology within my area of responsibility and have a knack 
  for evaluating solutions objectively and making strategic recommendations.`,
  aboutItems: [
    {label: 'Location', text: 'Poland', Icon: MapIcon},
    {label: 'Phone', text: '+48 507 358 917', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Hungarian / Polish', Icon: FlagIcon},
    {label: 'Interests', text: 'Technology, Architecture, Family', Icon: SparklesIcon},
    {label: 'Study', text: 'Jagiellonian University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'ABB Business Services', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Cloud & Architecture',
    skills: [
      {
        name: 'Azure (AZ-204, AZ-303, DP-200, DP-201)',
        level: 9,
      },
      {
        name: 'Enterprise Architecture (TOGAF 9)',
        level: 9,
      },
      {
        name: 'Solution Architecture',
        level: 10,
      },
    ],
  },
  {
    name: 'Automation & Tools',
    skills: [
      {
        name: 'Blue Prism',
        level: 8,
      },
      {
        name: 'UIPath',
        level: 8,
      },
      {
        name: 'Ardoq (EA Tool)',
        level: 7,
      },
    ],
  },
  {
    name: 'Data & Analytics',
    skills: [
      {
        name: 'SQL',
        level: 9,
      },
      {
        name: 'Python',
        level: 8,
      },
      {
        name: 'PowerBI',
        level: 8,
      },
      {
        name: 'Excel/VBA',
        level: 9,
      },
    ],
  },
  {
    name: 'Frameworks & Management',
    skills: [
      {
        name: 'ITIL v4',
        level: 8,
      },
      {
        name: 'Project Management',
        level: 9,
      },
      {
        name: 'Business Process Analysis',
        level: 9,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'HR Transformation Program',
    description: 'Providing key architectural support for ongoing HR Transformation program, including Workday implementation.',
    url: 'https://www.abb.com',
    image: porfolioImage1,
  },
  {
    title: 'Enterprise Architecture Framework',
    description: 'Formulating target architecture, IT roadmap, and reference designs using TOGAF framework.',
    url: 'https://www.abb.com',
    image: porfolioImage2,
  },
  {
    title: 'Data & Analytics Enhancement',
    description: 'Leading initiatives to enhance data and analytics capabilities across the organization.',
    url: 'https://www.abb.com',
    image: porfolioImage3,
  },
  {
    title: 'RPA Solutions',
    description: 'Implemented robotic process automation solutions using Blue Prism and UIPath.',
    url: 'https://www.abb.com',
    image: porfolioImage4,
  },
  {
    title: 'Technology Evaluation',
    description: 'Leading architecture part of technology evaluation processes (RFI/RFP).',
    url: 'https://www.abb.com',
    image: porfolioImage5,
  },
  {
    title: 'Solution Architecture Projects',
    description: 'Led 20+ projects from inception to delivery, ranging from ground-up solutions to enterprise-scale ETL.',
    url: 'https://www.abb.com',
    image: porfolioImage6,
  },
];

/**
 * Resume section
 */
export const education: TimelineItem[] = [
  {
    date: '2018 - 2020',
    location: 'Jagiellonian University, Poland',
    title: 'Master\'s Degree - Intellectual Property Law and New Technologies',
    content: (
      <p>
        Master Thesis: "Patenting AI related inventions - The European approach". 
        Program offered in cooperation with WIPO and Polish Patent Office, focusing on new technologies and patent law, 
        copyright in digital era, and data protection.
      </p>
    ),
  },
  {
    date: '2011 - 2016',
    location: 'University of Szeged, Hungary',
    title: 'Bachelor\'s Degree - Technical Management (Energy Specialization)',
    content: (
      <p>
        Thesis: "Input Shaft Manufacturing Plan, with CNC program for a selected operation". 
        Included ERASMUS exchanges at Uniwersytet Rolniczy (Poland, 2014-2015) and Philips College (Cyprus, 2012-2013).
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'February 2024 - Present',
    location: 'ABB Business Services',
    title: 'Lead Architect for HR Domain',
    content: (
      <p>
        Leading enterprise and technology architecture initiatives, formulating target architecture and IT roadmaps. 
        Coordinating and training solution architects, providing architectural support for HR Transformation program 
        including Workday implementation, and enhancing data & analytics capabilities.
      </p>
    ),
  },
  {
    date: 'April 2021 - February 2024',
    location: 'ABB Business Services',
    title: 'IS Solution Architect',
    content: (
      <p>
        Technology and Innovation Team member, excelling in precise technical solutions aligned with business needs. 
        Led 20+ projects from inception to delivery, innovated digital solutions through collaboration with Digital Scouting team, 
        and tackled complex technical challenges in software development and operations.
      </p>
    ),
  },
  {
    date: 'September 2019 - April 2021',
    location: 'ABB Business Services',
    title: 'Chief Specialist in IT Systems Design / Lead RPA Developer',
    content: (
      <p>
        Led robotic process automation initiatives and IT systems design projects, 
        focusing on business process optimization and automation solutions.
      </p>
    ),
  },
  {
    date: 'November 2018 - September 2019',
    location: 'ABB Business Services',
    title: 'Robotic Process Automation Specialist',
    content: (
      <p>
        Specialized in implementing RPA solutions using industry-leading tools, 
        automating business processes to improve efficiency and reduce manual workload.
      </p>
    ),
  },
  {
    date: 'April 2018 - November 2018',
    location: 'ABB Business Services',
    title: 'Supply Chain Management Analyst/Specialist',
    content: (
      <p>
        Analyzed and optimized supply chain processes, providing data-driven insights 
        and recommendations for operational improvements.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'ABB Colleague',
      text: 'Marton brings exceptional technical expertise and leadership to every project. His ability to translate complex technical concepts into business value is outstanding.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Solution Architect Team Member',
      text: 'Working with Marton has been transformative. His guidance in enterprise architecture and his systematic approach to problem-solving sets him apart as a true leader.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Technology Team Lead',
      text: 'Marton\'s expertise in automation and his strategic thinking make him an invaluable asset. His work on the HR transformation program demonstrates his ability to deliver at scale.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */
export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Feel free to reach out for collaboration opportunities, architectural consulting, or technology discussions.',
  items: [
    {
      type: ContactType.Email,
      text: 'marton@szaplonczay.com',
      href: 'mailto:marton@szaplonczay.com',
    },
    {
      type: ContactType.Location,
      text: 'Poland',
      href: 'https://www.google.com/maps/place/Poland',
    },
    {
      type: ContactType.LinkedIn,
      text: 'martonszaplonczay',
      href: 'https://www.linkedin.com/in/martonszaplonczay/',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/martonszaplonczay/'},
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/smartonstuff'} // You may want to update this
];