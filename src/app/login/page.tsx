"use client";
import Container from "@/components/Base/Container";
import Group from "@/components/Base/Group";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useFormik } from "formik";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/bundle";
// import "swiper/css/pagination";
import { signIn } from "next-auth/react";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Logo from "@/components/Logo";
import { Checkbox } from "@/components/ui/checkbox";

export default function page() {
  return (
    <main className="min-h-screen w-full grid place-items-center lg:pt-4 bg-[#E3E3E3]">
      <div className="lg:shadow-xl lg:drop-shadow-lg w-full h-full lg:w-[80%] lg:h-[85%] rounded-lg  border bg-white  overflow-hidden">
        <Group className="h-full">
          {/* FORM */}
          <div className="h-full w-full lg:w-1/2 px-1 lg:px-8 py-12 grid place-item">
            <div>
              <Logo isText className="text-center text-4xl" />
              <div className=" pt-8 pb-4 w-4/5 mx-auto">
                <h4 className=" font-semibold text-2xl pb-2">Sign In</h4>
                <p className="text-slate-400 text-sm">
                  Don't have an account?{" "}
                  <span className="text-primary underline">
                    <Link href={"/"}>Create now</Link>
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
                  onClick={() => signIn("google")}
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

function LoginForm() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      <div className="w-4/5   mx-auto">
        <form onSubmit={formik.handleSubmit} className="w-full ">
          <Group
            vertical
            className="w-full"
            align="center"
            justify="center"
            gap="gap-4"
          >
            <TextField
              label="Email"
              name="email"
              placeholder="Enter Email"
              onChange={formik.handleChange}
              value={formik.values.email}
              className="w-full"
            />
            <TextField
              label="Password"
              name="password"
              placeholder="Enter Password"
              onChange={formik.handleChange}
              value={formik.values.password}
              className="w-full"
            />
            <Group
              className="text-sm w-full py-2"
              align="center"
              justify="between"
            >
              <Group align="center" gap="gap-2">
                <Checkbox id="remember" className="h-4 w-4" />
                <label htmlFor="remember" className="py-1 cursor-pointer">
                  Remember me
                </label>
              </Group>
              <Link href={""}>Forgot password</Link>
            </Group>
            <Button className="w-full py-6 mt-4">Sign In</Button>
          </Group>
        </form>
      </div>
    </>
  );
}

type props = {
  className?: string;
  onChange: any;
  value: any;
  name: string;
  label?: string;
  placeholder?: string;
  helper?: string;
  type?: "text" | "password" | "number" | "email";
};
function TextField({
  className,
  onChange,
  value,
  name,
  label,
  placeholder,
  type,
}: props) {
  return (
    <div className={cn("w-full", className)}>
      <label htmlFor={name} className="text-slate-500 text-sm ">
        {label}
      </label>
      <Input
        id={name}
        name={name}
        type={type}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        className="mt-1 h-11"
      />
      {/* <p className="py-2 text-sm text-red-500">Validation Error</p> */}
    </div>
  );
}
