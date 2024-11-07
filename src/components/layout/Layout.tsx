"use client";

import React from "react";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import Container from "../Base/Container";
import { usePathname } from "next/navigation";
import { LAYOUT_CUSTOM } from "@/lib/constants";
import { cn } from "@/lib/utils";
export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const flags = {
    isCustom: false,
    isCustomMain: false,
    nav: {
      isEnabled: true,
      showLinks: true,
      showContactBadge: true,
      showAvatar: true,
      showBorderBottom: true,
    },
    footer: true,
  };

  const layout = LAYOUT_CUSTOM?.find((i) => i.path === pathname);

  if (layout) {
    flags.isCustom = layout?.isCustom || false;
    flags.isCustomMain = layout?.isCustomMain || false;
    flags.nav.isEnabled = layout?.nav?.isEnabled || true;
    flags.nav.showLinks = layout?.nav?.showLinks || true;
    flags.nav.showContactBadge = layout?.nav?.showContactBadge || true;
    flags.nav.showAvatar = layout?.nav?.showAvatar || true;
    flags.nav.showBorderBottom = layout?.nav?.showBorderBottom || true;
    flags.footer = layout?.footer || true;
  }

  if (flags.isCustom) {
    return <>{children}</>;
  }

  return (
    <>
      {flags?.nav?.isEnabled && (
        <>
          <Navbar
            showLinks={flags.nav?.showLinks}
            showContactBadge={flags.nav?.showContactBadge}
            showAvatar={flags.nav?.showAvatar}
            showBorderBottom={flags.nav?.showBorderBottom}
          />
          <div className="pt-[4.5rem]" />
        </>
      )}

      {flags.isCustomMain ? (
        <div>{children}</div>
      ) : (
        <div
          className={cn(
            flags?.nav?.isEnabled &&
              flags?.footer &&
              "min-h-[calc(100svh-4.5rem-10rem)]"
          )}
        >
          <Container>{children}</Container>
        </div>
      )}
      {flags?.footer && <Footer />}
    </>
  );
}
