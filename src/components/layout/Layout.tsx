import React from "react";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import Container from "../Base/Container";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="pt-[4.5rem]">
      <Navbar />
      <div className="min-h-[calc(100svh-4.5rem-10rem)]">
        <Container>{children}</Container>
      </div>
      <Footer />
    </div>
  );
}
