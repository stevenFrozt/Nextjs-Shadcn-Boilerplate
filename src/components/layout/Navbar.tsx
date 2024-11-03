import React from "react";
import Group from "../Base/Group";
import Container from "../Base/Container";
import ContactBadge from "../ContactBadge";
import { NAV_LINKS } from "@/lib/constants";
import Link from "next/link";
import Logo from "../Logo";
import NavAvatar from "../NavAvatar";

export default function Navbar() {
  return (
    <nav className="bg-white h-[4.5rem] w-full flex items-center border-b-[1px] border fixed top-0 z-50">
      <Container>
        <Group justify="between" align="center">
          <Logo isText />
          <Group gap="gap-8" align="center">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
            <ContactBadge />
            <NavAvatar />
          </Group>
        </Group>
      </Container>
    </nav>
  );
}
