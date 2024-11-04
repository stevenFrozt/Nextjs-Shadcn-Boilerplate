import React from "react";
import Container from "../Base/Container";
import Group from "../Base/Group";
import Logo from "../Logo";
import { LOGO, NAV_LINKS, SITE_DETAILS } from "@/lib/constants";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="bg-primary text-white">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-20 py-8 ">
          {/* LOGO COLUMN */}
          <Group>
            <div>
              <Logo className="text-white" isText />
              <p className="pt-4">{LOGO.description}</p>
            </div>
            <Group>{/* Social Links */}</Group>
          </Group>

          {/* GET IN TOUCH COLUMN */}
          <ColumnFooter title="Get In Touch">
            <Group
              vertical
              gap="gap-3"
              align="center"
              className="md:items-start"
            >
              {/* Address */}
              <p>{SITE_DETAILS.address.full_address}</p>
              {/* Email Address */}
              <p>{SITE_DETAILS.email_address}</p>
              {/* Contact Number */}
              <p>{SITE_DETAILS.contact_number}</p>
              {/* business hours */}
              <p>{`${SITE_DETAILS.business_hours.start} - ${SITE_DETAILS.business_hours.end}`}</p>
            </Group>
          </ColumnFooter>

          {/* QUICK LINKS */}
          <ColumnFooter title="Quick Links">
            <Group
              vertical
              gap="gap-3"
              align="center"
              className="md:items-start"
            >
              {NAV_LINKS.map((link) => (
                <Link href={link.href} key={link.href}>
                  {link.label}
                </Link>
              ))}
            </Group>
          </ColumnFooter>

          {/* LOCATION IFRAME */}
          <ColumnFooter title="Location"></ColumnFooter>
        </div>
        {/* COPY RIGHT */}
        <div></div>
      </Container>
    </div>
  );
}

type ColumnFooterProps = {
  children?: React.ReactNode;
  title?: string;
};
function ColumnFooter({ children, title }: ColumnFooterProps) {
  return (
    <div>
      <h5 className="text-xl font-medium pb-4">{title}</h5>
      <div>{children}</div>
    </div>
  );
}
