import React from 'react'
import { cn } from '../utils/cn';
import Reveal from './motion/reveal';

interface Props {
  revealDisabled?: boolean;
  id: string;
  heading: string;
  content?: string;
  className?: string;
  children?: React.ReactNode;
  onMouseEnter?: (arg0: boolean) => void;
  onMouseLeave?: (arg0: boolean) => void;
}


function Section({revealDisabled=false, id, className, heading, content, children, onMouseEnter, onMouseLeave}: Props) {
  return (
    <Reveal disabled={revealDisabled}>
      <section
        onMouseEnter={() => onMouseEnter && onMouseEnter(true)}
        onMouseLeave={() => onMouseLeave && onMouseLeave(false)}
        id={id}
        className={cn("mb-2 w-full px-4 mt-12 space-y-3", className)}
      >
        <h2 className="w-full text-neutral-200 text-lg font-bold">{heading}</h2>
        <p className="text-sm text-left">{content}</p>
        {children}
      </section>
    </Reveal>
  );
}

export default Section;

