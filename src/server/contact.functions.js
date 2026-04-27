import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(120),
  email: z.string().trim().email("Please enter a valid email").max(255),
  message: z.string().trim().min(10, "Tell us a bit more (min 10 chars)").max(2000),
});

export const submitContact = async (data) => {
  // Validate input
  contactSchema.parse(data);

  // To receive emails, create a free account at Formspree.io and replace 'YOUR_FORMSPREE_ID'
  // with the ID they provide you.
  const FORMSPREE_ID = "xpqkeeqw";

  const response = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(data)
  });

  if (!response.ok) {
    throw new Error("Failed to send message");
  }

  return { success: true };
};
