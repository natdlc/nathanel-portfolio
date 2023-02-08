export default function (urls) {
  return urls.map((url) => {
    if (
      url.title === "Home" ||
      url.pathname.slice(1) === url.title.toLowerCase()
    ) {
      return {
        ...url,
        hash: "#",
      };
    }
    
    return {
      ...url,
      hash: "#" + url.title.toLowerCase().split(" ").join("-"),
    };
  });
}
