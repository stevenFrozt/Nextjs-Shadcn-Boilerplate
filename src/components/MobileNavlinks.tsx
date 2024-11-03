import React from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { PiList } from "react-icons/pi";
import { Button } from "./ui/button";
import Container from "./Base/Container";
import Group from "./Base/Group";
import { NAV_LINKS } from "@/lib/constants";
import Link from "next/link";

export default function MobileNavlinks() {
  return (
    <div className="lg:hidden">
      <Drawer>
        <DrawerTrigger>
          <PiList size={30} />
        </DrawerTrigger>
        <DrawerContent>
          <Container>
            <div className="py-4">
              <Group vertical>
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
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
