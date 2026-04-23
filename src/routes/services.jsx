import { createFileRoute } from "@tanstack/react-router";
import { ServicesPage } from "@/pages/ServicesPage";
import servicesImg from "@/assets/services.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — BERI AGENCY | Travel, Tours, Corporate & Visa" },
      {
        name: "description",
        content:
          "Travel management, tours & logistics, corporate solutions, partnership services, and visa & documentation support — all under one trusted roof.",
      },
      { property: "og:title", content: "Services — BERI AGENCY" },
      {
        property: "og:description",
        content: "Five core service areas powering travel for businesses, NGOs and partners.",
      },
      { property: "og:image", content: servicesImg },
      { name: "twitter:image", content: servicesImg },
    ],
  }),
  component: ServicesPage,
});
