import type { NextConfig } from "next";
// Ganti nama import agar lebih jelas, ini adalah 'inisiator' plugin PWA
import withPWAInit from "next-pwa";

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

// 1. Definisikan konfigurasi dasar Next.js Anda
const nextConfig: NextConfig = {
  reactStrictMode: true,
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
          { key: "Referrer-Policy", value: "same-origin" },
        ],
      },
    ];
  },
};

// 2. Inisialisasi plugin PWA dengan opsi-opsinya sendiri
const withPWA = withPWAInit({
  dest: "public",
  register: true,
  skipWaiting: true,
  // Tips: Tambahkan baris ini agar PWA tidak aktif di mode development
  // Ini membantu menghindari masalah cache saat coding
  disable: process.env.NODE_ENV === 'development',
});

// 3. Gabungkan semua plugin dengan cara membungkusnya (composing)
// Urutan: nextConfig -> dibungkus withPWA -> dibungkus withBundleAnalyzer
export default withBundleAnalyzer(withPWA(nextConfig));