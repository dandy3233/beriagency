import { createFileRoute } from "@tanstack/react-router";
import { Certificates } from "@/pages/Certificates";

export const Route = createFileRoute("/certificates")({
  head: () => ({
    meta: [
      { title: "Certificates & Compliance — BERI AGENCY" },
      {
        name: "description",
        content:
          "BERI AGENCY operates as a licensed travel agency, government-registered, and aligned with international travel standards.",
      },
      { property: "og:title", content: "Certificates & Compliance — BERI AGENCY" },
      { property: "og:description", content: "Our accreditations and compliance commitments." },
    ],
  }),
  component: Certificates,
});
