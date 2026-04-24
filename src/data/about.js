import { ShieldCheck, Heart, Lightbulb, Globe2, Sparkles, Target, Eye } from "lucide-react";

export const ABOUT_HERO = {
  eyebrow: "About BERI AGENCY",
  title: "Travel Beyond",
  subtitle: "Limits.",
  description: "BERI AGENCY is a modern travel management company focused on delivering efficient, transparent, and cost-effective travel solutions across Africa and international markets.",
};

export const ABOUT_STATS = {
  title: "Why BERI?",
  items: [
    { label: "Destination Experts", val: "Global Network" },
    { label: "24/7 Concierge", val: "Travel Support" },
    { label: "Tailored Solutions", val: "Custom Itineraries" }
  ]
};

export const ABOUT_CTA = {
  title: "Ready to start \nyour next journey?",
  linkText: "Explore Services",
  linkHref: "/services"
};

export const ABOUT_CARDS = [
  {
    icon: Sparkles,
    eyebrow: "Who we are",
    title: "A modern, technology-driven travel partner.",
    body: "We combine industry expertise with innovative technology to simplify travel operations for organizations of all sizes — from regional NGOs to multinational corporations.",
  },
  {
    icon: Target,
    eyebrow: "Our Mission",
    title: "Compliant, smart, and reliable travel.",
    body: "Deliver compliant, technology-driven, and competitively priced travel solutions across Africa and global markets — with unmatched reliability, transparency, and customer care.",
  },
  {
    icon: Eye,
    eyebrow: "Our Vision",
    title: "Africa's most trusted travel partner.",
    body: "To become one of the most trusted African-focused travel management companies, serving airlines, NGOs, corporations, and global partners.",
  },
];

export const VALUES_CONTENT = {
  eyebrow: "Our values",
  title: "The principles behind every itinerary.",
  cta: "See what we offer",
};

export const VALUES = [
  {
    icon: ShieldCheck,
    title: "Reliability",
    desc: "We deliver on time, every time, with transparent communication.",
  },
  {
    icon: Heart,
    title: "Customer Care",
    desc: "Every client gets a dedicated team that treats your trip like our own.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    desc: "We use modern tools to make travel simpler, faster and smarter.",
  },
  {
    icon: Globe2,
    title: "Global Reach",
    desc: "An African-rooted network with worldwide partnerships.",
  },
];

export const TEAM = {
  eyebrow: "Our Team",
  title: "The experts behind Beri Agency",
  description: "Our diverse team of travel professionals is dedicated to making your global journeys seamless and stress-free.",
  members: [
    {
      name: "Dandy Abraham",
      role: "Founder & CEO",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dandy"
    },
    {
      name: "Sara Tekle",
      role: "Operations Manager",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sara"
    },
    {
      name: "Dawit Kassahun",
      role: "Logistics Lead",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Dawit"
    },
    {
      name: "Helen Gebre",
      role: "Corporate Sales",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Helen"
    }
  ]
};
