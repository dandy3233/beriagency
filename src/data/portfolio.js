import p1 from "@/assets/portfolio/project-1.png";
import p2 from "@/assets/portfolio/project-2.png";
import p3 from "@/assets/portfolio/project-3.png";
import dubai from "@/assets/portfolio/project-dubai.png";
import qatar from "@/assets/portfolio/project-qatar.png";
import kuwait from "@/assets/portfolio/project-kuwait.png";
import abudhabi from "@/assets/portfolio/project-abudhabi.png";
import southsudan from "@/assets/portfolio/project-southsudan.png";
import botswana from "@/assets/portfolio/project-botswana.png";
import global from "@/assets/portfolio/project-global.png";

export const PORTFOLIO_HERO = {
  eyebrow: "Portfolio",
  title: "Real placements. Real impact.",
  description: "A selection of recruitment successes our team has delivered across the Gulf region and beyond.",
};

export const PORTFOLIO_FILTER_HEADER = {
  eyebrow: "Selected work",
  title: "Filter by service type",
  description: "Engagements that show how we connect Ethiopian talent to global opportunities.",
  emptyMessage: "No projects in this category yet.",
};

export const PROJECTS = [
  {
    title: "Large-scale Hospitality Recruitment",
    location: "Dubai, UAE",
    type: "Manpower Sourcing",
    image: dubai,
    result: "Successfully sourced and deployed 150+ staff for a major Dubai hotel group.",
  },
  {
    title: "Medical Staffing Partnership",
    location: "Abu Dhabi, UAE",
    type: "Recruitment Partnership",
    image: abudhabi,
    result: "Established a dedicated channel for trained Ethiopian healthcare assistants.",
  },
  {
    title: "Construction Workforce Deployment",
    location: "Doha, Qatar",
    type: "Worker Deployment",
    image: qatar,
    result: "Managed legal processing and travel for 300+ construction professionals.",
  },
  {
    title: "Service Sector Training Program",
    location: "Kuwait City",
    type: "Training & Orientation",
    image: kuwait,
    result: "Conducted specialized workplace ethics and language training for 100+ candidates.",
  },
  {
    title: "Retail Staff Sourcing",
    location: "Saudi Arabia",
    type: "Manpower Sourcing",
    image: p2,
    result: "Sourced skilled retail professionals for premium shopping outlets in Riyadh.",
  },
  {
    title: "Visa & Documentation Support",
    location: "Bahrain",
    type: "Visa & Legal Processing",
    image: global,
    result: "Achieved 100% visa approval rate for a corporate staff deployment series.",
  },
];

export const FILTERS = [
  "All",
  "Manpower Sourcing",
  "Training & Orientation",
  "Visa & Legal Processing",
  "Worker Deployment",
  "Recruitment Partnership",
];
