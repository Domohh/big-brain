"use client";

import { SignInButton, UserButton } from "@clerk/nextjs";
import {
  Authenticated,
  Unauthenticated,
  useMutation,
  useQuery,
} from "convex/react";
import { api } from "../../convex/_generated/api";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode-toggle";
import Image from "next/image";

export function Header() {
  return (
    <div className="bg-slate-900 py-4 ">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4 ">
          <Image
            className="rounded "
            src="/logo.png"
            width={40}
            height={40}
            alt="an image logo"
          />
          BigBrain
        </div>
        <div>
          <Unauthenticated>
            <SignInButton />
          </Unauthenticated>
          <Authenticated>
            <div className="flex gap-4">
              <ModeToggle />
              <UserButton />
            </div>
          </Authenticated>
        </div>
      </div>
    </div>
  );
}
