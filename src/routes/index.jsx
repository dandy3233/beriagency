import { createFileRoute } from "@tanstack/react-router";
import { Home } from "@/pages/Home";
import heroImg from "@/assets/hero-home.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BERI AGENCY — Smart Travel Solutions Across Africa & Beyond" },
      {
        name: "description",
        content:
          "Reliable, compliant and technology-driven travel services for businesses, NGOs and global partners. Connecting Africa to the World.",
      },
      { property: "og:title", content: "BERI AGENCY — Smart Travel Solutions" },
      {
        property: "og:description",
        content:
          "Connecting Africa to the World — corporate travel, tours, NGO logistics, visa support.",
      },
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
  component: Home,
});

