import { createFileRoute } from "@tanstack/react-router";
import { TestimonialsPage } from "@/pages/TestimonialsPage";

export const Route = createFileRoute("/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials — BERI AGENCY" },
      {
        name: "description",
        content:
          "What corporate, NGO and international partners say about working with BERI AGENCY — Connecting Africa to the World.",
      },
      { property: "og:title", content: "Testimonials — BERI AGENCY" },
      { property: "og:description", content: "Voices from our clients across Africa and beyond." },
    ],
  }),
  component: TestimonialsPage,
});
