import { MutableRefObject, useEffect, useRef, useState } from "react";

export function useIsVisible() {
  const [isVisible, setIsVisible] = useState(false);

  const ref: MutableRefObject<any> = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
      if (entry.isIntersecting) observer.disconnect();
    });

    observer?.observe(ref.current);
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return { isVisible, ref };
}
