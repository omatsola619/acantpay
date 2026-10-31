import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "AcantPay",
    short_name: "AcantPay",
    description: "Trade crypto anytime. Send, receive and manage your crypto with AcantPay.",
    id: "/",
    start_url: "/",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#0e011b",
    theme_color: "#0e011b",
    categories: ["finance"],
    icons: [
      { src: "/icons/app/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icons/app/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icons/app/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
