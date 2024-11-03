import { LOGO } from "@/lib/constants";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type props = {
  isText?: boolean;
  bothImageAndLabel?: boolean;
  className?: string;
};
export default function Logo({ isText, bothImageAndLabel, className }: props) {
  return (
    <>
      <div className={clsx("text-3xl text-primary font-medium", className)}>
        <Link href={LOGO.href}>
          {isText ? (
            <h1>{LOGO.text}</h1>
          ) : (
            <Image src={LOGO.image_src} width={1} height={1} alt={LOGO.alt} />
          )}
        </Link>
      </div>
    </>
  );
}
