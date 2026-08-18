import type { Metadata } from "next";
import { giftConfig } from "@/config/gift.config";
import "./globals.css";

export const metadata: Metadata = {
  title: `${giftConfig.occasion} untuk ${giftConfig.recipientName}`,
  description: `Sebuah kejutan kecil dari ${giftConfig.senderName}, dibuat khusus untuk ${giftConfig.recipientName}.`,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
