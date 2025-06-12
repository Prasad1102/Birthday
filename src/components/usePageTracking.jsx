import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function usePageTracking() {
  const location = useLocation();

  useEffect(() => {
    if (!window.gtag) return;
    window.gtag("config", "G-1K3RD4CJ76", {
      page_path: location.pathname,
    });
  }, [location]);
}

export default usePageTracking;
