import { Plane, Globe2, Briefcase, Handshake, FileCheck, ShieldCheck, MessageSquare, ClipboardList, Rocket, CheckCircle2 } from "lucide-react";

export const SERVICES_HERO = {
  eyebrow: "Our services",
  title: "Professional Recruitment Solutions.",
  description: "BERI AGENCY provides comprehensive sourcing, training, and deployment services to connect Ethiopian talent with leading employers across the Gulf region.",
};

export const SERVICES = [
  {
    icon: Plane,
    title: "Travel Management",
    desc: "End-to-end planning and ticketing for individuals and teams.",
    items: [
      "Corporate travel planning",
      "Flight booking & ticketing",
      "Travel policy compliance",
      "24/7 itinerary support",
    ],
  },
  {
    icon: Globe2,
    title: "Training & Orientation",
    desc: "Preparing workers for success in their new international environments.",
    items: [
      "Cultural orientation",
      "Basic language training",
      "Workplace ethics & safety",
      "Skills assessment",
    ],
  },
  {
    icon: FileCheck,
    title: "Visa & Legal Processing",
    desc: "Handling all legal paperwork for safe and compliant overseas employment.",
    items: [
      "Visa application processing",
      "Contract documentation",
      "Embassy liaison",
      "Labor ministry clearance",
    ],
  },
  {
    icon: Rocket,
    title: "Worker Deployment",
    desc: "Efficient and organized travel arrangements for all deployed personnel.",
    items: [
      "Flight booking & ticketing",
      "Pre-departure briefing",
      "Airport assistance",
      "Arrival coordination",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Worker Welfare",
    desc: "Dedicated support to ensure the safety and well-being of our workers abroad.",
    items: [
      "Regular welfare checks",
      "Legal support coordination",
      "Employer-employee mediation",
      "Emergency assistance",
    ],
  },
];

export const PROCESS_CONTENT = {
  eyebrow: "How we work",
  title: "Our simplified recruitment process.",
};

export const STEPS = [
  {
    icon: MessageSquare,
    title: "Sourcing & Screening",
    desc: "We identify and rigorously screen candidates to find the best match.",
  },
  {
    icon: ClipboardList,
    title: "Training & Orientation",
    desc: "Workers undergo thorough preparation for their specific roles.",
  },
  {
    icon: Rocket,
    title: "Visa & Deployment",
    desc: "We handle all legalities and organize safe travel to the destination.",
  },
  {
    icon: CheckCircle2,
    title: "Post-Placement Support",
    desc: "We ensure worker welfare and employer satisfaction after deployment.",
  },
];
