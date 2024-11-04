import React, { useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { PiList } from "react-icons/pi";
import Container from "./Base/Container";
import Group from "./Base/Group";
import { NAV_LINKS } from "@/lib/constants";
import Link from "next/link";

export default function MobileNavlinks() {
  const [open, setOpen] = useState(false);
  return (
    <div className="lg:hidden">
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger>
          <PiList size={30} />
        </DrawerTrigger>
        <DrawerContent>
          <DrawerTitle></DrawerTitle>
          <DrawerDescription></DrawerDescription>
          <Container>
            <div className="py-4">
              <Group vertical className="w-full">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="w-full text-center p-4"
                  >
                    {link.label}
                  </Link>
                ))}
              </Group>
            </div>
          </Container>
        </DrawerContent>
      </Drawer>
    </div>
  );
}
