export function getMainMenu() {
  return [
    {
      hash: "#",
      title: "Home",
      pathname: "/",
      hasSubmenu: false,
    },
    {
      hash: "#about",
      title: "About",
      pathname: "/",
      hasSubmenu: true,
    },
    {
      hash: "#what-i-do",
      title: "What I do",
      pathname: "/",
      hasSubmenu: false,
    },
    {
      hash: "#work",
      title: "Work",
      pathname: "/",
      hasSubmenu: true,
    },
    {
      hash: "#frontend",
      title: "Frontend",
      pathname: "/skills",
      hasSubmenu: false,
    },
    {
      hash: "#",
      title: "Blog",
      pathname: "/blog",
      hasSubmenu: false,
    },
    {
      hash: "#contact",
      title: "Contact",
      pathname: "/",
      hasSubmenu: false,
    },
    {
      hash: "#",
      title: "Skills",
      pathname: "/skills",
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
