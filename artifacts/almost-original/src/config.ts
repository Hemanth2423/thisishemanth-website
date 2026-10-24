/**
 * Central site configuration.
 * Set `linkedinUrl` to your full profile URL (e.g. "https://www.linkedin.com/in/your-handle/")
 * and the call-to-action will become a real link everywhere on the site.
 */
export const site = {
  name: 'Hemanth Nara Jayasankar',
  author: 'Hemanth Nara Jayasankar',
  description:
    'A product manager building useful AI products, with a field journal for work, questions and the occasional poem.',
  linkedinUrl: 'https://www.linkedin.com/in/hemanth-nj/',
  githubUrl: 'https://github.com/Hemanth2423',
  resumeUrl: 'https://drive.google.com/file/d/1kjKGRL81LEgdn6dCgZLbGcRImg7LtVMm/view?usp=drive_link',
  /** Local-hour boundaries for the background themes (24h clock, start hour inclusive). */
  themeHours: { dawn: 5, day: 9, sunset: 17, night: 20 },
} as const;

/** Prefix an internal path with the configured base. */
export function url(path = '/'): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${base}${clean}` || '/';
}

export function formatDate(d: Date): string {
  return new Intl.DateTimeFormat('en-GB', { day: 'numeric', month: 'long', year: 'numeric' }).format(d);
}
