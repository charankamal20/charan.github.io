import React from 'react'
import { cn } from '../utils/cn';

interface Props {
  id: string;
  heading: string;
  content?: string;
  className?: string;
  children?: React.ReactNode;
  onMouseEnter?: (arg0: boolean) => void;
  onMouseLeave?: (arg0: boolean) => void;
}


function Section({id, className, heading, content, children, onMouseEnter, onMouseLeave}: Props) {
  return (
    <section
      onMouseEnter={() => onMouseEnter(true)}
      onMouseLeave={() => onMouseLeave(false)}
      id={id}
      className={cn("w-full px-4 mt-12 space-y-3", className)}
    >
      <h2 className="w-full text-neutral-200 text-lg font-bold">{heading}</h2>
      <p className="text-sm text-left">{content}</p>
      {children}
    </section>
  );
}

export default Section;

