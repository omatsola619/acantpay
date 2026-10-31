import type { Metadata, Viewport } from "next";
import { Inconsolata, Lato, Nunito, Plus_Jakarta_Sans, Space_Grotesk } from "next/font/google";
import MobileShell from "@/components/shell/MobileShell";
import ServiceWorker from "@/components/shell/ServiceWorker";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
  weight: ["300", "400"],
});

const nunito = Nunito({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight: ["500", "600"],
});

// Stand-in for Consolas (used for addresses and bank codes), which isn't freely available
const inconsolata = Inconsolata({
  variable: "--font-inconsolata",
  subsets: ["latin"],
  weight: ["400"],
});

const lato = Lato({
  variable: "--font-lato-sans",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "AcantPay",
  description: "Trade crypto anytime. Send, receive and manage your crypto with AcantPay.",
  applicationName: "AcantPay",
  appleWebApp: {
    capable: true,
    title: "AcantPay",
    statusBarStyle: "black-translucent",
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover",
  themeColor: "#0e011b",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${plusJakartaSans.variable} ${nunito.variable} ${lato.variable} ${inconsolata.variable} antialiased`}>
      <body>
        <MobileShell>{children}</MobileShell>
        <ServiceWorker />
      </body>
    </html>
  );
}
