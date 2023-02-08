import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

export default function useScrollIntoView(fragmentId) {
  const ref = useRef();
  const router = useRouter();

  useEffect(() => {
    if (ref.current && router.asPath === `${router.pathname}#${fragmentId}`) {
      ref.current.scrollIntoView();
    }
  }, [ref.current, router.asPath]);

  return ref;
}
