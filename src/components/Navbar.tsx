import { FiArrowUpRight } from "react-icons/fi";

function Navbar() {
  return (
    <nav
      id="navbar"
      className="cursor-auto bg-neutral-800/85 rounded-xl z-40 hidden sm:flex fixed -translate-x-56 left-1/2 bottom-6 w-[28rem] h-14"
    >
      <ul className="text-neutral-400 text-sm flex w-full p-2 h-full items-center justify-around">
        <li className="hover:bg-neutral-900 transition-all cursor-pointer w-44 group h-full rounded-lg flex justify-center items-center">
          <img src="assets/favicon.ico" alt="Page Logo" className="group-hover:rotate-90 delay-300 group-hover:delay-0 transition-all duration-500 h-6 w-6" />
        </li>
        <li className="hover:bg-neutral-900 transition-all cursor-pointer w-full h-full rounded-lg flex justify-center items-center">
          Blog
        </li>
        <li className="hover:bg-neutral-900 transition-all cursor-pointer w-full h-full rounded-lg flex justify-center items-center">
          Projects
        </li>
        <li className="hover:bg-neutral-900 transition-all cursor-pointer w-full h-full rounded-lg flex justify-center items-center">
          Resources
        </li>
        <li className="hover:bg-neutral-900 transition-all group cursor-pointer w-full h-full rounded-lg flex justify-center items-center">
          <span className="transition-all group-hover:delay-0 delay-500 group-hover:-translate-x-1 translate-x-1">
            More
          </span>{" "}
          <FiArrowUpRight className="transition-all group-hover:delay-0 delay-150 group-hover:opacity-100 group-hover:translate-x-1 -translate-x-1 opacity-0" />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
