import React from "react";
import Container from "../Base/Container";
import Group from "../Base/Group";
import Logo from "../Logo";
import { LOGO, NAV_LINKS, SITE_DETAILS } from "@/lib/constants";
import Link from "next/link";
import { FaMapMarkedAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import { MdAccessTimeFilled } from "react-icons/md";

export default function Footer() {
  return (
    <div className="bg-primary pt-2 text-white lg:pb-0 pb-24">
      <Container>
        {/* <div className="grid grid-cols-1 lg:grid-cols-4 gap-20 lg:gap-20 py-8 "> */}
        <Group
          align="start"
          className="lg:flex-row flex-col gap-20 lg:gap-10 py-8 w-full "
        >
          {/* LOGO COLUMN */}
          <Group
            vertical
            gap="gap-4"
            className=" lg:col-span-1 text-center lg:text-left w-full"
          >
            <div>
              <Logo className="text-white" isText />
              <p className="pt-4">{LOGO.description}</p>
            </div>
            <Group
              gap="gap-6"
              justify="center"
              align="center"
              className="lg:justify-start w-full"
              wrap
            >
              {/* Social Links */}
              {SITE_DETAILS.socials_Links.map((item) => (
                <Link href={item.src} key={item.label} className="border-b">
                  <Group align="center" gap="gap-1">
                    {item.icon}
                    {item.label}
                  </Group>
                </Link>
              ))}
            </Group>
          </Group>

          {/* GET IN TOUCH COLUMN */}
          <ColumnFooter title="Get In Touch" className="text-sm w-full">
            <Group
              vertical
              gap="gap-6"
              align="center"
              className="lg:items-start"
            >
              {/* Address */}
              <Group align="center" gap="gap-4">
                <FaMapMarkedAlt className="text-xl" />
                {SITE_DETAILS.address.full_address}
              </Group>
              {/* Email Address */}

              <Group align="center" gap="gap-4">
                <MdEmail className="text-xl" />
                {SITE_DETAILS.email_address}
              </Group>
              {/* Contact Number */}
              <Group align="center" gap="gap-4">
                <FaPhone className="text-lg" />
                {SITE_DETAILS.contact_number}
              </Group>
              {/* business hours */}
              <Group align="center" gap="gap-4">
                <MdAccessTimeFilled className="text-xl" />
                {`${SITE_DETAILS.business_hours.start} - ${SITE_DETAILS.business_hours.end}`}
              </Group>
            </Group>
          </ColumnFooter>

          {/* QUICK LINKS */}
          <ColumnFooter title="Quick Links" className="w-full lg:w-1/2">
            <Group
              vertical
              gap="gap-3"
              align="center"
              className="lg:items-start"
            >
              {NAV_LINKS.map((link) => (
                <Link href={link.href} key={link.href}>
                  {link.label}
                </Link>
              ))}
            </Group>
          </ColumnFooter>

          {/* LOCATION IFRAME */}
          <ColumnFooter title="Location" className="w-full">
            <iframe
              width="100%"
              className="w-full h-52 rounded-md"
              src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            ></iframe>
          </ColumnFooter>
        </Group>

        {/* COPY RIGHT */}
        <div className="text-center pb-4  text-sm">
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
      <h5 className="text-xl font-semibold pb-4 text-center lg:text-left">
        {title}
      </h5>
      <div>{children}</div>
    </div>
  );
}
