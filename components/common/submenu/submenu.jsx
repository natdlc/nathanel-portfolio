import getSubmenu from "@/lib/content/submenu";
import SubmenuChildren from "./submenu-children";

export default function Submenu({ urlTitle }) {
  const submenu = getSubmenu(urlTitle);

  return <SubmenuChildren items={submenu.items} />;
}
