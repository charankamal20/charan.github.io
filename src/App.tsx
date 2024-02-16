import { useState } from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import useMousePosition from "./utils/useMousePosition";
import { motion } from "framer-motion";
import useScrollPosition from "./utils/useScrollPosition";
import { ProgressiveBlur } from "./components/ui/infiniteScroll";
import Navbar from "./components/Navbar";

function App() {
  const [isHovered, setIsHovered] = useState(false);
  const { scrollX, scrollY } = useScrollPosition();
  const { x, y } = useMousePosition();
  const size = isHovered ? 150 : 20;

  return (
    <main className="relative sm:cursor-none">
      <Navbar />
      <div className="text-neutral-300 bg-neutral-950 w-full flex flex-col items-center">
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
            <div className="w-full">
              <a
                rel="noreferrer noopener"
                href="https://auth-nex.vercel.app/"
                className="cursor-pointer"
                target="_blank"
              >
                <div className="relative pt-3 group w-full h-60 sm:h-80 overflow-hidden rounded-lg">
                  {/* <iframe
                    scrolling="no"
                    className="-neutral-950 h-[600px] scale-105 -mt-60 w-full group-hover:blur-sm  transition"
                    rel="noreferrer noopener"
                    src="https://auth-nex.vercel.app/"
                    frameBorder="0"
                  ></iframe> */}
                  <img
                    className="w-full  -mt-4 group-hover:blur-sm transition"
                    src="src/assets/authnex.png"
                    alt=""
                  />
                  <div className="flex duration-300 justify-center items-center text-sm absolute top-0 left-0 w-full h-full z-10 bg-transparent group-hover:bg-neutral-950/60  transition">
                    <h1
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                      className="text-neutral-400 duration-700 opacity-0 group-hover:opacity-100 font-bold transition translate-y-2 group-hover:-translate-y-0"
                    >
                      Click to visit<span className="animate-pulse">.</span>
                    </h1>
                  </div>
                </div>
              </a>
              <p className="w-full text-left tracking-normal">
                AuthNex is a full-stack authentication application that uses
                Next.js, Tailwind CSS, and PostgreSQL. AuthNex is a full-stack
                authentication application that uses Next.js.
              </p>
            </div>
          </Section>
          <Section className="" id="Blog" heading="Blog">
            <div className="flex flex-col gap-4">
              <ProgressiveBlur />
              <div className="">
                <a
                  className="mt-6"
                  rel="noreferrer noopener"
                  target="_blank"
                  href="https://medium.com/@classikh/ai-already-implemented-9cb99b78f40b"
                >
                  <img
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="filter grayscale sm:blur-sm rounded-md cursor-grab hover:scale-95 transition hover:duration-100 duration-700"
                    src="src/assets/blog.png"
                    alt="Blog Image"
                  />
                </a>
              </div>
            </div>
          </Section>
          <Section id="contact" heading="Contact">
            <form action="submit" className="bg-transparent">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-2 rounded-md"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-2 rounded-md"
              />
              <input
                type="submit"
                value="Send"
                className="w-full p-2 rounded-md bg-primary-500 text-neutral-950"
              />
            </form>
          </Section>
        </div>
      </div>
      {/* // Masked content */}
      <motion.div
        animate={{
          WebkitMaskPosition: `${x + scrollX - size / 2}px ${
            y + scrollY - size / 2
          }px`,
          WebkitMaskSize: `${size}px`,
        }}
        transition={{ type: "tween", duration: 0.25, ease: "backOut" }}
        className="hidden sm:flex mask absolute top-0 text-neutral-300 bg-neutral-950 w-full flex-col items-center"
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
            content="I am a 3rd year student at Punjab University, pursuing a degree in
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
            <div className="w-full">
              <a
                rel="noreferrer noopener"
                href="https://auth-nex.vercel.app/"
                className="cursor-pointer"
                target="_blank"
              >
                <div className="relative pt-3 group w-full h-80 overflow-hidden rounded-lg">
                  <div className="flex duration-300 justify-center items-center text-sm absolute top-0 left-0 w-full h-full z-10 bg-transparent transition">
                    <h1 className="text-neutral-400 duration-700 opacity-0 group-hover:opacity-100 font-bold transition translate-y-2 group-hover:-translate-y-0">
                      Click to visit<span className="animate-pulse">.</span>
                    </h1>
                  </div>
                </div>
              </a>
              <p className="w-full text-left tracking-normal">
                AuthNex is a full-stack authentication application that uses
                Next.js, Tailwind CSS, and PostgreSQL. AuthNex is a full-stack
                authentication application that uses Next.js.
              </p>
            </div>
          </Section>
          <Section className="" id="Blog" heading="Blog">
            <div className="flex flex-col gap-4">
              <div className="h-20 w-full"></div>
              <div className="">
                <a
                  className="pt-6"
                  rel="noreferrer noopener"
                  target="_blank"
                  href="https://medium.com/@classikh"
                >
                  <img
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                    className="rounded-md filter mix-blend-multiply cursor-grab transition hover:duration-100 duration-700"
                    src="src/assets/blog.png"
                    alt="Blog Image"
                  />
                </a>
              </div>
            </div>
          </Section>
          <Section id="contact" heading="Contact">
            <form action="submit" className="bg-transparent">
              
            </form>
          </Section>
        </div>
      </motion.div>
    </main>
  );
}

export default App;
