/** Simulated iOS home indicator, only shown inside the desktop device frame. */
export default function HomeIndicator() {
  return (
    <>
      <div className="pb-safe shrink-0 frame:hidden" />
      <div className="pointer-events-none hidden h-[21px] shrink-0 items-end justify-center pb-[8px] frame:flex">
        <div className="h-[5px] w-[139px] rounded-full bg-white" />
      </div>
    </>
  );
}
