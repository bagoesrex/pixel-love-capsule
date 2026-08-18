import Image from "next/image";
import type { RefObject } from "react";

import { LoveNote } from "@/components/LoveNote";
import type { GiftConfig } from "@/types/gift";

type GiftRevealProps = {
  gift: GiftConfig;
  headingRef: RefObject<HTMLHeadingElement | null>;
};

export function GiftReveal({ gift, headingRef }: GiftRevealProps) {
  return (
    <section className="gift-reveal" aria-labelledby="gift-reveal-title">
      <div className="gift-reveal__sparkles" aria-hidden="true">
        <span>✦</span>
        <span>♥</span>
        <span>✦</span>
        <span>♥</span>
      </div>

      <header className="gift-reveal__header">
        <p className="eyebrow">{gift.occasion}</p>
        <h1
          id="gift-reveal-title"
          ref={headingRef}
          tabIndex={-1}
          className="gift-reveal__title"
        >
          Untuk {gift.recipientName}
        </h1>
        <p className="gift-reveal__date">{gift.eventDate}</p>
      </header>

      <div className="memory-stack">
        <figure className="pixel-frame">
          <div className="pixel-frame__screen">
            <Image
              src={gift.pixelArtwork}
              alt={gift.pixelArtworkAlt}
              width={960}
              height={960}
              priority
              sizes="(max-width: 480px) 82vw, 360px"
            />
          </div>
          <figcaption>Kita, versi pixel</figcaption>
        </figure>

        <figure className="photo-card">
          <Image
            src={gift.originalPhoto}
            alt={gift.originalPhotoAlt}
            width={960}
            height={960}
            sizes="(max-width: 480px) 34vw, 150px"
          />
          <figcaption>our favorite memory</figcaption>
        </figure>
      </div>

      <LoveNote
        message={gift.message}
        senderName={gift.senderName}
        recipientName={gift.recipientName}
      />

      <p className="gift-reveal__footer">
        Dibuat khusus untuk satu orang istimewa
      </p>
    </section>
  );
}
