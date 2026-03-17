import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Sayfa değiştiğinde en üste süzülerek değil, direkt ışınlanarak çıkmasını sağlarız.
    // "smooth" yaparsan sayfa yüklenirken kayma efektini görürsün, "instant" (default) daha profesyoneldir.
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}