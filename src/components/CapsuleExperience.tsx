"use client";

import { useEffect, useRef, useState } from "react";

import { CapsuleCover } from "@/components/CapsuleCover";
import { CapsuleOpening } from "@/components/CapsuleOpening";
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
    <div data-theme={gift.theme} className="min-h-svh bg-rose-50 text-rose-950">
      {phase === "sealed" && (
        <CapsuleCover
          recipientName={gift.recipientName}
          occasion={gift.occasion}
          onOpen={() => setPhase("opening")}
        />
      )}

      {phase === "opening" && <CapsuleOpening />}

      {phase === "revealed" && (
        <section className="flex min-h-svh items-center justify-center px-5 text-center">
          <h1
            ref={revealHeadingRef}
            tabIndex={-1}
            className="text-4xl font-semibold outline-none"
          >
            Untuk {gift.recipientName}
          </h1>
        </section>
      )}
    </div>
  );
}
