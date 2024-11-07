"use client";
import Group from "@/components/Base/Group";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/bundle";
import { signIn } from "next-auth/react";
import Link from "next/link";
import Logo from "@/components/Logo";
import LoginForm from "@/components/forms/loginForm";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");

  return (
    <main className="min-h-screen w-full grid place-items-center lg:pt-4 bg-[#E3E3E3]">
      <div className="lg:shadow-xl lg:drop-shadow-lg w-full h-full lg:w-[75%] lg:h-[85%] rounded-lg  border bg-white  overflow-hidden">
        <Group className="h-full">
          {/* FORM */}
          <div className="h-full w-full lg:w-1/2 px-1 lg:px-8 py-8 grid place-item">
            <div>
              <Logo isText className="text-center text-4xl" />
              <div className=" pt-8 py-4 w-4/5 mx-auto">
                <h4 className=" font-semibold text-2xl pb-2">Sign In</h4>
                <p className="text-slate-400 text-sm">
                  Don't have an account?{" "}
                  <span className="text-primary underline">
                    <Link href={"/register"}>Create Now.</Link>
                  </span>
                </p>
              </div>
              <LoginForm />

              <div className="mx-auto w-4/5 grid place-items-center">
                <Group align="center" className="w-full relative my-4 ">
                  <Separator className="w-full my-4" />
                  <span className="px-4 bg-white absolute text-slate-300 text-sm left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
                    OR
                  </span>
                </Group>
                <Button
                  className="w-4/5 py-5  bg-white text-black hover:text-primary border hover:bg-white text-sm  "
                  onClick={() =>
                    signIn("google", { callbackUrl: callbackUrl || "" })
                  }
                >
                  <div>
                    <FcGoogle className=" text-5xl" />
                  </div>
                  Sign in with Google
                </Button>
              </div>
            </div>
          </div>
          {/* IMAGE */}
          <div
            className="bg-white h-full w-1/2 hidden lg:block"
            suppressHydrationWarning
          >
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              spaceBetween={0}
              slidesPerView={1}
              loop
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              className="w-full h-full"
              style={
                {
                  "--swiper-theme-color": "#3ea53c",
                  "--swiper-pagination-bullet-inactive-color": "#999999",
                } as React.CSSProperties
              }
            >
              <SwiperSlide>
                <div className="h-full relative">
                  <Image
                    src={
                      "https://images.pexels.com/photos/2405039/pexels-photo-2405039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    }
                    alt=""
                    width={1260}
                    height={750}
                    priority
                    className="absolute object-cover w-full h-full"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="h-full relative">
                  <Image
                    src={
                      "https://images.pexels.com/photos/2405039/pexels-photo-2405039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    }
                    alt=""
                    width={1260}
                    height={750}
                    priority
                    className="absolute object-cover w-full h-full"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </Group>
      </div>
    </main>
  );
}
