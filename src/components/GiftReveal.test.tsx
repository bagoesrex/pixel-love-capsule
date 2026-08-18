import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { GiftReveal } from "@/components/GiftReveal";
import { giftConfig } from "@/config/gift.config";

describe("GiftReveal", () => {
  it("shows the personal artwork, photo, and love note", () => {
    render(<GiftReveal gift={giftConfig} headingRef={{ current: null }} />);

    expect(
      screen.getByRole("heading", { name: `Untuk ${giftConfig.recipientName}` }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: giftConfig.pixelArtworkAlt }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("img", { name: giftConfig.originalPhotoAlt }),
    ).toBeInTheDocument();
    expect(screen.getByText(giftConfig.message)).toBeInTheDocument();
    expect(
      screen.getByText(`Dari ${giftConfig.senderName}, untuk ${giftConfig.recipientName}`),
    ).toBeInTheDocument();
  });
});
