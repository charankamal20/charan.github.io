import { useEffect, useState } from "react";

function useScrollPosition() {
  const [mouseCord, setMouseCord] = useState({ scrollX: 0, scrollY: 0 });

  const handleScroll = () => {
    setMouseCord({ scrollX: window.scrollX, scrollY: window.scrollY });
    // setmouseCord({ x: mousePosition.x + e.deltaX, y: mousePosition.y + e.deltaY });
    console.log(window.scrollX, window.scrollY + mouseCord.scrollY);
    // console.log(`x: ${mouseCord.x}, y: ${mouseCord.y}`);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    console.log("Scroll Event Listener Added:");

    return () => window.removeEventListener("wheel", handleScroll);
  }, []);

  return mouseCord;
}

export default useScrollPosition;
