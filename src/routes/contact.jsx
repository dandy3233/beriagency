import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { ContactPage } from "@/pages/ContactPage";
import contactImg from "@/assets/contact.jpg";

const searchSchema = z.object({
  type: z.enum(["partner", "general"]).optional(),
});

export const Route = createFileRoute("/contact")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Contact — BERI AGENCY | Get in Touch" },
      {
        name: "description",
        content:
          "Reach BERI AGENCY in Addis Ababa, Ethiopia. Email barjalobalhire@gmail.com or send a message — we'll respond within one business day.",
      },
      { property: "og:title", content: "Contact BERI AGENCY" },
      {
        property: "og:description",
        content:
          "Get a quote or partner with us — based in Addis Ababa, serving Africa and beyond.",
      },
      { property: "og:image", content: contactImg },
      { name: "twitter:image", content: contactImg },
    ],
  }),
  component: ContactPage,
});
