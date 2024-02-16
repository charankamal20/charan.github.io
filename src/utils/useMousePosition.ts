import { useState, useEffect } from "react";

const useMousePosition = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const updateMousePosition = (e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
    // console.log(`x: ${e.clientX}, y: ${e.clientY}`);

  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);
    console.log("Event Listener Added:");

    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return mousePosition;
};

export default useMousePosition;
