export type MenuDropdown = {
  group_label: string;
  items: MenuDropdownItems[];
};

export type MenuDropdownItems = {
  href?: string;
  label: string;
  onclick?: () => void;
  icon?: React.ReactNode;
};

export type LAYOUT_CUSTOM_TYPE = {
  path: string;
  isCustom?: boolean;
  nav?: {
    isEnabled?: boolean;
    showLinks?: boolean;
    showContactBadge?: boolean;
    showAvatar?: boolean;
    showBorderBottom?: boolean;
  };
  footer?: boolean;
};
