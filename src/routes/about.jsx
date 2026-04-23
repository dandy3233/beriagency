import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/pages/AboutPage";
import aboutImg from "@/assets/about.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — BERI AGENCY | Connecting Africa to the World" },
      {
        name: "description",
        content:
          "BERI AGENCY is a modern travel management company delivering efficient, transparent and cost-effective travel solutions across Africa and beyond.",
      },
      { property: "og:title", content: "About BERI AGENCY" },
      {
        property: "og:description",
        content: "Our mission, vision, and values — Connecting Africa to the World.",
      },
      { property: "og:image", content: aboutImg },
      { name: "twitter:image", content: aboutImg },
    ],
  }),
  component: AboutPage,
});

