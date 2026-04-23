create table public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  email text not null,
  service_type text not null,
  message text not null,
  created_at timestamptz not null default now()
);

alter table public.contact_submissions enable row level security;

-- Anyone can submit the contact form (public insert)
create policy "Anyone can submit contact form"
  on public.contact_submissions
  for insert
  to anon, authenticated
  with check (true);

-- No public read policy: submissions are private by default.
-- Admins can read via service role from the dashboard / server.