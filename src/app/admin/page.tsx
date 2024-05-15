import React from "react";
import Image from "next/image";
import user from "@/app/asset/user.png";
import { BentoGridSecondDemo } from "../components/AdminPanel";

const page = () => {
  return (
    <div className="w-full h-[89vh] flex">
      <div className="w-full h-full flex">
        <div className="flex w-[25%] h-full flex-col gap-3 items-center justify-start pt-8">
          <div className="w-[350px] h-[350px] rounded-lg flex items-center justify-center">
            <div className="flex flex-col gap-3">
              <div className="w-[200px] h-[200px] border rounded-full flex items-center justify-center ">
                <Image src={user} alt="user" height={80} width={80} />
              </div>
              <p className="text-center mt-4">Admin</p>
            </div>
          </div>
          <div className="w-[350px] h-[60px] rounded-lg bg-slate-800/30 flex items-center justify-center">
            Home
          </div>

          <div className="w-[350px] h-[60px] rounded-lg bg-slate-800/30 flex items-center justify-center">
            Patient
          </div>
          <div className="w-[350px] h-[60px] rounded-lg bg-slate-800/30 flex items-center justify-center">
            Appointment
          </div>
        </div>

        <div className="w-full h-full">
          <div className="p-8">
            <div className="flex gap-3 flex-col ml-32">
              <div className="w-[350px] h-[180px] border rounded-3xl flex flex-col  ">
                <div className="h-1/2 text-3xl flex mt-8 pl-6">
                  APPOINTMENTS
                </div>
                <div className="h-1/2 text-xl pl-6">3593</div>
              </div>

              <div className="w-[350px] h-[180px] border rounded-3xl flex flex-col  ">
                <div className="h-1/2 text-3xl flex mt-8 pl-6">
                  NEW PATIENTS
                </div>
                <div className="h-1/2 text-xl pl-6">93</div>
              </div>
              <div className="w-[350px] h-[180px] border rounded-3xl flex flex-col  ">
                <div className="h-1/2 text-3xl flex mt-8 pl-6">PHARMACIST</div>
                <div className="h-1/2 text-xl pl-6">93</div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[80vh] w-[60%] mr-32 mt-8 justify-center flex flex-col  gap-14">
          <div className="flex flex-col ">
            <div className="bg-blue-400/20 flex justify-start pl-5 text-3xl items-center w-full h-[100px]">
              <p>Monthly Earnings</p>
            </div>
            <div className="bg-blue-400/20 text-2xl  flex pl-5 justify-start items-center w-full h-[100px]">
              <p>₹5500</p>
            </div>
          </div>

          <div className="flex flex-col">
            <div className="bg-blue-400/20 flex justify-start pl-5 text-3xl items-center w-full h-[100px]">
              <p>Yearly Earnings</p>
            </div>
            <div className="bg-blue-400/20 text-2xl  flex pl-5 justify-start items-center w-full h-[100px]">
              <p>₹42500</p>
            </div>
          </div>
        </div>
      </div>

      {/* <BentoGridSecondDemo /> */}
    </div>
  );
};

export default page;
