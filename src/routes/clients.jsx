import { createFileRoute } from "@tanstack/react-router";
import { ClientsPage } from "@/pages/ClientsPage";

export const Route = createFileRoute("/clients")({
  head: () => ({
    meta: [
      { title: "Clients & Partners — BERI AGENCY" },
      {
        name: "description",
        content:
          "BERI AGENCY proudly serves airlines, NGOs, governments, private corporations and global travel agencies.",
      },
      { property: "og:title", content: "Clients & Partners — BERI AGENCY" },
      {
        property: "og:description",
        content: "The organizations that trust us to move their people.",
      },
    ],
  }),
  component: ClientsPage,
});
