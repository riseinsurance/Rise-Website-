// Central source of truth for site-wide nav, contact info, and social links.
//
// Fields marked NEEDS_FROM_BRADEN are intentionally left unset rather than
// filled with invented values (see build brief Section 7: "Content gaps").
// Components should render an obvious, visible placeholder when these are
// missing so gaps stay visible in the UI during QA instead of silently
// shipping fake data.

export const NEEDS_FROM_BRADEN = "[NEEDS FROM BRADEN]" as const;

export type MaybeContent = string | typeof NEEDS_FROM_BRADEN;

export const nav = [
  { label: "Home", href: "/" },
  { label: "Get a Quote", href: "/get-a-quote" },
  { label: "Insurance", href: "/insurance-quotes" },
  { label: "Wind & Hail Deductibles", href: "/wind-hail-deductibles" },
  { label: "Referral Program", href: "/referral-program" },
  { label: "Careers", href: "/careers" },
] as const;

export const siteConfig = {
  name: "Rise Insurance Agency",
  domain: "riseinsuranceagency.com",
  phone: NEEDS_FROM_BRADEN as MaybeContent,
  phoneHref: NEEDS_FROM_BRADEN as MaybeContent, // e.g. "tel:+18065550100"
  email: NEEDS_FROM_BRADEN as MaybeContent,
  address: {
    line1: NEEDS_FROM_BRADEN as MaybeContent,
    cityStateZip: NEEDS_FROM_BRADEN as MaybeContent, // e.g. "Lubbock, TX 79401"
  },
  hours: NEEDS_FROM_BRADEN as MaybeContent, // e.g. "Mon–Fri, 8:30am–5:00pm"
  googleReviewUrl: null as string | null, // confirm review link/count exists for Rise
  social: {
    facebook: null as string | null,
    instagram: null as string | null,
    linkedin: null as string | null,
  },
} as const;

export const primaryCta = { label: "Get a Quote", href: "/get-a-quote" } as const;
