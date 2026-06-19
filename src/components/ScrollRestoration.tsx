import { useEffect, useRef } from "react";
import { useLocation } from "wouter";

const scrollPositions = new Map<string, number>();

export function ScrollRestoration() {
  const [location] = useLocation();
  const isPopState = useRef(false);

  useEffect(() => {
    const onPopState = () => {
      isPopState.current = true;
    };

    window.addEventListener("popstate", onPopState);
    return () => window.removeEventListener("popstate", onPopState);
  }, []);

  useEffect(() => {
    if (isPopState.current) {
      const saved = scrollPositions.get(location);
      if (saved !== undefined) {
        requestAnimationFrame(() => {
          window.scrollTo(0, saved);
        });
      }
      isPopState.current = false;
    } else {
      window.scrollTo(0, 0);
    }

    return () => {
      scrollPositions.set(location, window.scrollY);
    };
  }, [location]);

  return null;
}
