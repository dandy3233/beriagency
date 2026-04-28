import { ShieldCheck, Heart, Lightbulb, Globe2, Sparkles, Target, Eye } from "lucide-react";
import CEO from "../assets/images/team/Chaltu Tilaye Alemu.png";
import ViceManager from "../assets/images/team/Mustefa Mamo Hiko.png";
import Manager from "../assets/images/team/Severe Tilaye Alemu.png";

export const ABOUT_HERO = {
  eyebrow: "About BERI AGENCY",
  title: "Travel Beyond",
  subtitle: "Limits.",
  description:
    "BERI AGENCY is a professional recruitment agency dedicated to providing safe, legal, and efficient overseas employment opportunities for Ethiopian workers, while delivering reliable and transparent workforce solutions to employers in the Middle East.",
};

export const ABOUT_STATS = {
  title: "Why BERI?",
  items: [
    { label: "Gulf Experts", val: "Wide Network" },
    { label: "Worker Support", val: "Welfare First" },
    { label: "Legal Sourcing", val: "Compliant" },
  ],
};

export const ABOUT_CTA = {
  title: "Ready to start \nyour recruitment journey?",
  linkText: "Explore Services",
  linkHref: "/services",
};

export const ABOUT_CARDS = [
  {
    icon: Sparkles,
    eyebrow: "Who we are",
    title: "A modern, technology-driven recruitment partner.",
    body: "BERI Foreign Employees Agent PLC is a trusted manpower recruitment agency based in Ethiopia. We specialize in sourcing, training, and deploying Ethiopian workers to countries such as UAE, Qatar, and other Gulf countries.",
  },
  {
    icon: Target,
    eyebrow: "Our Mission",
    title: "Our Mission",
    body: "Our mission is to create safe and legal pathways for Ethiopian workers to access overseas employment opportunities, while supporting employers in the Middle East with dependable, skilled, and well-prepared manpower.",
  },
  {
    icon: Eye,
    eyebrow: "Our Vision",
    title: "Our Vision",
    body: "Our vision is to be a leading and highly trusted Ethiopian recruitment agency, recognized for excellence, integrity, and strong partnerships with employers throughout the Gulf region.",
  },
];

export const VALUES_CONTENT = {
  eyebrow: "Our values",
  title: "The principles behind every placement.",
  cta: "See what we offer",
};

export const VALUES = [
  {
    icon: ShieldCheck,
    title: "Reliability",
    desc: "We deliver on our promises with transparent and honest communication.",
  },
  {
    icon: Heart,
    title: "Worker Welfare",
    desc: "Every worker gets a dedicated team that prioritizes their safety and success.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "We use modern tools to make recruitment simpler, faster and smarter.",
  },
  {
    icon: Globe2,
    title: "Regional Reach",
    desc: "An Ethiopian-rooted network with strong Gulf-region partnerships.",
  },
];

export const TEAM = {
  eyebrow: "Our Team",
  title: "The experts behind Beri Agency",
  description:
    "Our diverse team of recruitment professionals is dedicated to ensuring safe and legal overseas employment for Ethiopian workers.",
  members: [
    {
      name: "Chaltu Tilaye Alemu",
      role: "CEO",
      image: CEO,
    },
    {
      name: "Mustefa Mamo Hiko",
      role: "Manager",
      image: ViceManager,
    },

    {
      name: "Semere Tilaye Alemu",
      role: "Vice Manager",
      image: Manager,
    },
  ],
};

export const ABOUT_PREVIEW = {
  eyebrow: "Who we are",
  title: "Connecting Ethiopian Talent to Opportunities in the Middle East.",
  description:
    "BERI Foreign Employees Agent PLC specializes in recruiting and deploying skilled Ethiopian workers to Gulf nations — ensuring safe, legal, and efficient employment abroad.",
  features: [
    { label: "Compliant & licensed" },
    { label: "On-time, every time" },
    { label: "Dedicated account team" },
    { label: "Gulf-wide network" },
  ],
  cta: "More about us",
};
