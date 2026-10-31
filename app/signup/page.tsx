"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import AuthHeader from "@/components/auth/AuthHeader";
import SocialAuth from "@/components/auth/SocialAuth";
import Button from "@/components/ui/Button";
import TextField from "@/components/ui/TextField";

export default function SignUpScreen() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  return (
    <div className="flex min-h-full flex-col px-4 pb-8">
      <AuthHeader title="Create Your Account" />

      <form onSubmit={(e) => {
          e.preventDefault();
          router.push("/home");
        }} className="mt-6 flex flex-col gap-8">
        <TextField
          label="Email"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="Enter your email address"
          value={email}
          onChange={setEmail}
        />
        <div className="flex flex-col gap-6">
          <Button type="submit">Create new account</Button>
          <SocialAuth />
        </div>
      </form>
    </div>
  );
}
