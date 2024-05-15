"use client";

import React from "react";
import {
  SignInButton,
  SignOutButton,
  SignUpButton,
  useUser,
} from "@clerk/nextjs";
import Image from "next/image";
import logo from "@/app/asset/BSECURE.svg";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const { user, isLoaded, isSignedIn } = useUser();
  const router = useRouter();

  return (
    <div className="h-[80px] w-full border-b-2 border-white/20">
      <div className="flex justify-between items-center h-full">
        <div className="items-center justify-center cursor-pointer flex w-[15%] h-full">
          <Image
            onClick={() => router.push("/")}
            src={logo}
            alt=""
            height={80}
            width={80}
          />
        </div>

        {isLoaded && (
          <div className="flex w-[25%] gap-16 mr-16">
            <button className="flex items-center justify-center w-[120px] font-medium rounded-md h-full bg-white px-6 py-2 text-black">
              <SignInButton />
            </button>
            {!isSignedIn && (
              <button className="flex items-center justify-center w-[120px] font-medium rounded-md h-full text-black bg-white px-6 py-2">
                <SignUpButton />
              </button>
            )}

            {isSignedIn && (
              <button className="flex items-center justify-center w-[120px] rounded-md h-full text-black bg-white px-6 py-2">
                <SignOutButton />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
