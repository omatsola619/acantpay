/** Simulated iOS home indicator, overlaid at the bottom of the desktop device frame. */
export default function HomeIndicator() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-50 hidden h-[21px] items-end justify-center pb-[8px] frame:flex">
      <div className="h-[5px] w-[139px] rounded-full bg-white" />
    </div>
  );
}
