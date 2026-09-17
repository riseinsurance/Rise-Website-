// Central source of truth for site-wide nav, contact info, and social links.
//
// Fields marked NEEDS_FROM_BRADEN are intentionally left unset rather than
// filled with invented values (see build brief Section 7: "Content gaps").
// Components should render an obvious, visible placeholder when these are
// missing so gaps stay visible in the UI during QA instead of silently
// shipping fake data.

export const NEEDS_FROM_BRADEN = "[NEEDS FROM BRADEN]" as const;

export type MaybeContent = string | typeof NEEDS_FROM_BRADEN;

// Header nav: a mix of plain links and hover/tap dropdowns that group
// related pages (Header.tsx and MobileNav.tsx both read this so desktop
// hover-dropdowns and the mobile accordion never drift apart).
export type NavItem =
  | { type: "link"; label: string; href: string }
  | { type: "dropdown"; label: string; items: { label: string; href: string }[] };

export const navGroups: NavItem[] = [
  { type: "link", label: "Home", href: "/" },
  {
    type: "dropdown",
    label: "Insurance",
    items: [
      { label: "Overview", href: "/insurance-quotes" },
      { label: "Wind & Hail Deductibles", href: "/wind-hail-deductibles" },
    ],
  },
  {
    type: "dropdown",
    label: "About",
    items: [
      { label: "Our Story", href: "/about" },
      { label: "Our Team", href: "/team" },
    ],
  },
  { type: "link", label: "Blog", href: "/blog" },
  { type: "link", label: "Referral Program", href: "/referral-program" },
  { type: "link", label: "Careers", href: "/careers" },
] as const;

// The footer stays a flat, complete sitemap even though the header now
// curates its nav into dropdowns, so every page is listed individually here.
export const footerNav = [
  { label: "Home", href: "/" },
  { label: "Insurance", href: "/insurance-quotes" },
  { label: "Wind & Hail Deductibles", href: "/wind-hail-deductibles" },
  { label: "About", href: "/about" },
  { label: "Team", href: "/team" },
  { label: "Blog", href: "/blog" },
  { label: "Referral Program", href: "/referral-program" },
  { label: "Careers", href: "/careers" },
  { label: "Get a Quote", href: "/get-a-quote" },
] as const;

export const siteConfig = {
  name: "Rise Insurance Agency",
  domain: "riseinsuranceagency.com",
  phone: "806-605-0080" as MaybeContent,
  phoneHref: "tel:+18066050080" as MaybeContent,
  email: "service@riseinsuranceagency.com" as MaybeContent,
  // Rise operates as a cloud-based agency — no physical office. This is a
  // confirmed fact, not a content gap, so it's handled separately from the
  // NEEDS_FROM_BRADEN placeholder pattern below.
  isCloudBased: true,
  address: null as { line1: string; cityStateZip: string } | null,
  hours: "Mon–Fri, 9:00am–5:00pm" as MaybeContent,
  googleReviewUrl: null as string | null, // confirm review link/count exists for Rise
  social: {
    facebook: null as string | null,
    instagram: null as string | null,
    linkedin: null as string | null,
  },
} as const;

export const primaryCta = { label: "Get a Quote", href: "/get-a-quote" } as const;
