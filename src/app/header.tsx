"use client";

import { ModeToggle } from "@/components/ui/mode-toggle";
import Image from "next/image";
import { HeaderActions } from "./header-actions";

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
        <div className="flex gap-4 items-center">
          <ModeToggle />
          <HeaderActions />
        </div>
      </div>
    </div>
  );
}
