import { Photo } from "@/components/ui/Photo";

type TeamMember = {
  name: string;
  title: string;
  bio: string;
  photoSrc?: string;
};

// Falls back to a colored circle with the person's first initial instead of
// a broken image or bracket placeholder when a photo hasn't been supplied
// yet, so the grid still looks intentional and finished card by card.
function TeamCard({ member }: { member: TeamMember }) {
  return (
    <div className="border border-ink/10 bg-white">
      <div className="relative aspect-[4/5] overflow-hidden bg-light-gray">
        {member.photoSrc ? (
          <Photo src={member.photoSrc} alt={member.name} focusY={20} />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <div className="flex h-24 w-24 items-center justify-center rounded-full bg-brand-blue font-display text-4xl font-bold text-white">
              {member.name.charAt(0)}
            </div>
          </div>
        )}
      </div>
      <div className="p-6 text-center">
        <p className="font-display text-xl font-semibold text-ink">{member.name}</p>
        <p className="mt-1 text-xs font-bold uppercase tracking-wide text-brand-blue">{member.title}</p>
        <p className="mt-3 text-sm leading-relaxed text-ink/70">{member.bio}</p>
      </div>
    </div>
  );
}

export function TeamGrid({
  eyebrow,
  headline,
  subhead,
  members,
}: {
  eyebrow: string;
  headline: string;
  subhead: string;
  members: TeamMember[];
}) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 py-16 text-center sm:py-20 lg:py-24 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.25em] text-brand-blue">{eyebrow}</p>
        <h1 className="mt-4 font-display text-5xl font-semibold tracking-tight text-ink sm:text-6xl">
          {headline}
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg text-ink/70">{subhead}</p>

        <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
}
