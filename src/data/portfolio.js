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
  title: "Real engagements. Real results.",
  description: "A selection of the work our team has delivered across Africa and beyond.",
};

export const PORTFOLIO_FILTER_HEADER = {
  eyebrow: "Selected work",
  title: "Filter by service type",
  description: "A handful of engagements that show how we help clients move smarter.",
  emptyMessage: "No projects in this category yet.",
};

export const PROJECTS = [
  {
    title: "NGO regional mission travel",
    location: "East Africa",
    type: "Partnership Services",
    image: p1,
    result: "Coordinated 120+ field-staff trips across 6 countries with zero missed missions.",
  },
  {
    title: "Multinational corporate program",
    location: "Pan-Africa",
    type: "Corporate Solutions",
    image: p2,
    result: "Cut annual travel spend by 22% via policy & vendor optimization.",
  },
  {
    title: "East Africa group tour series",
    location: "Ethiopia · Kenya · Tanzania",
    type: "Tours & Logistics",
    image: p3,
    result: "Designed and led 14 tour groups with a 4.9/5 satisfaction score.",
  },
  {
    title: "Dubai Corporate Travel Expo",
    location: "Dubai, UAE",
    type: "Corporate Solutions",
    image: dubai,
    result: "Managed travel and accommodation for 200+ delegates at a major Dubai tech summit.",
  },
  {
    title: "Qatar Airways Premium Logistics",
    location: "Doha, Qatar",
    type: "Travel Management",
    image: qatar,
    result: "Optimized flight connections for high-volume cargo and personnel transit through Doha hub.",
  },
  {
    title: "Kuwait Diplomatic Support",
    location: "Kuwait City",
    type: "Partnership Services",
    image: kuwait,
    result: "Provided 24/7 dedicated protocol and housing services for diplomatic staff in Kuwait.",
  },
  {
    title: "Abu Dhabi Government Protocol",
    location: "UAE",
    type: "Corporate Solutions",
    image: abudhabi,
    result: "Standardized travel policies for UAE-based regional public sector missions.",
  },
  {
    title: "Airline ticketing & logistics",
    location: "Addis Ababa hub",
    type: "Travel Management",
    image: p2,
    result: "Issued 5,000+ tickets with a 99.7% accuracy rate and 24/7 support.",
  },
  {
    title: "Diplomatic mission coordination",
    location: "Geneva · Addis Ababa",
    type: "Partnership Services",
    image: p1,
    result: "Managed high-level transport and housing for 50+ visiting diplomats.",
  },
  {
    title: "United Nations field support",
    location: "South Sudan",
    type: "Partnership Services",
    image: southsudan,
    result: "Secured reliable air and ground logistics for remote humanitarian monitoring.",
  },
  {
    title: "Luxury Safari Series 2023",
    location: "Botswana · Namibia",
    type: "Tours & Logistics",
    image: botswana,
    result: "Private jet and luxury camp logistics for exclusive high-net-worth groups.",
  },
  {
    title: "Regional Government Protocol",
    location: "Horn of Africa",
    type: "Corporate Solutions",
    image: p2,
    result: "Standardized VIP travel protocols across 12 regional bureaus.",
  },
  {
    title: "Save the Children Logistics",
    location: "Somalia · Ethiopia",
    type: "Partnership Services",
    image: p1,
    result: "Optimized emergency responder flight paths during critical droughts.",
  },
  {
    title: "Global DMC Partnership",
    location: "International",
    type: "Travel Management",
    image: global,
    result: "White-labeled ground handling for top-tier European travel operators.",
  },
];

export const FILTERS = [
  "All",
  "Travel Management",
  "Tours & Logistics",
  "Corporate Solutions",
  "Partnership Services",
];
