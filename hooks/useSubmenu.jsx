import { useState } from "react";

export default function useSubmenu(options) {
  const [isHovered, setIsHovered] = useState();
  const onPointerHandler = (isPointerInside) => setIsHovered(isPointerInside);
  return { onPointerHandler, isHovered, ...options };
}
