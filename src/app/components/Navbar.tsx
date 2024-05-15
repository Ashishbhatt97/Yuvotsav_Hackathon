"use client";

import React from "react";
import {
  SignInButton,
  SignOutButton,
  SignUpButton,
  useUser,
} from "@clerk/nextjs";

const Navbar = () => {
  const { user, isLoaded, isSignedIn } = useUser();

  return (
    <div className="h-[80px] w-full">
      <div className="flex justify-between items-center h-full">
        <div className="items-center justify-center flex w-[15%] h-full">
          Logo
        </div>

        <div className="flex w-[25%] gap-16 mr-16">
          <button className="flex items-center justify-center w-[120px] rounded-md h-full bg-white px-6 py-2 text-black">
            <SignInButton />
          </button>
          {!isSignedIn && (
            <button className="flex items-center justify-center w-[120px] rounded-md h-full text-black bg-white px-6 py-2">
              <SignUpButton />
            </button>
          )}

          {isSignedIn && (
            <button className="flex items-center justify-center w-[120px] rounded-md h-full text-black bg-white px-6 py-2">
              <SignOutButton />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
