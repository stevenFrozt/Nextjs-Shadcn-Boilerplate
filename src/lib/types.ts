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
