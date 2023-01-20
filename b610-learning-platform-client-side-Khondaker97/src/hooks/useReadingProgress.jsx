import { useEffect, useState } from "react";

const useReadingProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const onScroll = () => {
    let winScroll =
        document.body.scrollTop || document.documentElement.scrollTop,
      height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    const scrolled = Math.round((winScroll / height) * 100);
    setScrollProgress(scrolled);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
  return scrollProgress;
};

export default useReadingProgress;
