
# BERI AGENCY — Marketing Website

A multi-page, professionally designed marketing site for BERI AGENCY built on TanStack Start with separate routes per section for proper SEO and shareability.

## Brand & visual direction
- **Style:** Modern corporate — clean, lots of whitespace, premium feel with bold accents in your brand colors.
- **Colors:** Deep Teal `#0F4C5C` (primary), Golden Yellow `#F2A900` (accent CTAs), Dark Teal `#0A2E36` (deep surfaces), Light Yellow `#F7C948`, white backgrounds. Mapped into the design system tokens so every component pulls from the brand palette automatically.
- **Typography:** Poppins for headings (bold, confident), Open Sans for body (readable, friendly) — loaded from Google Fonts.
- **Imagery:** AI-generated hero and section images themed around African travel, aviation, and business — replaceable later with your own photos.
- **Feel:** Professional, reliable, modern, with a clear African-global identity.

## Pages (separate routes for SEO + shareability)

1. **Home (`/`)**
   - Sticky transparent → solid navbar with logo wordmark "BERI AGENCY"
   - Hero: "Smart Travel Solutions Across Africa & Beyond" with subhead, two CTAs (Get a Quote → /contact, Partner With Us → /contact?type=partner), and a hero visual
   - Stats strip (years, clients served, countries, on-time rate)
   - About preview, services grid preview, partners logo strip, featured testimonials, final CTA band, footer

2. **About (`/about`)** — Who we are, Mission, Vision presented as elegant cards with iconography; values pillars; brand story section

3. **Services (`/services`)** — All five service categories (Travel Management, Tours & Logistics, Corporate Solutions, Partnership Services, Visa & Documentation) as expanded cards with bullet points and icons; "How we work" 4-step process

4. **Portfolio (`/portfolio`)** — Project cards (Title, Location, Service Type, Result) for the four sample engagements; filterable by service type

5. **Clients & Partners (`/clients`)** — Categorized display: Airlines, NGOs, Government, Corporations, Travel Agencies — placeholder logo grid you can swap

6. **Certificates (`/certificates`)** — Compliance & accreditation cards (Licensed Travel Agency, IATA, Government Registration, International Standards) with placeholder badges; note that real certificate uploads can be added later

7. **Testimonials (`/testimonials`)** — Full testimonial wall with the three sample quotes plus space for more

8. **Contact (`/contact`)** — Contact details (email, phone placeholder, Addis Ababa location), embedded map placeholder, and a contact form with: Name, Email, Service Type (dropdown), Message. Form validates with Zod, saves submissions to **Lovable Cloud** (so nothing is lost), and shows a success toast. Email forwarding to barjalobalhire@gmail.com can be wired up later via Resend.

## Shared components
- **Navbar** — Logo, nav links (Home, About, Services, Portfolio, Clients, Certificates, Testimonials, Contact), prominent "Get a Quote" CTA button. Mobile hamburger drawer.
- **Footer** — Brand block with slogan "Your Gateway to Smart Travel", quick links, contact info, copyright
- **Reusable UI:** Section header, service card, testimonial card, stat block, CTA band

## SEO & sharing
- Each route gets its own `head()` with unique title, description, og:title, og:description, and og:image (using each page's hero image)
- Tagline "Connecting Africa to the World" used in meta descriptions

## Backend (Lovable Cloud)
- Single `contact_submissions` table (name, email, service_type, message, created_at) with RLS so only inserts are public; reads are restricted
- Form submits via a server function with input validation

## Out of scope (can add later)
- Admin dashboard to view/manage submissions, portfolio, testimonials
- Email notifications via Resend
- Real client/partner logos and certificate PDFs
- Multilingual (English/French/Amharic) support
