"use client";

import { ColoredText } from "@/components/app/animated-text/ColoredText";
import { PageSection } from "@/components/app/PageSection";

export default function Page() {
  return (
    <>
      <PageSection
        fullHeight
        className="flex flex-col items-center justify-center"
      >
        <ColoredText
          size="lg"
          className="max-w-2xl flex-wrap justify-center"
          text="Manufacturing measured in weeks, not months."
        />
      </PageSection>
    </>
  );
}
