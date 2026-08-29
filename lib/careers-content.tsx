import type { ReactNode } from "react";

// Content structure and language adapted from Owen Insurance Agency's live
// careers pages at Braden's direction (same ownership, explicit instruction
// to carry the values and faith framing over as-is). Minor copyediting only
// (e.g. a typo fix); benefits and values are Braden's own IP reused across
// his two agencies, not fabricated claims.

function TargetIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="0.5" fill="currentColor" />
    </svg>
  );
}

function PeopleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8">
      <circle cx="9" cy="8" r="3" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" />
      <path d="M15 14.5c2.5.3 4.5 2.4 4.5 5.5" />
    </svg>
  );
}

function DiamondIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8">
      <path d="M6 3h12l4 6-10 12L2 9Z" />
      <path d="M2 9h20M9 3l-2 6 5 12 5-12-2-6" />
    </svg>
  );
}

function LockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8">
      <rect x="5" y="11" width="14" height="9" rx="1" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8">
      <path d="M12 3 4.5 6v6c0 4.5 3.2 7.4 7.5 9 4.3-1.6 7.5-4.5 7.5-9V6L12 3Z" />
    </svg>
  );
}

function RocketIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8">
      <path d="M12 2c3 2 5 6 5 10 0 2-1 4-2 5l-3 3-3-3c-1-1-2-3-2-5 0-4 2-8 5-10Z" />
      <circle cx="12" cy="10" r="1.5" />
      <path d="M9 17l-3 3M15 17l3 3" />
    </svg>
  );
}

function HouseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8">
      <path d="M4 11 12 4l8 7" />
      <path d="M6 10v9h12v-9" />
    </svg>
  );
}

function TargetCircleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8">
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="5" />
    </svg>
  );
}

function DumbbellIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8">
      <path d="M4 9v6M2 10v4M20 9v6M22 10v4M6 12h12" />
    </svg>
  );
}

function CashIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8">
      <rect x="2" y="7" width="20" height="10" rx="1" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function BriefcaseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-8 w-8">
      <rect x="3" y="7" width="18" height="13" rx="1" />
      <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  );
}

function BooksIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
      <path d="M4 4h4v16H4zM10 4h4v16h-4zM16 5l4-1 1 16-4 1z" />
    </svg>
  );
}

function ForkIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
      <path d="M6 3v8M4 3v5a2 2 0 0 0 4 0V3M8 3v18M18 3c-2 0-3 2-3 5s1 5 3 5v10" />
    </svg>
  );
}

function PantsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
      <path d="M6 3h12l1 18h-4l-1-11-1 11h-4l-1-11-1 11H5Z" />
    </svg>
  );
}

function ActivityIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-7 w-7">
      <circle cx="12" cy="5" r="2" />
      <path d="M8 21l2-6 2 2 2-2 2 6M9 12l1-4 2 1 2-1 2 3" />
    </svg>
  );
}

export type CoreValue = { title: string; description: string; icon: ReactNode };

export const coreValues: CoreValue[] = [
  {
    title: "Integrity Above All",
    description:
      "We do the right thing, even when no one is watching. Financial services depend on trust. Clients need to know our advice and actions are rooted in honesty.",
    icon: <TargetIcon />,
  },
  {
    title: "Client Centered Service",
    description: "We serve people, not just policies & portfolios. Help others first and the profits will follow.",
    icon: <PeopleIcon />,
  },
  {
    title: "Excellence in the Ordinary",
    description: "Details matter. Pursue excellence in everything we do.",
    icon: <DiamondIcon />,
  },
  {
    title: "Lifelong Stewardship",
    description:
      "Educate, empower and equip our clients to make wise financial decisions. We are not sales people, we are guides. Our work matters.",
    icon: <LockIcon />,
  },
  {
    title: "Fear Not",
    description:
      "We never make decisions based in fear. We know who is in control, through different economies and challenges our mission never changes. Always help people and the profits will follow.",
    icon: <ShieldIcon />,
  },
  {
    title: "Momentum Theorem",
    description: "Focused intensity over time multiplied by God's blessings creates unstoppable momentum.",
    icon: <RocketIcon />,
  },
  {
    title: "Family & Faith Balance",
    description:
      "We strive to create healthy families, personal well being, and meaningful work. Family is why we are here and God is why we can do the things we do. Don't forget that.",
    icon: <HouseIcon />,
  },
  {
    title: "Shoot Sacred Cows",
    description:
      "We challenge outdated processes and ask why not do it better? We encourage innovation and flexibility to stay current in an ever changing world.",
    icon: <TargetCircleIcon />,
  },
  {
    title: "Never Settle",
    description: "Persist when others quit. Go the extra mile for clients and each other.",
    icon: <DumbbellIcon />,
  },
  {
    title: "Never Settle Share the Profits",
    description: "We win together and lose together.",
    icon: <CashIcon />,
  },
  {
    title: "Self Employed",
    description:
      "Act like you own the place. Take initiative, own outcomes, and drive improvement. We all care and take responsibility like we own the place.",
    icon: <BriefcaseIcon />,
  },
];

export type Benefit = { title: string; description: string; icon: ReactNode };

export const benefits: Benefit[] = [
  {
    title: "Flexible Scheduling That Works For You",
    description: "Generous PTO for salaried roles and schedule control for sales team members. We trust you to own your time.",
    icon: <ClockIcon />,
  },
  {
    title: "Paid Personal & Professional Development",
    description: "We cover resources that help you grow; books, courses, conferences, coaching, and more.",
    icon: <BooksIcon />,
  },
  {
    title: "Year Round Bonus Opportunities",
    description: "When you win, we all win. We reward performance consistently and generously.",
    icon: <CashIcon />,
  },
  {
    title: "Team Lunches",
    description: "We regularly share meals as a team, because good conversations (and great ideas) often happen over lunch.",
    icon: <ForkIcon />,
  },
  {
    title: "Casual Dress",
    description: "While suits impress, they aren't required here.",
    icon: <PantsIcon />,
  },
  {
    title: "Regular Team Bonding Activities",
    description: "From golf rounds to outings, we create space to laugh, connect, and build a culture that actually enjoys working together.",
    icon: <ActivityIcon />,
  },
];
