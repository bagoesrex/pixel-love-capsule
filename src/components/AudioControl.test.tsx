import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { AudioControl } from "@/components/AudioControl";

describe("AudioControl", () => {
  beforeEach(() => {
    vi.spyOn(HTMLMediaElement.prototype, "play").mockResolvedValue();
    vi.spyOn(HTMLMediaElement.prototype, "pause").mockImplementation(() => undefined);
  });

  it("starts muted and lets the recipient control playback", async () => {
    render(<AudioControl src="/gift/music.mp3" />);

    const playButton = screen.getByRole("button", { name: "Putar musik" });
    expect(playButton).toBeInTheDocument();
    expect(HTMLMediaElement.prototype.play).not.toHaveBeenCalled();

    fireEvent.click(playButton);
    await waitFor(() => {
      expect(
        screen.getByRole("button", { name: "Hentikan musik" }),
      ).toBeInTheDocument();
    });

    fireEvent.click(screen.getByRole("button", { name: "Hentikan musik" }));
    expect(HTMLMediaElement.prototype.pause).toHaveBeenCalledOnce();
  });
});
