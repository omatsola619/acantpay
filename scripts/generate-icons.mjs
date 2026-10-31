// Generates PWA / favicon PNGs from the AcantPay mark (three bars on the brand gradient).
// Run with: node scripts/generate-icons.mjs
import sharp from "sharp";
import { mkdir } from "node:fs/promises";

const mark = ({ size, radius, scale }) => {
  const barW = 260 * scale;
  const barH = 76 * scale;
  const gap = 18 * scale;
  const x = (512 - barW) / 2;
  const top = (512 - (barH * 3 + gap * 2)) / 2;
  const bars = [0, 1, 2]
    .map((i) => `<rect x="${x}" y="${top + i * (barH + gap)}" width="${barW}" height="${barH}" rx="${barH / 2}" fill="#fff"/>`)
    .join("");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 512 512">
  <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#bc48ff"/><stop offset="1" stop-color="#6644fe"/></linearGradient></defs>
  <rect width="512" height="512" rx="${radius}" fill="url(#g)"/>${bars}</svg>`;
};

const out = [
  ["public/icons/app/icon-192.png", { size: 192, radius: 112, scale: 1 }],
  ["public/icons/app/icon-512.png", { size: 512, radius: 112, scale: 1 }],
  ["public/icons/app/icon-maskable-512.png", { size: 512, radius: 0, scale: 0.8 }],
  ["app/apple-icon.png", { size: 180, radius: 0, scale: 0.9 }],
  ["app/icon.png", { size: 64, radius: 112, scale: 1 }],
];

await mkdir("public/icons/app", { recursive: true });
for (const [file, opts] of out) {
  await sharp(Buffer.from(mark(opts))).png().toFile(file);
  console.log("wrote", file);
}
