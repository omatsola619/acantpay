import Button from "@/components/ui/Button";
import CoinCluster from "@/components/welcome/CoinCluster";

export default function WelcomeScreen() {
  return (
    <div className="flex min-h-full flex-col items-center gap-[27px] px-[22px] pt-[21px] pb-8">
      <div className="flex flex-col items-center gap-5">
        <h1 className="font-display text-[28px] leading-9 font-bold text-white">AcantPay</h1>
        <div className="flex h-[42px] items-center gap-2 rounded-full border border-white/10 bg-white/5 pr-[22px] pl-5">
          <span className="size-2 rounded-full bg-accent" />
          <span className="text-[14px] leading-5 text-text-muted">Trade crypto anytime</span>
        </div>
      </div>

      <h2 className="text-center text-[42px] leading-[48.3px] font-bold tracking-[-1.05px] text-white">
        Power Up Your
        <br />
        Crypto Journey
      </h2>

      <div className="flex min-h-[300px] flex-1 items-center justify-center">
        <div className="relative shrink-0">
          {/* Ambient glows behind the coins */}
          <div className="absolute top-[75px] left-0 h-[150px] w-[290.625px] rounded-full bg-[#9810fa] opacity-50 blur-[112.5px]" />
          <div className="absolute top-[60px] left-[25.31px] h-[180px] w-[240px] rounded-full bg-[#ad46ff] opacity-40 blur-[75px]" />
          <div className="absolute top-[90px] left-[55.31px] h-[120px] w-[180px] rounded-full bg-[#e12afb] opacity-30 blur-[56.25px]" />
          <CoinCluster />
        </div>
      </div>

      <div className="flex w-full flex-col gap-4">
        <Button href="/signup">Create new account</Button>
        <Button variant="outline" href="/login">
          Log in to existing account
        </Button>
      </div>
    </div>
  );
}
