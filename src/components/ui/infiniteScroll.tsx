import { cn } from "../../utils/cn";
import { useEffect, useRef } from "react";

const BlurDiv = ({
  blurValue,
  gradientStops,
  zIndex,
  className,
}: {
  blurValue: number;
  gradientStops: string;
  zIndex: number;
  className?: string;
}) => (
  <div
    className={cn(
      "pointer-events-none absolute inset-0 h-full w-full",
      className
    )}
    style={{
      zIndex,
      backdropFilter: `blur(${blurValue}px)`,
      WebkitBackdropFilter: `blur(${blurValue}px)`,
      maskImage: `linear-gradient(to left, ${gradientStops})`,
      WebkitMaskImage: `linear-gradient(to left, ${gradientStops})`,
    }}
  />
);



export const ProgressiveBlur = () => {
  const scrollersRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
      const addAnimation = () => {
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          scrollersRef.current.forEach((scroller) => {
            if (scroller) {
              scroller.setAttribute("data-animated", "true");

              const scrollerInner = scroller.querySelector(".scroller__inner");
              if (
                scrollerInner &&
                scrollerInner.getAttribute("data-animated") !== "true"
              ) {
                const scrollerContent = Array.from(scrollerInner.children);
                scrollerContent.forEach((item) => {
                  const duplicatedItem = item.cloneNode(true) as HTMLElement;
                  duplicatedItem.setAttribute("aria-hidden", "true");
                  scrollerInner.appendChild(duplicatedItem);
                });
                scrollerInner.setAttribute("data-animated", "true");
              }
            }
          });
        }
      };

      addAnimation();
    }, []);


  return (
    <>
      <div className="relative flex h-20 w-full items-center justify-center overflow-hidden">
        <div
          ref={(el) => (scrollersRef.current[0] = el!)}
          className="absolute scroller overflow-x-hidden space-x-4 flex whitespace-nowrap text-white tracking-tighter"
        >
          <ul className="scroller__inner flex flex-nowrap marquee-10 sm:marquee-15 xl:marquee-30 gap-4">
            <li className="blog-sidebar flex-shrink-0">Seek Enlightenment?</li>
            <li className="blog-sidebar flex-shrink-0">Seek Enlightenment?</li>
            <li className="blog-sidebar flex-shrink-0">Seek Enlightenment?</li>
            <li className="blog-sidebar flex-shrink-0">Seek Enlightenment?</li>
            <li className="blog-sidebar flex-shrink-0">Seek Enlightenment?</li>
            <li className="blog-sidebar flex-shrink-0">Seek Enlightenment?</li>
          </ul>
        </div>
        <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-[300px]">
          <div className="relative h-full w-full">
            <BlurDiv
              zIndex={1}
              blurValue={0.25}
              gradientStops="rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 0) 37.5%"
            />
            <BlurDiv
              zIndex={2}
              blurValue={0.5}
              gradientStops="rgba(0, 0, 0, 0) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 0) 50%"
            />
            <BlurDiv
              zIndex={3}
              blurValue={0.75}
              gradientStops="rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 62.5%"
            />
            <BlurDiv
              zIndex={4}
              blurValue={1}
              gradientStops="rgba(0, 0, 0, 0) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 0) 75%"
            />
            <BlurDiv
              zIndex={5}
              blurValue={1.25}
              gradientStops="rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0) 87.5%"
            />
            <BlurDiv
              zIndex={6}
              blurValue={1.5}
              gradientStops="rgba(0, 0, 0, 0) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 0) 100%"
            />
            <BlurDiv
              zIndex={7}
              blurValue={2}
              gradientStops="rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 1) 100%"
            />
            <BlurDiv
              zIndex={8}
              blurValue={2.5}
              gradientStops="rgba(0, 0, 0, 0) 87.5%, rgba(0, 0, 0, 1) 100%"
              className="bg-neutral-950 dark:bg-mauve-dark-2"
            />
          </div>
        </div>
      </div>
    </>
  );
};
