import { createFileRoute } from "@tanstack/react-router";
import { PortfolioPage } from "@/pages/PortfolioPage";

export const Route = createFileRoute("/portfolio")({
  head: () => ({
    meta: [
      { title: "Portfolio — BERI AGENCY | Recent Travel Projects" },
      {
        name: "description",
        content:
          "Recent travel projects: NGO mission travel, multinational corporate programs, East Africa group tours, and airline ticketing & logistics.",
      },
      { property: "og:title", content: "Portfolio — BERI AGENCY" },
      {
        property: "og:description",
        content: "Selected engagements across NGO, corporate, tours and airline operations.",
      },
    ],
  }),
  component: PortfolioPage,
});
