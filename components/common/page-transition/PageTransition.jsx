import { useState } from "react";

export default function PageTransition() {
  const [isEntering, setIsEntering] = useState();

  return <div className="page_transition"></div>;
}
