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
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-20 lg:gap-8 py-8 ">
          {/* LOGO COLUMN */}
          <Group className=" lg:col-span-2 text-center lg:text-left">
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
          <ColumnFooter title="Location" className="lg:col-span-2">
            <iframe
              width="100%"
              className="w-full h-64 rounded-md"
              // frameBorder="0"
              // scrolling="no"
              // marginHeight="0"
              // marginWidth="0"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </ColumnFooter>
        </div>
        {/* COPY RIGHT */}
        <div className="text-center py-4 mt-2 text-sm">
          {SITE_DETAILS.copyright}
        </div>
      </Container>
    </div>
  );
}

type ColumnFooterProps = {
  children?: React.ReactNode;
  title?: string;
  className?: string;
};
function ColumnFooter({ children, title, className }: ColumnFooterProps) {
  return (
    <div className={className}>
      <h5 className="text-xl font-medium pb-4 text-center lg:text-left">
        {title}
      </h5>
      <div>{children}</div>
    </div>
  );
}
