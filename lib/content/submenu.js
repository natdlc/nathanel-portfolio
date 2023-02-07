import addHash from "../utils/addHash";

export default function getSubmenu(urlTitle) {
  const title = urlTitle.toLowerCase();

  const about = addHash([
    {
      title: "Who I am",
      pathname: "/",
      hasSubmenu: false,
    },
    {
      title: "Why I build websites",
      pathname: "/",
      hasSubmenu: false,
    },
    {
      title: "How we'll do it",
      pathname: "/",
      hasSubmenu: false,
    },
    {
      title: "Life outside websites",
      pathname: "/",
      hasSubmenu: false,
    },
  ]);

  const work = addHash([
    {
      title: "Sheena Faye",
      pathname: "/",
      hasSubmenu: false,
    },
    {
      title: "LabLoCo",
      pathname: "/",
      hasSubmenu: false,
    },
  ]);

  const submenus = [
    {
      id: "about",
      items: about,
    },
    {
      id: "work",
      items: work,
    },
  ];

  return submenus.find((submenu) => submenu.id === title);

  return {
    about,
  };
}
