import { useState } from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import useMousePosition from "./utils/useMousePosition";
import { motion } from "framer-motion";

function App() {
  const [isHovered, setIsHovered] = useState(false);
  const { x, y } = useMousePosition();
  const size = isHovered ? 150 : 20;

  return (
    <main className="relative cursor-none">
      <div className="text-neutral-300 bg-neutral-950 h-screen w-full flex flex-col items-center">
        <div className="max-w-2xl">
          <Header
            className="scale-125"
            image={"src/assets/profilePhoto.png"}
            heading="Hi!"
            subHeading="I am Charan"
            mouseState={setIsHovered}
          />
          <Section
            id="about"
            heading="About"
            content="I am a tech enthusiast who develops creative web applications and
            software solutions."
            className="relative"
          />
          <Section
            id="education"
            heading="Education"
            content="I am a 3rd year student at Panjab University, pursuing a degree in
            Computer Science."
          />
          <Section id="skills" heading="Skills">
            <ul className="w-full grid grid-cols-2">
              <div>
                <li>HTML/CSS</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
              </div>
              <div>
                <li>React</li>
                <li>Next.js</li>
                <li>Node.js</li>
                <li>Express</li>
              </div>
            </ul>
          </Section>
          <Section id="top-project" heading="Top Project">
            <a
              href="https://auth-nex.vercel.app/"
              className="cursor-pointer"
              target="_blank"
            >
              <div className="relative pt-3 group w-full h-80 overflow-hidden rounded-lg">
                <iframe
                  scrolling="no"
                  className="-neutral-950 h-[600px] scale-105 -mt-60 w-full group-hover:blur-sm  transition"
                  rel="noreferrer noopener"
                  src="https://auth-nex.vercel.app/"
                  frameBorder="0"
                ></iframe>
                <div className="flex duration-300 justify-center items-center text-sm absolute top-0 left-0 w-full h-full z-10 bg-transparent group-hover:bg-neutral-950/60  transition">
                  <h1 className="text-neutral-500 duration-700 opacity-0 group-hover:opacity-100 font-bold transition translate-y-2 group-hover:-translate-y-0">
                    Click to visit<span className="animate-pulse">.</span>
                  </h1>
                </div>
              </div>
            </a>
            <p className="w-full line-clamp-3">
              AuthNex is a full-stack authentication application that uses
              Next.js, Tailwind CSS, and PostgreSQL. AuthNex is a full-stack
              authentication application that uses Next.js,...{" "}
              <a href="/projects" className="text-neutral-400/40 animate-pulse">
                read more
              </a>
            </p>
          </Section>
          <Section id="Blog" heading="Blog">
            <img src="src/assets/blog.png" alt="Blog Image" />
          </Section>
        </div>
      </div>

      // Masked content
      <motion.div
        animate={{
          WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", duration: 0.25, ease: "backOut" }}
        className="mask absolute top-0 text-neutral-300 bg-neutral-950 h-screen w-full flex flex-col items-center"
      >
        <div className="max-w-2xl">
          <Header
            className="mt-3 scale-[1.40] group-hover:scale-150"
            image="src/assets/cat.png"
            heading="Hi!"
            subHeading="I am classikh"
            mouseState={setIsHovered}
          />
          <Section
            onMouseEnter={setIsHovered}
            onMouseLeave={setIsHovered}
            id="about"
            heading="About"
            content="Tech enthusiast, cat aficionado, and a perpetual dreamer."
            className="relative"
          />
          <Section
            id="education"
            heading="Education"
            content="I am a 3rd year student at Panjab University, pursuing a degree in
            Computer Science."
          />
          <Section id="skills" heading="Skills">
            <ul className="w-full grid grid-cols-2">
              <div>
                <li>HTML/CSS</li>
                <li>JavaScript</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
              </div>
              <div>
                <li>React</li>
                <li>Next.js</li>
                <li>Node.js</li>
                <li>Express</li>
              </div>
            </ul>
          </Section>
          <Section id="top-project" heading="Top Project">
            <a
              rel="noreferrer noopener"
              href="https://auth-nex.vercel.app/"
              className="cursor-pointer"
              target="_blank"
            >
              <div className="relative pt-3 group w-full h-80 overflow-hidden rounded-lg">
                <div className="flex duration-300 justify-center items-center text-sm absolute top-0 left-0 w-full h-full z-10 bg-transparent group-hover:bg-neutral-950/60  transition">
                  <h1 className="text-neutral-500 duration-700 opacity-0 group-hover:opacity-100 font-bold transition translate-y-2 group-hover:-translate-y-0">
                    Click to visit<span className="animate-pulse">.</span>
                  </h1>
                </div>
              </div>
            </a>
            <p className="w-full line-clamp-3">
              AuthNex is a full-stack authentication application that uses
              Next.js, Tailwind CSS, and PostgreSQL. AuthNex is a full-stack
              authentication application that uses Next.js,...{" "}
              <a href="/projects" className="text-neutral-400/40">
                read more
              </a>
            </p>
          </Section>
          <Section id="Blog" heading="Blog">
            <img src="src/assets/blog.png" alt="Blog Image" />
          </Section>
        </div>
      </motion.div>
    </main>
  );
}

export default App;
