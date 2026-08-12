<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# giftkuy.id — Simple Pixel Love Capsule

## Bahasa dan konteks kerja

- Gunakan Bahasa Indonesia untuk copy produk dan komunikasi dengan pemilik proyek.
- Pertahankan istilah teknis dalam bahasa Inggris jika lebih jelas.
- Baca dokumen ini sebelum merencanakan atau mengubah implementasi.
- Proyek ini adalah produk pertama giftkuy.id, bukan platform marketplace lengkap.

## Ringkasan produk

Simple Pixel Love Capsule adalah hadiah digital romantis berbentuk pengalaman
"digital unboxing" selama sekitar 30–45 detik. Pembeli mengirim bahan secara
manual, operator giftkuy.id mengubah foto pasangan menjadi pixel-art, mengisi
konfigurasi, lalu menerbitkan satu URL unik untuk penerima.

Target pengguna awal adalah anak muda atau pasangan yang merayakan anniversary
atau ulang tahun pasangan. Nilai utamanya adalah satu momen kejutan yang singkat,
personal, dan emosional—bukan banyaknya fitur.

## Pengalaman inti

Urutan pengalaman penerima:

1. Cover: "Ada hadiah untuk [nama penerima]".
2. Tombol: "Ketuk untuk membuka".
3. Kapsul pixel terbuka dengan animasi, cahaya, dan musik opsional.
4. Avatar pixel pasangan muncul.
5. Satu foto asli ditampilkan sebagai reveal.
6. Pesan cinta personal sepanjang maksimal 250 karakter ditampilkan.
7. Penutup: "Dari [nama pengirim], untuk [nama penerima]".

Jaga durasi total sekitar 30–45 detik. Jangan memperpanjang pengalaman hanya
untuk memenuhi angka satu menit.

## Model operasional MVP

- Pelanggan memesan dan mengirim bahan melalui kanal eksternal seperti WhatsApp
  atau form yang dikelola terpisah.
- Operator memproses pixel-art dengan alat AI di luar aplikasi.
- Operator mengisi konfigurasi dan mengganti aset secara manual.
- Setiap pesanan menggunakan satu deployment dan satu URL unik.
- Target operasional awal: 10 pesanan berbayar.
- Target waktu produksi: maksimal 15–20 menit per pesanan.

## Input pelanggan

Batasi input setiap pesanan pada:

- nama pengirim;
- nama penerima;
- label momen atau tanggal;
- satu foto pasangan;
- satu pesan maksimal 250 karakter;
- satu dari maksimal tiga tema;
- musik opsional dari katalog terbatas.

Jangan menerima desain bebas atau permintaan animasi khusus pada fase MVP.

## Batasan teknis

- Gunakan Next.js App Router, TypeScript, Tailwind CSS, dan ESLint.
- Aplikasi harus tetap client-side/static; jangan menambahkan database, API
  aplikasi, authentication, atau server-side business logic.
- Utamakan Server Components. Tambahkan `"use client"` hanya pada komponen yang
  benar-benar membutuhkan state, event browser, audio, atau animasi interaktif.
- Semua data dan aset yang dikirim ke browser harus dianggap publik. Jangan
  menyimpan rahasia, token, atau data pribadi sensitif dalam konfigurasi.
- Satu deployment hanya boleh memuat aset milik satu pesanan agar aset pelanggan
  lain tidak ikut masuk ke bundle atau direktori publik.
- Pengalaman harus mobile-first dan tetap berfungsi pada lebar 320px.
- Hormati `prefers-reduced-motion` dan sediakan kontrol musik yang dapat diakses.
- Interaksi membuka kapsul harus memakai elemen `<button>` yang dapat digunakan
  dengan keyboard, bukan elemen generik dengan click handler.

## Struktur yang dituju

```text
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── CapsuleCover.tsx
│   ├── CapsuleOpening.tsx
│   ├── GiftReveal.tsx
│   └── LoveNote.tsx
├── config/
│   └── gift.config.ts
├── constants/
│   └── themes.ts
└── types/
    └── gift.ts

public/
└── gift/
    ├── original-photo.webp
    ├── pixel-couple.webp
    └── music.mp3
```

Struktur ini adalah arah, bukan alasan membuat file kosong. Buat file hanya
ketika increment implementasi membutuhkannya.

## Aturan konfigurasi

- Simpan data yang berubah untuk setiap pesanan di `src/config/gift.config.ts`.
- Simpan nilai aplikasi yang tidak berubah antar-pesanan di `src/constants/`.
- Definisikan kontrak konfigurasi di `src/types/gift.ts`.
- Gunakan satu konfigurasi aktif per deployment.
- Jangan membuat config engine generik atau multi-tenant pada MVP.
- Optimalkan foto ke WebP/AVIF dan kompres audio sebelum deployment.
- Tulis alt text foto berdasarkan konteks tanpa mengungkap informasi sensitif.

Contoh kontrak data yang dituju:

```ts
type GiftConfig = {
  senderName: string;
  recipientName: string;
  occasion: string;
  message: string;
  theme: "rose" | "sunset" | "midnight";
  originalPhoto: string;
  pixelArtwork: string;
  music?: string;
};
```

## Scope MVP

- Satu desain kapsul.
- Maksimal tiga tema warna.
- Satu foto asli dan satu gambar pixel-art.
- Satu pesan pendek.
- Musik opsional dari katalog terbatas.
- Animasi yang responsif dan accessible.
- Konfigurasi manual dan deployment per pesanan.

## Tidak dikerjakan pada MVP

- Login atau akun pengguna.
- Database dan dashboard admin.
- Pembayaran otomatis.
- Upload gambar dari halaman produk.
- Generator pixel-art di dalam aplikasi.
- Editor mandiri untuk pelanggan.
- Mini-game, timeline hubungan, atau galeri banyak foto.
- Tema dan animasi custom per pelanggan.
- Multi-tenant routing atau kumpulan konfigurasi pelanggan dalam satu bundle.

## Asumsi yang harus divalidasi

- Pengguna bersedia membayar untuk pengalaman 30–45 detik.
- Pixel-art yang dihasilkan terasa cukup mirip dan personal.
- Satu foto dan satu pesan menghasilkan dampak emosional yang cukup.
- Satu pesanan dapat diproduksi dan diterbitkan dalam maksimal 20 menit.
- Penerima nyaman membuka tautan hadiah dari pasangannya.

## Definition of done untuk setiap perubahan

- Perubahan tetap berada dalam scope MVP di atas.
- `npm run lint` lulus.
- `npm run build` lulus.
- TypeScript tidak menghasilkan error.
- UI diverifikasi pada lebar 320px, 768px, 1024px, dan 1440px jika ada
  perubahan visual.
- Interaksi utama dapat digunakan dengan keyboard dan reduced motion dihormati.
- Tidak ada aset pelanggan lain, rahasia, atau data sensitif dalam output build.
- Dokumentasi ini diperbarui jika keputusan produk atau batas teknis berubah.

## Status saat ini

Proyek baru berada pada tahap scaffold Next.js. Pengalaman Simple Pixel Love
Capsule belum diimplementasikan.
