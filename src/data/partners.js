import { Plane, HeartHandshake, Landmark, Building2, Briefcase } from "lucide-react";
import etv from "../assets/partners/Etv.png";
import molad from "../assets/partners/image.png";

export const PARTNERS = [
  { name: "Ethiopian Airlines", image: molad },
];

export const CLIENTS_HERO = {
  eyebrow: "Clients & Partners",
  title: "Trusted by employers across the Gulf and the world.",
  description: "We work alongside leading companies, governments and international organizations to connect people to opportunities — safely and efficiently.",
};

export const CLIENTS_HEADER = {
  eyebrow: "Our network",
  title: "Our Trusted Partners",
  description: "Collaborating with authorized labor ministries and leading employers in the Middle East.",
};

export const GROUPS = [
  {
    icon: Building2,
    title: "International Employers",
    items: [
      "Hospitality Groups",
      "Construction Firms",
      "Healthcare Providers",
      "Service Industry Partners",
    ],
  },
  {
    icon: Landmark,
    title: "Government Institutions",
    items: ["Ministry of Labor", "Embassies", "Regional Bureaus", "Immigration Authorities"],
  },
  {
    icon: HeartHandshake,
    title: "Support Organizations",
    items: ["Training Centers", "Health Screening Clinics", "Worker Welfare NGOs"],
  },
];
