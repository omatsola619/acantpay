"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import AuthHeader from "@/components/auth/AuthHeader";
import SocialAuth from "@/components/auth/SocialAuth";
import Button from "@/components/ui/Button";
import TextField from "@/components/ui/TextField";

export default function LoginScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [passcode, setPasscode] = useState("");

  return (
    <div className="flex min-h-full flex-col px-4 pb-[69px]">
      <AuthHeader title="Welcome back" />

      <form onSubmit={(e) => {
          e.preventDefault();
          router.push("/home");
        }} className="mt-6 flex flex-col gap-10">
        <div className="flex flex-col gap-4">
          <TextField
            label="Email"
            type="email"
            inputMode="email"
            autoComplete="email"
            placeholder="Enter your email address"
            value={email}
            onChange={setEmail}
          />
          <TextField
            label="Passcode"
            type="password"
            inputMode="numeric"
            autoComplete="current-password"
            placeholder="Enter passcode"
            value={passcode}
            onChange={setPasscode}
          />
        </div>
        <div className="flex flex-col gap-6">
          <Button type="submit">Login</Button>
          <SocialAuth />
        </div>
      </form>

      <p className="mt-auto pt-10 text-center font-body text-[14px] leading-[22px] font-light">
        <span className="text-text-subtle">New here? </span>
        <Link href="/signup" className="text-primary-from active:opacity-60">
          Create New Account
        </Link>
      </p>
    </div>
  );
}
