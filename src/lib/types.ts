export type MenuDropdown = {
  group_label: string;
  items: MenuDropdownItems[];
};

export type MenuDropdownItems = {
  link?: string;
  label: string;
  onclick?: () => void;
  icon?: React.ReactNode;
};
