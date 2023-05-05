import { isBrowser } from "framer-motion";
import { useEffect, useState } from "react";

export const useThemeDetector = () => {
  const getCurrentTheme = () => isBrowser && window.matchMedia("(prefers-color-scheme: dark)").matches;



  const [isDarkTheme, setIsDarkTheme] = useState(getCurrentTheme());  
  const mqListener = ((e:any) => {
    setIsDarkTheme(e.matches);
  });
  
  useEffect(() => {
    if(isBrowser){

      const darkThemeMq = window.matchMedia("(prefers-color-scheme: dark)");
      darkThemeMq.addEventListener
      ('change',mqListener);
      return () => darkThemeMq.removeEventListener('change',mqListener);
    }
  }, []);
  return isDarkTheme;
}