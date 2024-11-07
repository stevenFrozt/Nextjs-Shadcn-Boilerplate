import React from "react";
import { FaSpinner } from "react-icons/fa6";

export default function Loading() {
  return (
    <div className="bg-white grid place-items-center w-screen h-screen  fixed left-0 top-0 ">
      <FaSpinner className="text-3xl animate-spin text-primary" />
    </div>
  );
}
