"use client";
import Group from "@/components/Base/Group";
import RegisterForm from "@/components/forms/registerForm";
import Link from "next/link";

export default function Page() {
  return (
    <main className="h-screen w-full grid place-items-center lg:pt-4 bg-[#E3E3E3]">
      <div className="lg:shadow-xl lg:drop-shadow-lg w-full h-full lg:w-[75%] lg:h-[85%] rounded-lg   border bg-white  overflow-hidden">
        <Group className="h-full">
          {/* IMAGE */}
          <div
            className="bg-primary h-full w-1/2 hidden lg:block"
            suppressHydrationWarning
          ></div>
          {/* FORM */}
          <div
            className=" w-full lg:w-1/2 px-1 lg:px-8 py-8  h-full overflow-hidden hover:overflow-y-scroll"
            style={{ scrollbarGutter: "stable" }}
          >
            <div className=" pt-8 py-4 w-4/5 mx-auto">
              <h4 className=" font-semibold text-2xl pb-2">Create Account</h4>
              <p className="text-slate-400 text-sm">
                Already have an account?{" "}
                <span className="text-primary underline">
                  <Link href={"/login"}>Sign In.</Link>
                </span>
              </p>
            </div>
            <div className="pt-6">
              <RegisterForm />
            </div>
          </div>
        </Group>
      </div>
    </main>
  );
}
