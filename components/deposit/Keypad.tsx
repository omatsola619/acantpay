"use client";

const rows = [
  ["1", "2", "3"],
  ["4", "5", "6"],
  ["7", "8", "9"],
];

function Key({ label, onPress }: { label: string; onPress: () => void }) {
  return (
    <button
      type="button"
      onClick={onPress}
      className="flex h-[50px] min-w-0 flex-1 items-center justify-center rounded-[8.5px] bg-[#988ea7] pt-[3px] pb-1 active:bg-[#b3aac0]"
    >
      <span className="relative font-system text-[23px] leading-7 text-heading">{label}</span>
    </button>
  );
}

/** iOS-style number pad from the design (the system keyboard, drawn in-page so it works everywhere). */
export default function Keypad({ onDigit, onDelete }: { onDigit: (d: string) => void; onDelete: () => void }) {
  return (
    // Colours sampled from the Figma render: its blend-mode layer stack doesn't translate to CSS
    <div className="flex w-full flex-col gap-1.5 rounded-b-[62px] bg-[#251c3a] px-[7.667px] pt-6 pb-[76px]">
      {rows.map((row) => (
        <div key={row[0]} className="flex w-full gap-1.5">
          {row.map((d) => (
            <Key key={d} label={d} onPress={() => onDigit(d)} />
          ))}
        </div>
      ))}
      <div className="flex w-full gap-1.5">
        <div className="h-[50px] flex-1" />
        <Key label="0" onPress={() => onDigit("0")} />
        <button
          type="button"
          onClick={onDelete}
          aria-label="Delete"
          className="flex h-[50px] flex-1 items-center justify-center rounded-[8.5px] text-sub-heading active:opacity-60"
        >
          {/* Stand-in for the SF Symbol "delete.left", which can't be exported from Figma */}
          <svg width="27" height="20" viewBox="0 0 27 20" fill="none" aria-hidden>
            <path
              d="M8.6 1.5h14.4A2.5 2.5 0 0 1 25.5 4v12a2.5 2.5 0 0 1-2.5 2.5H8.6a2.5 2.5 0 0 1-1.86-.83L1.5 10l5.24-7.67A2.5 2.5 0 0 1 8.6 1.5Z"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
            <path d="m12.5 6.5 7 7m0-7-7 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </div>
  );
}
