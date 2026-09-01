import type { Metadata } from "next";
import { TeamGrid } from "@/components/sections/TeamGrid";
import { CtaBanner } from "@/components/sections/CtaBanner";

export const metadata: Metadata = {
  title: "Our Team",
  description: "Meet the people behind Rise Insurance Agency, the real team you'll actually talk to.",
};

const teamSections = [
  {
    title: "Leadership",
    members: [
      {
        name: "Gary Owen",
        title: "President/Principal Agent",
        bio: "Gary brings almost 20 years of real estate experience to Rise. Being in the trenches with buyers and sellers, he's seen firsthand how much a fast, responsive agent actually matters, and how often people got sold coverage that didn't fit. As President and Principal Agent at Rise, he now serves clients in both real estate and insurance, which makes him an even better resource in each.",
        photoSrc: "/photos/team-gary.jpg",
      },
    ],
  },
  {
    title: "Agents",
    members: [
      {
        name: "Brad Dimmick",
        title: "Sales Agent",
        bio: "Brad's been licensed for two years and has already served more than 150 clients, enough to see just about every kind of coverage situation there is. He builds every policy around what a client actually needs and can actually afford, not a one-size-fits-all quote, and he stays in touch, not just at renewal time.",
        photoSrc: "/photos/team-brad.jpg",
      },
      {
        name: "Journey Baker",
        title: "Sales Agent",
        bio: "Journey started at the bottom, cold calling for other agents, and worked her way up to being an agent herself in less than five months. She leads with relationships, not just numbers, and puts a personal touch on every quote that leaves her desk.",
        photoSrc: "/photos/team-journey.jpg",
      },
    ],
  },
  {
    title: "Business Development",
    members: [
      {
        name: "Kamry Ramage",
        title: "Business Development Lead",
        bio: "Kamry is the face of Rise out in the community. She's in realtor offices, lender offices, and client offices building real relationships, not just handing out business cards. She's also a Texas Tech Red Raider, studying business management.",
        photoSrc: "/photos/team-kamry.jpg",
      },
      {
        name: "Esteban Gil",
        title: "Growth Operations",
        bio: "Esteban tracks what's actually working, marketing spend, referral results, campaign ROI, and runs the operations behind our email and outreach campaigns. He's finishing up his finance degree at Texas Tech.",
        photoSrc: "/photos/team-esteban.jpg",
      },
    ],
  },
];

export default function TeamPage() {
  return (
    <>
      <TeamGrid
        eyebrow="Our Team"
        headline="The people who actually pick up the phone."
        subhead="Every name below is someone you might actually talk to."
        sections={teamSections}
      />

      <CtaBanner
        headline="Ready to talk to someone who'll actually pick up?"
        cta={{ label: "Get a Quote", href: "/get-a-quote" }}
      />
    </>
  );
}
