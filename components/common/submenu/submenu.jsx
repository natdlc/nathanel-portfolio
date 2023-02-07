import getSubmenu from "@/lib/content/submenu";
import SubmenuChildren from "./submenu-children";

export default function Submenu({ urlTitle, isMobile }) {
  const submenu = getSubmenu(urlTitle);

  return <SubmenuChildren isMobile items={submenu.items} />;
}
