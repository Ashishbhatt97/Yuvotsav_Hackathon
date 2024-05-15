"use client";

import { useRouter } from "next/navigation";
import React from "react";

export function GridHome() {
  const router = useRouter();
  return (
    <div className="h-[80vh] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center flex-col">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center py-16 dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="text-2xl p-16 sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 text-center">
        Empowering Health, One Click at a Time: Your Trusted Pharmacy Online.
      </p>

      <div>
        <div
          className="flex items-center justify-center w-[180px] font-medium cursor-pointer rounded-md h-full bg-white px-6 py-2 text-black"
          onClick={() => router.push("/admin")}
        >
          ADMIN PANEL
        </div>
      </div>
    </div>
  );
}
