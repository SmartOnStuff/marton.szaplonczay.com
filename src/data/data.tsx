import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,

  BoltIcon,

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
  title: 'Marton Szaplonczay - Automation Architect & Digital Strategist',
  description: "Automation-obsessed Lead Architect | Enterprise Strategist | Web3 Enthusiast - Where traditional architecture meets cutting-edge automation",
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
        I'm a Poland-based <strong className="text-stone-100">Lead Architect & Automation Evangelist</strong>, currently orchestrating 
        digital transformation at <strong className="text-stone-100">ABB Business Services</strong> while mentoring Solutions Architects and 
        crafting <em>next-level</em> strategies for complex HR domain architectures.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        My passion? <strong className="text-stone-100">Automating Everything</strong> — from enterprise processes to personal workflows, 
        from <strong className="text-stone-100">traditional IT infrastructure</strong> to <strong className="text-stone-100">Web3 DeFi strategies</strong>. 
        When I'm not architecting enterprise solutions, I'm building <strong className="text-stone-100">AI-powered trading bots</strong> and optimizing 
        yield farming strategies. Father of three, TOGAF practitioner, and believer that every manual task is just an automation opportunity waiting to happen.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Download Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Let\'s Connect',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `Think of me as an "Automation Architect" with an enterprise mindset and a startup soul. I don't just design systems — 
  I obsess over making them self-healing, self-optimizing, and ridiculously efficient. Whether it's guiding Solutions Architects through 
  complex enterprise challenges or fine-tuning a DeFi yield optimization algorithm at 2 AM, I bring the same methodical precision and 
  innovative thinking. My superpower? Taking manual, repetitive processes and turning them into elegant, automated workflows that scale 
  from personal productivity hacks to enterprise-grade solutions. I speak fluent stakeholder at C-level and can debug Python scripts with equal enthusiasm.`,
  aboutItems: [
    {label: 'Location', text: 'Poland 🇵🇱', Icon: MapIcon},
    {label: 'Phone', text: '+48 507 358 917', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Hungarian 🇭🇺', Icon: FlagIcon},
    {label: 'Obsessions', text: 'Automation, Web3 DeFi, AI Agents', Icon: BoltIcon},
    {label: 'Study', text: 'Jagiellonian University', Icon: AcademicCapIcon},
    {label: 'Current Mission', text: 'ABB Business Services', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Automation & AI Mastery',
    skills: [
      {
        name: 'Process Automation (RPA + Custom)',
        level: 10,
      },
      {
        name: 'AI Agent Development',
        level: 9,
      },
      {
        name: 'Blue Prism + UIPath Wizardry',
        level: 9,
      },
      {
        name: 'Python Automation Scripts',
        level: 9,
      },
    ],
  },
  {
    name: 'Cloud & Enterprise Architecture',
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
      {
        name: 'Digital Transformation Strategy',
        level: 9,
      },
    ],
  },
  {
    name: 'Web3 & DeFi (Personal Passion)',
    skills: [
      {
        name: 'DeFi Yield Optimization',
        level: 8,
      },
      {
        name: 'Smart Contract Integration',
        level: 7,
      },
      {
        name: 'Automated Trading Strategies',
        level: 8,
      },
      {
        name: 'Blockchain Analytics',
        level: 7,
      },
    ],
  },
  {
    name: 'Data & Analytics Powerhouse',
    skills: [
      {
        name: 'SQL + Advanced Analytics',
        level: 9,
      },
      {
        name: 'Python (Pandas, NumPy, ML)',
        level: 8,
      },
      {
        name: 'PowerBI + Data Visualization',
        level: 8,
      },
      {
        name: 'Excel/VBA Automation',
        level: 9,
      },
    ],
  },
  {
    name: 'Leadership & Frameworks',
    skills: [
      {
        name: 'Team Leadership & Mentoring',
        level: 10,
      },
      {
        name: 'ITIL v4 + Agile Methodologies',
        level: 8,
      },
      {
        name: 'Business Process Re-engineering',
        level: 9,
      },
      {
        name: 'Technology Evangelism',
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
    title: 'HR Transformation Automation Engine',
    description: 'Architecting the automation backbone for ABB\'s massive HR transformation, including intelligent Workday integration with self-healing processes.',
    url: 'https://www.abb.com',
    image: porfolioImage1,
  },
  {
    title: 'Enterprise Automation Framework',
    description: 'Built a TOGAF-compliant enterprise architecture framework with automated governance, self-documenting APIs, and intelligent monitoring.',
    url: 'https://www.abb.com',
    image: porfolioImage2,
  },
  {
    title: 'AI-Powered Data Analytics Pipeline',
    description: 'Designed and deployed autonomous data analytics capabilities that automatically identify optimization opportunities and generate actionable insights.',
    url: 'https://www.abb.com',
    image: porfolioImage3,
  },
  {
    title: 'Hyper-Intelligent RPA Ecosystem',
    description: 'Created next-gen RPA solutions using Blue Prism + UIPath with ML integration, capable of learning and adapting to process changes autonomously.',
    url: 'https://www.abb.com',
    image: porfolioImage4,
  },
  {
    title: 'Automated Technology Evaluation Matrix',
    description: 'Developed an AI-assisted technology evaluation framework that automatically scores RFI/RFP responses and generates architecture recommendations.',
    url: 'https://www.abb.com',
    image: porfolioImage5,
  },
  {
    title: 'Personal DeFi Yield Optimizer',
    description: 'Built a personal AI agent that monitors 50+ DeFi protocols, automatically rebalances portfolios, and executes optimal yield farming strategies.',
    url: '#',
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
        Master Thesis: <em>"Patenting AI related inventions - The European approach"</em> (Pretty prophetic, considering my current AI obsession! 🤖). 
        This WIPO-cooperated program dove deep into emerging tech patent law, digital copyright, and data protection — 
        essentially giving me the legal framework to understand how to innovate responsibly in the automation space.
      </p>
    ),
  },
  {
    date: '2011 - 2016',
    location: 'University of Szeged, Hungary',
    title: 'Bachelor\'s Degree - Technical Management (Energy Specialization)',
    content: (
      <p>
        Thesis: <em>"Input Shaft Manufacturing Plan, with CNC program for a selected operation"</em> — My first love affair with automation! 
        Enhanced by ERASMUS adventures at Uniwersytet Rolniczy (Poland, 2014-2015) and Philips College (Cyprus, 2012-2013), 
        where I learned that the best solutions often come from cross-cultural collaboration and thinking outside the box.
      </p>
    ),
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'February 2024 - Present',
    location: 'ABB Business Services',
    title: '🚀 Lead Architect for HR Domain',
    content: (
      <p>
        Leading the automation revolution in enterprise architecture! I'm orchestrating target architecture strategies, 
        mentoring solution architects in the art of automation-first thinking, and spearheading the HR Transformation program 
        with intelligent Workday integration. My mission: turn every manual process into an automated masterpiece while 
        enhancing data & analytics capabilities with AI-driven insights. <strong>Current focus:</strong> Building self-optimizing 
        enterprise systems that learn and adapt.
      </p>
    ),
  },
  {
    date: 'April 2021 - February 2024',
    location: 'ABB Business Services',
    title: '⚡ IS Solution Architect (Innovation & Automation Focus)',
    content: (
      <p>
        Technology and Innovation Team power player, where I perfected the art of translating "impossible" business requirements 
        into elegant automated solutions. Led 20+ end-to-end projects, each one more automated than the last. Collaborated with 
        Digital Scouting team to identify and implement bleeding-edge automation technologies. My secret sauce: 
        <em>Every solution I design includes at least 3 layers of automation and self-healing capabilities.</em>
      </p>
    ),
  },
  {
    date: 'September 2019 - April 2021',
    location: 'ABB Business Services',
    title: '🤖 Chief Specialist in IT Systems Design / Lead RPA Developer',
    content: (
      <p>
        This is where my automation obsession truly took flight! Led robotic process automation initiatives that didn't just 
        replace manual work — they created intelligent, learning systems. Designed IT systems with automation-first principles, 
        focusing on business process optimization that scales exponentially. <strong>Achievement unlocked:</strong> 
        Built RPA solutions that trained themselves to handle edge cases.
      </p>
    ),
  },
  {
    date: 'November 2018 - September 2019',
    location: 'ABB Business Services',
    title: '🔧 Robotic Process Automation Specialist',
    content: (
      <p>
        My RPA journey began here, implementing automation solutions that became the foundation for everything I do today. 
        Used industry-leading tools to create processes so efficient they redefined "operational excellence." 
        This role taught me that automation isn't just about efficiency — it's about freeing humans to do what they do best: innovate.
      </p>
    ),
  },
  {
    date: 'April 2018 - November 2018',
    location: 'ABB Business Services',
    title: '📊 Supply Chain Management Analyst/Specialist',
    content: (
      <p>
        Where I learned that data without automation is just expensive decoration. Analyzed and optimized supply chain processes 
        while developing my signature approach: identify patterns, automate analysis, and create self-updating dashboards 
        that provide real-time actionable insights. <em>First lesson in automation:</em> If you're doing it twice, automate it.
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
      name: 'ABB Senior Leadership',
      text: 'Marton doesn\'t just solve problems — he creates systems that prevent problems from existing in the first place. His automation-first approach to enterprise architecture has transformed how we think about scalability.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Solution Architect Team Member',
      text: 'Working with Marton is like having a crystal ball for technology trends. His ability to blend traditional enterprise architecture with cutting-edge automation makes him a true visionary leader. Plus, his Web3 insights are mind-blowing!',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Technology Innovation Lead',
      text: 'Marton\'s superpower is making the complex feel simple and the impossible feel inevitable. His work on the HR transformation program proves that enterprise-scale automation isn\'t just possible — it\'s the future.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */
export const contact: ContactSection = {
  headerText: 'Ready to automate the impossible?',
  description: 'Whether you need enterprise architecture that scales, automation solutions that actually work, or just want to geek out about DeFi strategies — let\'s connect and build something amazing together.',
  items: [
    {
      type: ContactType.Email,
      text: 'marton@szaplonczay.com',
      href: 'mailto:marton@szaplonczay.com',
    },
    {
      type: ContactType.Location,
      text: 'Poland 🇵🇱',
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
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/smartonstuff'}
];