export type GiftTheme = "rose" | "sunset" | "midnight";

export type GiftConfig = {
  senderName: string;
  recipientName: string;
  occasion: string;
  eventDate: string;
  message: string;
  theme: GiftTheme;
  originalPhoto: string;
  originalPhotoAlt: string;
  pixelArtwork: string;
  pixelArtworkAlt: string;
  music?: string;
};
