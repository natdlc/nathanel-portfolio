import { useState } from "react";

export default function useSubmenu(options) {
  const [isHovered, setIsHovered] = useState();
  const [isCollapsed, setIsCollapsed] = useState();

  const onPointerHandler = (isPointerInside) => setIsHovered(isPointerInside);

  const onCollapseHandler = (didUserCollapse) =>
    setIsCollapsed(didUserCollapse);

  return {
    onPointerHandler,
    isHovered,
    onCollapseHandler,
    isCollapsed,
    ...options,
  };
}
