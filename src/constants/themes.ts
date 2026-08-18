import type { GiftTheme } from "@/types/gift";

type ThemeDefinition = {
  label: string;
  ambience: string;
};

export const giftThemes = {
  rose: {
    label: "Rose Garden",
    ambience: "Hangat dan romantis",
  },
  sunset: {
    label: "Golden Sunset",
    ambience: "Ceria dan penuh kenangan",
  },
  midnight: {
    label: "Midnight Stars",
    ambience: "Tenang dan intim",
  },
} satisfies Record<GiftTheme, ThemeDefinition>;
