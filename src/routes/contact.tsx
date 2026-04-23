import { useState } from "react";
import { createFileRoute, useSearch } from "@tanstack/react-router";
import { z } from "zod";
import { Mail, MapPin, Phone, Send, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { submitContact, contactSchema } from "@/server/contact.functions";
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
      { property: "og:description", content: "Get a quote or partner with us — based in Addis Ababa, serving Africa and beyond." },
      { property: "og:image", content: contactImg },
      { name: "twitter:image", content: contactImg },
    ],
  }),
  component: ContactPage,
});

const SERVICE_OPTIONS = [
  { value: "travel-management", label: "Travel Management" },
  { value: "tours-logistics", label: "Tours & Logistics" },
  { value: "corporate-solutions", label: "Corporate Solutions" },
  { value: "partnership", label: "Partnership Services" },
  { value: "visa-documentation", label: "Visa & Documentation" },
  { value: "general", label: "General inquiry" },
] as const;

type ServiceValue = (typeof SERVICE_OPTIONS)[number]["value"];

function ContactPage() {
  const search = useSearch({ from: "/contact" });
  const isPartner = search.type === "partner";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [serviceType, setServiceType] = useState<ServiceValue>(isPartner ? "partnership" : "general");
  const [message, setMessage] = useState(isPartner ? "I'd like to explore a partnership with BERI AGENCY." : "");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrors({});

    const parsed = contactSchema.safeParse({
      name,
      email,
      service_type: serviceType,
      message,
    });

    if (!parsed.success) {
      const fieldErrors: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        const key = issue.path[0]?.toString() ?? "form";
        if (!fieldErrors[key]) fieldErrors[key] = issue.message;
      }
      setErrors(fieldErrors);
      toast.error("Please fix the errors and try again.");
      return;
    }

    setSubmitting(true);
    try {
      await submitContact({ data: parsed.data });
      toast.success("Message sent — we'll get back to you within one business day.");
      setName("");
      setEmail("");
      setServiceType("general");
      setMessage("");
    } catch (err) {
      console.error(err);
      toast.error("Something went wrong. Please try again or email us directly.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <section className="relative overflow-hidden bg-primary-deep text-white">
        <div className="absolute inset-0 opacity-25">
          <img src={contactImg} alt="" className="h-full w-full object-cover" loading="lazy" />
          <div className="absolute inset-0 gradient-brand opacity-70" />
        </div>
        <div className="container-px relative mx-auto max-w-7xl py-20 md:py-28">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            {isPartner ? "Partner with us" : "Contact"}
          </p>
          <h1 className="max-w-3xl font-display text-4xl font-bold leading-tight text-balance md:text-6xl">
            {isPartner ? "Let's build something together." : "Talk to a real travel expert."}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">
            We respond within one business day. Based in Addis Ababa, serving
            clients across Africa and beyond.
          </p>
        </div>
      </section>

      <section className="container-px mx-auto max-w-7xl py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-5">
          {/* Contact info */}
          <div className="lg:col-span-2">
            <h2 className="font-display text-2xl font-bold text-primary-deep">Reach us directly</h2>
            <p className="mt-2 text-muted-foreground">
              Prefer email or phone? Here are the fastest ways to reach the team.
            </p>

            <ul className="mt-8 space-y-5">
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Email</div>
                  <a href="mailto:barjalobalhire@gmail.com" className="break-all font-medium text-foreground hover:text-primary">
                    barjalobalhire@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Phone className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Phone</div>
                  <span className="font-medium text-foreground">Available on request</span>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Office</div>
                  <span className="font-medium text-foreground">Addis Ababa, Ethiopia</span>
                </div>
              </li>
            </ul>

            <div className="mt-8 overflow-hidden rounded-xl border border-border">
              <iframe
                title="BERI AGENCY office location — Addis Ababa"
                src="https://www.google.com/maps?q=Addis%20Ababa%2C%20Ethiopia&output=embed"
                width="100%"
                height="260"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full"
              />
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border bg-card p-6 shadow-soft md:p-8"
            >
              <h2 className="font-display text-2xl font-bold text-primary-deep">Send us a message</h2>
              <p className="mt-1 text-sm text-muted-foreground">All fields are required.</p>

              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <Label htmlFor="name">Full name</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    autoComplete="name"
                    aria-invalid={!!errors.name}
                    className="mt-1.5"
                  />
                  {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
                </div>

                <div className="sm:col-span-1">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@company.com"
                    autoComplete="email"
                    aria-invalid={!!errors.email}
                    className="mt-1.5"
                  />
                  {errors.email && <p className="mt-1 text-xs text-destructive">{errors.email}</p>}
                </div>

                <div className="sm:col-span-2">
                  <Label htmlFor="service">Service type</Label>
                  <Select value={serviceType} onValueChange={(v) => setServiceType(v as ServiceValue)}>
                    <SelectTrigger id="service" className="mt-1.5">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                      {SERVICE_OPTIONS.map((opt) => (
                        <SelectItem key={opt.value} value={opt.value}>
                          {opt.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  {errors.service_type && <p className="mt-1 text-xs text-destructive">{errors.service_type}</p>}
                </div>

                <div className="sm:col-span-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    rows={6}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us what you need — destinations, dates, group size, etc."
                    aria-invalid={!!errors.message}
                    className="mt-1.5 resize-y"
                  />
                  {errors.message && <p className="mt-1 text-xs text-destructive">{errors.message}</p>}
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={submitting}
                className="mt-7 w-full bg-accent text-primary-deep hover:bg-accent-soft sm:w-auto"
              >
                {submitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Send message
                  </>
                )}
              </Button>

              <p className="mt-4 text-xs text-muted-foreground">
                By submitting this form, you agree to be contacted about your inquiry.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
