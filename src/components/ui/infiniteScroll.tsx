import { useEffect, useRef } from "react";



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
      <div className="side-mask relative flex h-20 w-full items-center justify-center overflow-hidden">
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
      </div>
    </>
  );
};
