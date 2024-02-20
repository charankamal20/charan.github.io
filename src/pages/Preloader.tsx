import { useTypewriter } from "react-simple-typewriter";
import { motion, useAnimation } from "framer-motion";
import { useRef } from "react";

interface PreloaderProps {
  setLoading: (loading: boolean) => void;
}

function Preloader({ setLoading }: PreloaderProps) {
  const ref = useRef(null);
  const controls = useAnimation();

  const [text] = useTypewriter({
    words: ["music", "tech", "design", "This is classikh"],
    loop: 1,
    delaySpeed: 300,
    typeSpeed: 120,
    deleteSpeed: 80,
    onLoopDone: () => {
      controls.start("animate");
      controls.start("hidden");
      console.log("done");
      setTimeout(() => {
        setLoading(false);
      }, 4000);
    },
  });

  return (
    <main
      ref={ref}
      className="cursor-wait text-neutral-900 h-screen overflow-hidden relative font-bold bg-neutral-200 w-full flex justify-center items-center"
    >
      <div className="flex relative justify-center items-center gap-x-1">
        <motion.div
          className="border-black overflow-hidden"
          variants={{
            initial: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          initial="initial"
          transition={{
            delay: 0.5,
            duration: 1,
            ease: "easeIn",
          }}
          animate={controls}
        >
          {text}
        </motion.div>
        <motion.div
          className="z-40 origin-center -right-3 absolute h-4 w-2 bg-neutral-900 animate-pulse"
          variants={{
            initial: { height: "1rem", width: "0.5rem" },
            animate: {
              width: "1rem",
              scale: 200,
              animation: "none",
              borderRadius: "100%",
            },
          }}
          initial="initial"
          animate={controls}
          transition={{
            delay: 2.25,
            duration: 1.5,
            ease: "easeOut",
          }}
        ></motion.div>
      </div>
    </main>
  );
}

export default Preloader;
