import { z } from "zod";

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

export const submitContact = async (data) => {
  // Validate input
  contactSchema.parse(data);
  
  console.log("Contact submission received (Client-side simulation):", data);
  
  // Simulate successful processing
  return { success: true };
};
