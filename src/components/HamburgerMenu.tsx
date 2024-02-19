import { useState } from "react";
import Dropdown from "./Dropdown";
import { CgCloseR } from "react-icons/cg";

const navbarElements = [
  {
    id: "blog",
    name: "Blog",
    link: "/blog",
  },
  {
    id: "projects",
    name: "Projects",
    link: "/projects",
  },
  {
    id: "resources",
    name: "Resources",
    link: "/resources",
  },
  {
    id: "more",
    name: "More",
    link: "/more",
  },
];

function HamburgerMenu() {

  const [isClicked, setIsClicked] = useState(false);
  const [effect, setEffect] = useState(false);
  const handleClick = () => {
    setIsClicked(!isClicked);
    console.log(isClicked);
  }

  return (
    <nav className="sm:hidden block fixed bottom-8 right-8 z-40">
      <div
        onClick={handleClick}
        className="h-12 w-12 overflow-hidden hover:bg-neutral-950  flex justify-center items-center bg-neutral-800/80 rounded-lg"
      >
        <img
          className={`${
            isClicked
              ? "h-0 w-0 -rotate-180 duration-300"
              : "hover:rotate-90  h-8 w-8"
          } cursor-pointer delay-300 hover:delay-0 transition-all duration-500`}
          src="assets/favicon.ico"
          alt="Logo"
        />
        <CgCloseR
          onClick={() => {
            setEffect(true);
          }}
          onAnimationEnd={() => setEffect(false)}
          className={`${effect && "animate-wiggle"} ${
            isClicked
              ? "h-5 w-5 text-neutral-300 opacity-100 scale-100 translate-x-0"
              : "h-0 w-0 opacity-0 translate-x-1"
          } delay-500 transition-all cursor-pointer`}
        />
        <Dropdown
        className="bottom-14 right-0"
          state={isClicked}
          setState={setIsClicked}
          elements={navbarElements}
        />
      </div>
    </nav>
  );
}

export default HamburgerMenu;