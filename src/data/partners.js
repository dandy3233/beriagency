import { Plane, HeartHandshake, Landmark, Building2, Briefcase } from "lucide-react";
import etv from "../assets/partners/Etv.png";
import molad from "../assets/partners/image.png";

export const PARTNERS = [
  { name: "Ethiopian Airlines", image: molad },
  // { name: "Kenya Airways", image: etv },
  // { name: "United Nations", image: etv },
  // { name: "African Union", image: etv },
  // { name: "World Bank", image: etv },
  // { name: "Red Cross", image: etv },
  // { name: "USAID", image: etv },
  // { name: "Qatar Airways", image: etv },
  // { name: "Emirates", image: etv },
  // { name: "Turkish Airlines", image: etv },
  // { name: "Lufthansa", image: etv },
  // { name: "Fly Dubai", image: etv },
  // { name: "South African Airways", image: etv },
];

export const CLIENTS_HERO = {
  eyebrow: "Clients & Partners",
  title: "Trusted by organizations across Africa and the world.",
  description: "We work alongside leading airlines, NGOs, governments and corporations to keep their people moving — safely and efficiently.",
};

export const CLIENTS_HEADER = {
  eyebrow: "Our network",
  title: "Categorized by sector",
  description: "Logos shown are representative — real partner logos can be added on request.",
};

export const GROUPS = [
  {
    icon: Plane,
    title: "Airlines",
    items: [
      "Ethiopian Airlines",
      "Kenya Airways",
      "EgyptAir",
      "Qatar Airways",
      "Turkish Airlines",
      "Emirates",
    ],
  },
  {
    icon: HeartHandshake,
    title: "NGOs & International Organizations",
    items: ["UN Mission", "Red Cross", "USAID", "Save the Children", "WFP", "Oxfam"],
  },
  {
    icon: Landmark,
    title: "Government Institutions",
    items: ["Federal Ministries", "Regional Bureaus", "Diplomatic Missions", "Public Agencies"],
  },
  {
    icon: Building2,
    title: "Private Corporations",
    items: [
      "Tech Group",
      "Manufacturing Co.",
      "Mining Inc.",
      "Consulting Ltd.",
      "FMCG Brand",
      "Energy Co.",
    ],
  },
  {
    icon: Briefcase,
    title: "Travel Agencies & Global Partners",
    items: ["Global DMC Network", "Partner Agency A", "Partner Agency B", "Online Travel Co."],
  },
];
