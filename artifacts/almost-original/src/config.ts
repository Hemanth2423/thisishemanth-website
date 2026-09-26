/**
 * Central site configuration.
 * Set `linkedinUrl` to your full profile URL (e.g. "https://www.linkedin.com/in/your-handle/")
 * and the call-to-action will become a real link everywhere on the site.
 */
export const site = {
  name: 'Almost Original',
  author: 'Almost Original',
  description:
    'A quiet corner for product work and intimate writing, shaped by nature and shared in the hope of meeting interesting people.',
  linkedinUrl: 'https://www.linkedin.com/in/hemanth-nj/',
  cta: "Connect with me, don't be shy send hi 👋",
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
