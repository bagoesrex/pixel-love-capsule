import type { GiftConfig } from "@/types/gift";

export const giftConfig = {
  senderName: "Raka",
  recipientName: "Alya",
  occasion: "Happy Anniversary",
  eventDate: "19 Agustus 2026",
  message:
    "Terima kasih sudah menjadi rumah paling hangat dalam setiap cerita kita. Semoga kejutan kecil ini selalu mengingatkanmu betapa berartinya kamu.",
  theme: "rose",
  originalPhoto: "/gift/original-photo.webp",
  originalPhotoAlt: "Raka dan Alya tersenyum bersama di taman saat senja",
  pixelArtwork: "/gift/pixel-couple.webp",
  pixelArtworkAlt: "Avatar pixel Raka dan Alya berdiri berdekatan",
} satisfies GiftConfig;
