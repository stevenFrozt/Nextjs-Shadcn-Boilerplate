import clsx from "clsx";
import Group from "./Base/Group";
import { CONTACT_NUMBER } from "@/lib/constants";

type props = {
  className?: string;
  IconClassName?: string;
};
export default function ContactBadge({ className, IconClassName }: props) {
  return (
    <div
      className={clsx(
        "bg-primary py-3 px-4 text-white rounded-md text-sm",
        className
      )}
    >
      <Group gap={"gap-4"}>
        {/* <IoIosCall className={clsx("text-xl", IconClassName)} /> */}
        {CONTACT_NUMBER}
      </Group>
    </div>
  );
}
