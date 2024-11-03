export const CONTACT_NUMBER = "+63 930 178 2255";

export const NAV_LINKS = [
  { link: "/", label: "Home" },
  { link: "/cars", label: "Cars" },
  { link: "/about", label: "About Us" },
  { link: "/contact", label: "Contact Us" },
];

export const AVATAR_DROPDOWN_OPTIONS = [
  {
    group_label: "Account",
    items: [
      { link: "", label: "Profile Settings", onclick: () => {} },
      { link: "", label: "My Bookings", onclick: () => {} },
      { link: "", label: "Log Out", onclick: () => {} },
    ],
  },
];

export const LOGO = {
  src: "",
  label: "LOGO",
  alt: "Logo",
  description:
    "Discover the convenience and flexibility of traveling with us, Palawan Best Car Rental, your go-to car rental partner.",
};

export const SITE_DETAILS = {
  address: {
    present: "",
    street: "",
    city: "",
    state: "",
    zip_code: "",
    country: "",
    full_address: "",
    map_link: "",
    latitude: "",
    longitude: "",
  },
  email_address: "",
  contact_number: CONTACT_NUMBER,
  socials_Links: [
    { src: "", icon: "", label: "Facebook" },
    { src: "", icon: "", label: "Instagram" },
    { src: "", icon: "", label: "Twitter" },
  ],
  year: "2024",
  business_hours: {
    start: "8:00 AM",
    end: "10:00 PM",
  },
};
