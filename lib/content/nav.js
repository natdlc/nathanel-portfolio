import addHash from "../utils/addHash";

export function getMainMenu() {
  return addHash([
    {
      title: "Home",
      pathname: "/",
      hasSubmenu: false,
    },
    {
      title: "About",
      pathname: "/",
      hasSubmenu: true,
    },
    {
      title: "Work",
      pathname: "/",
      hasSubmenu: true,
    },
    // {
    //   title: "Blog",
    //   pathname: "/blog",
    //   hasSubmenu: false,
    // },
    {
      title: "Contact",
      pathname: "/",
      hasSubmenu: false,
    },
  ]);
}
