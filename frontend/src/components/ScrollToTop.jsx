import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, hash, key } = useLocation();

  useEffect(() => {
    // Standard scroll to top
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant", // Force instant scroll to avoid jitter
    });

    // Also handle the body element just in case
    document.documentElement.scrollTo(0, 0);
    document.body.scrollTo(0, 0);
  }, [pathname, hash, key]);

  return null;
};

export default ScrollToTop;
