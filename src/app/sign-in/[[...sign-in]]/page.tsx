import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <>
      <div className="h-[100vh] flex bg-[#f2f2f2]  items-center justify-center ">
        <SignIn path="/sign-in" />
      </div>
    </>
  );
}
