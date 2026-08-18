import { act, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";

import { CapsuleExperience } from "@/components/CapsuleExperience";
import { giftConfig } from "@/config/gift.config";

describe("CapsuleExperience", () => {
  afterEach(() => {
    vi.useRealTimers();
  });

  it("invites the recipient to open their gift", () => {
    render(<CapsuleExperience gift={giftConfig} />);

    expect(
      screen.getByRole("heading", { name: `Ada hadiah untuk ${giftConfig.recipientName}` }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Ketuk untuk membuka hadiah" }),
    ).toBeEnabled();
  });

  it("reveals the gift after the capsule opening sequence", () => {
    vi.useFakeTimers();
    render(<CapsuleExperience gift={giftConfig} />);

    fireEvent.click(
      screen.getByRole("button", { name: "Ketuk untuk membuka hadiah" }),
    );

    expect(screen.getByRole("status")).toHaveTextContent(
      "Sedang membuka kejutanmu",
    );

    act(() => {
      vi.runAllTimers();
    });

    const revealHeading = screen.getByRole("heading", {
      name: `Untuk ${giftConfig.recipientName}`,
    });
    expect(revealHeading).toBeInTheDocument();
    expect(revealHeading).toHaveFocus();
  });
});
