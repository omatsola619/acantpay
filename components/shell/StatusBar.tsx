/* eslint-disable @next/next/no-img-element */

/** Simulated iOS status bar, only shown inside the desktop device frame. */
export default function StatusBar() {
  return (
    <div className="hidden h-[54px] shrink-0 items-center pt-[5px] text-[#fef9f9] frame:flex">
      <div className="flex w-[35.75%] justify-center">
        <span className="font-system text-[17px] leading-[22px] font-semibold">9:41</span>
      </div>
      <div className="ml-auto flex items-center pr-[28.7px]">
        <img src="/icons/status/cellular.svg" alt="" width={19.2} height={12.2264} />
        <img src="/icons/status/wifi.svg" alt="" width={17.1417} height={12.3283} className="ml-[7.5px]" />
        <div className="ml-[7.4px] flex items-center">
          <div className="relative h-[13px] w-[25px]">
            <div className="absolute inset-0 rounded-[4.3px] border border-[#fef9f9] opacity-35" />
            <div className="absolute top-[2px] left-[2px] h-[9px] w-[21px] rounded-[2.5px] bg-[#fef9f9]" />
          </div>
          <img src="/icons/status/cap.svg" alt="" width={1.32804} height={4.07547} className="ml-px" />
        </div>
      </div>
    </div>
  );
}
