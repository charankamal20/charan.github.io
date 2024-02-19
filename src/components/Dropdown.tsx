import { Link } from "react-router-dom";
import { cn } from "../utils/cn";

interface Props {
    state: boolean;
    setState: (state: boolean) => void;
    elements?: {
        id: string;
        name: string;
        link: string;
    }[];
    className?: string;
}

const items = [
  {
    name: "Github",
    link: "https://github.com/charankamal20",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/charan-singh-1a1b3b1b4/",
  },
  {
    name: "Mail",
    link: "mailto:charankamal20@gmail.com",
  }
];

function Dropdown({
  state = true,
  setState,
  elements,
  className = "bottom-14 left-0",
}: Props) {
  return (
    <aside
      onMouseLeave={() => setState(false)}
      className={cn(
        `${
          state ? "block" : "hidden"
        } drop-shadow-md border text-neutral-300 border-neutral-700 backdrop-blur-sm w-32 absolute bg-neutral-800/90 rounded-lg`,
        className
      )}
    >
      <ul className="">
        {elements && (
          <Link rel="noopener noreferrer" to='/' >
            <li className="rounded-md hover:bg-neutral-900 transition-all cursor-pointer h-8 flex justify-start p-2 m-1 items-center">
              Home
            </li>
          </Link>
        )}
        {elements?.map(
          (item, index) =>
            item.id !== "more" && (
              <Link rel="noopener noreferrer" to={item.link} key={index}>
                <li className="rounded-md hover:bg-neutral-900 transition-all cursor-pointer h-8 flex justify-start p-2 m-1 items-center">
                  {item.name}
                </li>
              </Link>
            )
        )}
        {items.map((item, index) => (
          <a
            key={index}
            target="_blank"
            rel="noopener noreferrer"
            href={item.link}
          >
            <li className="rounded-md hover:bg-neutral-900 transition-all cursor-pointer h-8 flex justify-start p-2 m-1 items-center">
              {item.name}
            </li>
          </a>
        ))}
      </ul>
    </aside>
  );
}

export default Dropdown;