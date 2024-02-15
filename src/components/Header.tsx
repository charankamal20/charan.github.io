import React from 'react'
import { cn } from '../utils/cn';

interface Props {
  className?: string;
  image: string;
  heading: string;
  subHeading: string;
  mouseState?: (arg0: boolean) => void;
}

function Header({heading, subHeading, mouseState, image, className}: Props) {
  return (
    <header onMouseEnter={() => mouseState(true)} onMouseLeave={() => mouseState(false)} className="w-full antialiased mt-12 bg-transparent p-4 space-x-5 flex justify-start items-center">
      <div className="group cursor-context-menu drop-shadow-lg h-20 w-20 rounded-full overflow-hidden">
        <img
          className={cn("group-hover:scale-[1.20] transition", className)}
          src={image}
          alt="Profile Image"
        />
      </div>
      <div className="">
        <h1 className="text-2xl font-bold">{heading}</h1>
        <p className="text-md font-semibold">
          {subHeading}<span className="animation-delay-0 animate-pulse">.</span>
          <span className="animation-delay-75 animate-pulse">.</span>
          <span className="animation-delay-150 animate-pulse">.</span>
        </p>
      </div>
    </header>
  );
}

export default Header;