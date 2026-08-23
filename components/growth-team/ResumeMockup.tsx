// A mock résumé showing what this role looks like once it's on someone's
// résumé — the Growth Team line gets a hand-drawn circle (same draw-in
// technique as CircleHighlight) to make the point visually instead of just
// asserting it in copy. Sized like a compact thumbnail (matching Owen
// Insurance Agency's reference version), not a full readable document —
// "Your Name" and the rest of the entries are placeholder template
// content, not a real person.
export function ResumeMockup() {
  return (
    <div className="w-full max-w-sm rounded-xl border-[8px] border-ink bg-ink shadow-2xl">
      <div className="bg-white p-5 text-[7px] leading-snug text-ink/80 sm:p-6">
        <p className="font-display text-base font-bold tracking-tight text-ink">YOUR NAME</p>
        <p className="mt-0.5 text-[6.5px] text-ink/50">
          your.email@email.com &nbsp;|&nbsp; (555) 555-5555 &nbsp;|&nbsp; Lubbock, TX
        </p>

        <hr className="mt-2 border-ink/15" />

        <div className="mt-2 grid grid-cols-[54px_1fr] gap-x-3">
          <p className="text-[6px] font-bold uppercase tracking-[0.1em] text-ink/50">Summary</p>
          <p className="text-ink/70">
            Motivated and outgoing college student with part-time experience in sales and client
            communication. Eager to grow in business development and customer-facing roles.
          </p>
        </div>

        <hr className="mt-2 border-ink/15" />

        <div className="mt-2 grid grid-cols-[54px_1fr] gap-x-3">
          <p className="text-[6px] font-bold uppercase tracking-[0.1em] text-ink/50">
            Work Experience
          </p>
          <div className="space-y-2">
            <div className="relative">
              <div className="relative z-10">
                <div className="flex flex-wrap items-baseline justify-between gap-x-2">
                  <p className="font-semibold text-ink">Growth Team Member, Rise Insurance Agency</p>
                  <p className="shrink-0 text-ink/50">Jun 2025&ndash;Present</p>
                </div>
                <ul className="mt-0.5 list-disc space-y-0.5 pl-2.5">
                  <li>Made outbound calls to prospective clients using proven scripts</li>
                  <li>Transferred qualified leads to licensed agents</li>
                  <li>Logged lead information into the CRM accurately</li>
                  <li>Recognized for consistent lead volume</li>
                </ul>
              </div>
              <svg
                viewBox="0 0 240 100"
                preserveAspectRatio="none"
                aria-hidden="true"
                className="pointer-events-none absolute -inset-x-[5%] -inset-y-[10%] h-[122%] w-[110%]"
              >
                <path
                  d="M22,52 C15,20 55,6 120,5 C185,4 228,18 220,50 C227,82 182,96 120,96 C58,96 15,84 22,52 Z"
                  fill="none"
                  stroke="#ec4899"
                  strokeWidth="4"
                  strokeLinecap="round"
                  pathLength={1}
                  className="animate-draw-circle"
                />
              </svg>
            </div>

            <div className="opacity-40">
              <div className="flex flex-wrap items-baseline justify-between gap-x-2">
                <p className="font-semibold text-ink">Front Desk Associate, Local Gym</p>
                <p className="shrink-0 text-ink/50">Aug 2023&ndash;May 2025</p>
              </div>
              <ul className="mt-0.5 list-disc space-y-0.5 pl-2.5">
                <li>Greeted and checked in members</li>
                <li>Handled scheduling and membership questions</li>
              </ul>
            </div>

            <div className="opacity-40">
              <div className="flex flex-wrap items-baseline justify-between gap-x-2">
                <p className="font-semibold text-ink">Crew Member, Local Restaurant</p>
                <p className="shrink-0 text-ink/50">May 2022&ndash;Jul 2023</p>
              </div>
              <ul className="mt-0.5 list-disc space-y-0.5 pl-2.5">
                <li>Took and prepared customer orders</li>
                <li>Managed point-of-sale transactions</li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="mt-2 border-ink/15" />

        <div className="mt-2 grid grid-cols-[54px_1fr] gap-x-3 opacity-40">
          <p className="text-[6px] font-bold uppercase tracking-[0.1em] text-ink/50">Education</p>
          <div className="space-y-1">
            <div className="flex flex-wrap items-baseline justify-between gap-x-2">
              <p className="font-semibold text-ink">Bachelor of Business Administration</p>
              <p className="shrink-0 text-ink/50">Expected 2028</p>
            </div>
            <div className="flex flex-wrap items-baseline justify-between gap-x-2">
              <p className="font-semibold text-ink">High School Diploma</p>
              <p className="shrink-0 text-ink/50">May 2024</p>
            </div>
          </div>
        </div>

        <hr className="mt-2 border-ink/15" />

        <div className="mt-2 grid grid-cols-[54px_1fr] gap-x-3 opacity-40">
          <p className="text-[6px] font-bold uppercase tracking-[0.1em] text-ink/50">Key Skills</p>
          <div className="grid grid-cols-2 gap-x-3 gap-y-0.5">
            <p>&bull; Cold calling</p>
            <p>&bull; Customer service</p>
            <p>&bull; CRM data entry</p>
            <p>&bull; Time management</p>
            <p>&bull; Objection handling</p>
            <p>&bull; Team collaboration</p>
          </div>
        </div>
      </div>
    </div>
  );
}
