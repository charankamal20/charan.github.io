import { useState, useEffect, useMemo } from "react";

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const updateMousePosition = (e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);
    console.log("Event Listener Added:");

    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  const memoizedMousePosition = useMemo(() => mousePosition, [mousePosition]);

  return memoizedMousePosition;

};

export default useMousePosition;
