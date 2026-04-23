import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(120),
  email: z.string().trim().email("Please enter a valid email").max(255),
  service_type: z.enum([
    "travel-management",
    "tours-logistics",
    "corporate-solutions",
    "partnership",
    "visa-documentation",
    "general",
  ]),
  message: z.string().trim().min(10, "Tell us a bit more (min 10 chars)").max(2000),
});

export const submitContact = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => contactSchema.parse(input))
  .handler(async ({ data }) => {
    const { error } = await supabase.from("contact_submissions").insert({
      name: data.name,
      email: data.email,
      service_type: data.service_type,
      message: data.message,
    });

    if (error) {
      console.error("Contact submission failed:", error);
      throw new Error("We couldn't save your message. Please try again.");
    }

    return { success: true };
  });
