import StatusBar from "./StatusBar";
import HomeIndicator from "./HomeIndicator";

/**
 * Keeps the app in a phone-sized frame. On real phones it fills the screen and
 * respects safe areas; on wider screens it renders a centered device frame with
 * a simulated iOS status bar and home indicator.
 */
export default function MobileShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-dvh items-center justify-center frame:bg-[radial-gradient(ellipse_at_center,rgba(152,16,250,0.18),transparent_60%)] frame:py-6">
      <div className="app-frame bg-app relative flex h-dvh w-full flex-col overflow-hidden frame:h-[min(812px,calc(100dvh-48px))] frame:w-[375px] frame:rounded-[44px] frame:shadow-[0_0_0_1px_rgba(255,255,255,0.08),0_30px_80px_rgba(0,0,0,0.6)]">
        <StatusBar />
        <main className="pt-safe pb-home flex min-h-0 flex-1 flex-col overflow-y-auto overscroll-contain [scrollbar-width:none]">
          {children}
        </main>
        <HomeIndicator />
      </div>
    </div>
  );
}
