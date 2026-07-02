"use client";

import TeamCard from "./TeamCard";

export default function TeamGrid() {
  return (
    <section className="relative mx-auto mt-16 2xl:mt-20 max-w-7xl px-6">

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">

        <TeamCard
          name="Sophia Carter"
          role="Senior Hair Stylist"
          image="/team/team1.png"
          icon="hair"
        />

        <TeamCard
          name="Emma Johnson"
          role="Makeup Artist"
          image="/team/team2.png"
          icon="makeup"
        />

        <TeamCard
          name="Olivia Brown"
          role="Skincare Specialist"
          image="/team/team3.png"
          icon="skin"
        />

        <TeamCard
          name="Liam Davis"
          role="Color Expert"
          image="/team/team4.png"
          icon="color"
        />

      </div>

    </section>
  );
}