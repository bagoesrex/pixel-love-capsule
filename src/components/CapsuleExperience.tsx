"use client";

import { useEffect, useRef, useState } from "react";

import { AudioControl } from "@/components/AudioControl";
import { CapsuleCover } from "@/components/CapsuleCover";
import { CapsuleOpening } from "@/components/CapsuleOpening";
import { GiftReveal } from "@/components/GiftReveal";
import type { GiftConfig } from "@/types/gift";

type CapsuleExperienceProps = {
  gift: GiftConfig;
};

type CapsulePhase = "sealed" | "opening" | "revealed";

const OPENING_DURATION_MS = 1600;

export function CapsuleExperience({ gift }: CapsuleExperienceProps) {
  const [phase, setPhase] = useState<CapsulePhase>("sealed");
  const revealHeadingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (phase !== "opening") {
      return;
    }

    const prefersReducedMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const timer = window.setTimeout(
      () => setPhase("revealed"),
      prefersReducedMotion ? 0 : OPENING_DURATION_MS,
    );

    return () => window.clearTimeout(timer);
  }, [phase]);

  useEffect(() => {
    if (phase === "revealed") {
      revealHeadingRef.current?.focus();
    }
  }, [phase]);

  return (
    <main data-theme={gift.theme} className="experience">
      {gift.music && <AudioControl src={gift.music} />}

      {phase === "sealed" && (
        <CapsuleCover
          recipientName={gift.recipientName}
          occasion={gift.occasion}
          onOpen={() => setPhase("opening")}
        />
      )}

      {phase === "opening" && <CapsuleOpening />}

      {phase === "revealed" && (
        <GiftReveal gift={gift} headingRef={revealHeadingRef} />
      )}
    </main>
  );
}
