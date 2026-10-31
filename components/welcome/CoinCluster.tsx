/* eslint-disable @next/next/no-img-element */

type Bubble = {
  /** Center of the bubble within the 290.625 × 300 cluster */
  cx: number;
  cy: number;
  size: number;
  rotate: number;
  tint: number;
  border: number;
  coin: number;
  coinRotate?: number;
  /** Sub-pixel offset of the coin from the bubble center, as in Figma */
  coinOffset?: [number, number];
  coinShadow: string;
  glow?: { size: number; blur: number; opacity: number; offset?: [number, number] };
  content: React.ReactNode;
};

const smallShadow = "[filter:drop-shadow(0_9.375px_7.031px_rgba(0,0,0,0.1))_drop-shadow(0_3.75px_2.813px_rgba(0,0,0,0.1))]";

/** Positions a child's center relative to the bubble's center. */
const centered = ([dx, dy] = [0, 0]) => ({ left: `calc(50% + ${dx}px)`, top: `calc(50% + ${dy}px)` });

const icon = (src: string, size: number) => <img src={src} alt="" width={size} height={size} />;

const bubbles: Bubble[] = [
  {
    cx: 145.31,
    cy: 150,
    size: 105,
    rotate: 0,
    tint: 0.3,
    border: 0.4,
    coin: 63.058,
    coinRotate: 3,
    coinOffset: [0.02, -0.39],
    coinShadow: "[filter:drop-shadow(0_18.75px_11.719px_rgba(0,0,0,0.1))_drop-shadow(0_7.5px_4.688px_rgba(0,0,0,0.1))]",
    glow: { size: 103.125, blur: 22.5, opacity: 0.4 },
    content: (
      <div className="flex w-[38.724px] flex-col gap-[1.782px] pl-[0.981px]">
        {[0, 1, 2].map((i) => (
          <div key={i} className="h-[7.58px] rounded-full bg-white" />
        ))}
      </div>
    ),
  },
  {
    cx: 84.93,
    cy: 92.73,
    size: 106.745,
    rotate: -12,
    tint: 0.2,
    border: 0.3,
    coin: 62.268,
    coinOffset: [0.3, 0.06],
    coinShadow: smallShadow,
    glow: { size: 104.521, blur: 20, opacity: 0.3 },
    content: icon("/icons/welcome/eth.svg", 35.582),
  },
  {
    cx: 225.19,
    cy: 94.9,
    size: 98.914,
    rotate: 6,
    tint: 0.2,
    border: 0.3,
    coin: 57.7,
    coinShadow: smallShadow,
    glow: { size: 96.854, blur: 15, opacity: 0.3 },
    content: icon("/icons/welcome/btc.svg", 32.972),
  },
  {
    cx: 65.28,
    cy: 195.77,
    size: 88.954,
    rotate: 12,
    tint: 0.2,
    border: 0.3,
    coin: 60,
    coinRotate: 45,
    coinOffset: [-0.74, 0.29],
    coinShadow: smallShadow,
    content: icon("/icons/welcome/xrp.svg", 24),
  },
  {
    cx: 222.21,
    cy: 194.97,
    size: 82.429,
    rotate: -6,
    tint: 0.2,
    border: 0.3,
    coin: 49.457,
    coinShadow: smallShadow,
    glow: { size: 80.368, blur: 15, opacity: 0.3, offset: [-1.01, -1.24] },
    content: icon("/icons/welcome/tether.svg", 16),
  },
];

/** Floating coin illustration from the welcome screen (Figma node 2220:2160, 290.625 × 300). */
export default function CoinCluster() {
  return (
    <div className="relative h-[300px] w-[290.625px]">
      {bubbles.map((b, i) => (
        <div
          key={i}
          className="absolute rounded-full border-[0.938px] border-solid"
          style={{
            width: b.size,
            height: b.size,
            left: b.cx - b.size / 2,
            top: b.cy - b.size / 2,
            transform: `rotate(${b.rotate}deg)`,
            borderColor: `rgba(194,122,255,${b.border})`,
            backgroundImage: `linear-gradient(135deg, rgba(173,70,255,${b.tint}) 0%, rgba(89,22,139,${b.tint}) 100%)`,
          }}
        >
          <div
            className={`bg-primary-gradient absolute flex items-center justify-center rounded-full ${b.coinShadow}`}
            style={{
              width: b.coin,
              height: b.coin,
              ...centered(b.coinOffset),
              transform: `translate(-50%, -50%) rotate(${b.coinRotate ?? 0}deg)`,
            }}
          >
            {b.content}
          </div>
          {b.glow && (
            <div
              className="pointer-events-none absolute rounded-full bg-accent"
              style={{
                width: b.glow.size,
                height: b.glow.size,
                ...centered(b.glow.offset),
                transform: "translate(-50%, -50%)",
                filter: `blur(${b.glow.blur}px)`,
                opacity: b.glow.opacity,
              }}
            />
          )}
        </div>
      ))}
    </div>
  );
}
