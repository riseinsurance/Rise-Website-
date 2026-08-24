import { siteConfig, NEEDS_FROM_BRADEN } from "@/lib/site-config";

function Row({ label, value }: { label: string; value: string }) {
  const missing = value === NEEDS_FROM_BRADEN;
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-widest text-white/50">{label}</p>
      <p className={`mt-1 text-lg font-semibold ${missing ? "text-white/30" : "text-white"}`}>
        {missing ? "[Needed]" : value}
      </p>
    </div>
  );
}

export function TrustSidebar() {
  return (
    <div className="border-2 border-white/10 bg-near-black p-6 text-white sm:p-8">
      <p className="text-sm font-bold uppercase tracking-widest text-brand-blue">Talk to a real person</p>
      <div className="mt-6 space-y-6">
        <Row label="Phone" value={siteConfig.phone} />
        <Row label="Email" value={siteConfig.email} />
        <Row
          label="Office"
          value={
            siteConfig.isCloudBased
              ? "Cloud-Based Agency"
              : siteConfig.address
                ? `${siteConfig.address.line1}, ${siteConfig.address.cityStateZip}`
                : NEEDS_FROM_BRADEN
          }
        />
        <Row label="Hours" value={siteConfig.hours} />
        <div>
          <p className="text-xs font-bold uppercase tracking-widest text-white/50">Reviews</p>
          {siteConfig.googleReviewUrl ? (
            <a
              href={siteConfig.googleReviewUrl}
              className="mt-1 inline-block text-lg font-semibold text-brand-blue hover:underline"
            >
              See our Google reviews
            </a>
          ) : (
            <p className="mt-1 text-lg font-semibold text-white/30">[Google review link needed]</p>
          )}
        </div>
      </div>
    </div>
  );
}
