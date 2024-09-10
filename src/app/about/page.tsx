import React from "react";
import IntroSection from "./_components/intro";
import TeamSection from "./_components/team";

const AboutPage = () => {
  return (
    <div className="container mx-auto z-20 px-4 py-8">
      <div className="space-y-12">
        <IntroSection />
      </div>
      <TeamSection />
    </div>
  );
};

export default AboutPage;
