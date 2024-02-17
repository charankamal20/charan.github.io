import { FiArrowUpRight } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import React, { useState } from 'react'
import Dropdown from './Dropdown';

const navbarElements = [
  {
    id: "home",
    image: "assets/favicon.ico",
    link: "/",
  },
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

function Navbar() {
  const [isClicked, setIsClicked] = useState(false);
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <nav
      id="navbar"
      className="cursor-auto bg-neutral-800/85 rounded-xl z-40 hidden sm:flex fixed -translate-x-56 left-1/2 bottom-6 w-[28rem] h-14"
    >
      <ul className="text-neutral-400 text-sm flex gap-x-1 w-full p-2 h-full items-center justify-around">
        {navbarElements.map((element, index) => {
          if(element.id === "home") {
            return (
              <Link
                key={index}
                to={element.link}
                className={`hover:bg-neutral-900 transition-all cursor-pointer w-44 group h-full rounded-lg flex justify-center items-center`}
              >
                <li>
                  <img
                    src={element.image}
                    alt="Page Logo"
                    className="group-hover:rotate-90 delay-300 group-hover:delay-0 transition-all duration-500 h-6 w-6"
                  />
                </li>
              </Link>
            );
          }
          else if(element.id === "more") {
            return (
              <li onClick={() => setIsClicked(true)} key={index} className="relative hover:bg-neutral-900 transition-all group cursor-pointer w-full h-full rounded-lg flex justify-center items-center">
                <Dropdown state={isClicked} setState={setIsClicked} />
                <span className="transition-all group-hover:delay-0 delay-500 group-hover:-translate-x-1 translate-x-1">
                  {element.name}
                </span>{" "}
                <FiArrowUpRight className="transition-all group-hover:delay-0 delay-150 group-hover:opacity-100 group-hover:translate-x-1 -translate-x-1 opacity-0" />
              </li>
            );
          }
          return (
            <Link
              key={index}
              to={element.link}
              className={`hover:bg-neutral-900 transition-all cursor-pointer w-full h-full rounded-lg flex justify-center items-center ${
                pathname === element.link ? "bg-neutral-950" : ""
              }`}
            >
              <li>{element.name}</li>
            </Link>
          );
        })
        }
      </ul>
    </nav>
  );
}

const MemoizedNavbar = React.memo(Navbar);

export default MemoizedNavbar;
