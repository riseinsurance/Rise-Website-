// Carrier logos sourced from ~/Desktop/Insurance Company Logos, trimmed and
// keyed to transparent PNGs in public/carriers. Width/height are the actual
// trimmed pixel dimensions, used as next/image intrinsic sizing hints.
export const carrierLogos = [
  { name: "Allstate", src: "/carriers/allstate.png", width: 300, height: 76 },
  { name: "Branch", src: "/carriers/branch.png", width: 700, height: 226 },
  { name: "GEICO", src: "/carriers/geico.png", width: 495, height: 122 },
  { name: "Liberty Mutual", src: "/carriers/liberty-mutual.png", width: 3780, height: 1785 },
  { name: "National General", src: "/carriers/national-general.png", width: 396, height: 59 },
  { name: "Obie", src: "/carriers/obie.png", width: 681, height: 271 },
  { name: "Progressive", src: "/carriers/progressive.png", width: 3840, height: 469 },
  { name: "Root Insurance", src: "/carriers/root.png", width: 204, height: 99 },
  { name: "Steadily", src: "/carriers/steadily.png", width: 296, height: 50 },
  { name: "The Hartford", src: "/carriers/the-hartford.png", width: 2258, height: 1599 },
  { name: "Travelers", src: "/carriers/travelers.png", width: 600, height: 134 },
] as const;
