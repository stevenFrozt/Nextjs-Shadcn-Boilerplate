import { Avatar } from "@/components/ui/avatar";
import { config } from "@/middleware";
import { signOut } from "next-auth/react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa6";
import { PiCarFill, PiHouseFill, PiUserFill } from "react-icons/pi";

// Add routes in the middleware.ts
export const PROTECTED_ROUTES = [...config.matcher];

export const LAYOUT_CUSTOM = [
  {
    path: "/login",
    isCustom: true,
    isCustomMain: false,
    nav: {
      isEnabled: false,
      showLinks: false,
      showContactBadge: false,
      showAvatar: false,
      showBorderBottom: false,
    },
    footer: false,
  },
  {
    path: "/register",
    isCustom: true,
  },
];

export const CONTACT_NUMBER = "+63 930 178 2255";

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/cars", label: "Cars" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
];

export const AVATAR_DROPDOWN_OPTIONS = [
  {
    group_label: "Account",
    items: [
      { href: "", label: "Profile Settings", onClick: () => {} },
      { href: "", label: "My Bookings", onClick: () => {} },
      {
        href: "",
        label: "Log Out",
        onClick: async () => {
          await signOut({ callbackUrl: "/login" });
        },
      },
    ],
  },
];

export const MOBILE_NAV_LINKS = {
  isEnabled: true,
  links: [
    { href: "/cars", label: "Cars", icon: <PiCarFill />, onClick: () => {} },
    { href: "/", label: "Home", icon: <PiHouseFill />, onClick: () => {} },
    {
      href: "/profile",
      label: "Profile",
      icon: <PiUserFill />,
      onClick: () => {},
    },
  ],
};

export const LOGO = {
  image_src: "",
  href: "/",
  text: "Logo",
  alt: "Logo",
  description:
    "Discover the convenience and flexibility of traveling with us, Palawan Best Car Rental, your go-to car rental partner.",
};

export const SITE_DETAILS = {
  address: {
    present: "",
    street: "",
    city: "Puerto Princesa",
    state: "",
    zip_code: "5300",
    country: "Philippines",
    full_address: "17 H. Mendoza Puerto Princesa City",
    map_link: "",
    latitude: "",
    longitude: "",
  },
  email_address: "sample@gmail.com",
  contact_number: CONTACT_NUMBER,
  socials_Links: [
    { src: "", icon: <FaFacebook />, label: "Facebook" },
    { src: "", icon: <FaInstagram />, label: "Instagram" },
    { src: "", icon: <FaTwitter />, label: "Twitter" },
  ],
  year: "2024",
  business_hours: {
    start: "8:00 AM",
    end: "10:00 PM",
  },
  copyright: `Copyright © 2024 ${LOGO.text}.`,
};
