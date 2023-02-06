export function getMainMenu() {
  return [
    {
      id: "home",
      title: "Home",
      path: "/",
      fragmentId: "",
      hasSubmenu: false,
    },
    {
      id: "about",
      title: "About",
      path: "/",
      fragmentId: "about",
      hasSubmenu: true,
    },
    {
      id: "work",
      title: "Work",
      path: "/",
      fragmentId: "work",
      hasSubmenu: true,
    },
    {
      id: "blog",
      title: "Blog",
      path: "/blog",
      fragmentId: "",
      hasSubmenu: false,
    },
    {
      id: "contact",
      title: "Contact",
      path: "/",
      fragmentId: "contact",
      hasSubmenu: false,
    },
    {
      id: "skills",
      title: "Skills",
      path: "/skills",
      fragmentId: "",
      hasSubmenu: false,
    },
  ];
}

export function getAboutSubmenu() {
  return [
    {
      title: "Who I am",
      path: "/",
      fragmentId: "who-i-am",
      hasSubmenu: false,
    },
    {},
  ];
}
