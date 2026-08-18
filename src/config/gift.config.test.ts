import { describe, expect, it } from "vitest";

import { giftConfig } from "@/config/gift.config";
import { giftThemes } from "@/constants/themes";

describe("giftConfig", () => {
  it("uses a supported theme", () => {
    expect(giftThemes[giftConfig.theme]).toBeDefined();
  });

  it("keeps the love note within the MVP limit", () => {
    expect(giftConfig.message.length).toBeLessThanOrEqual(250);
  });

  it("references assets from the active gift deployment", () => {
    expect(giftConfig.pixelArtwork).toMatch(/^\/gift\//);
    expect(giftConfig.originalPhoto).toMatch(/^\/gift\//);
  });
});
