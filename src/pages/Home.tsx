import { useState } from "react";
import Header from "../components/Header";
import Section from "../components/Section";
import useMousePosition from "../utils/useMousePosition";
import { motion } from "framer-motion";
import useScrollPosition from "../utils/useScrollPosition";
import { ProgressiveBlur } from "../components/ui/infiniteScroll";
import { CgArrowRight } from "react-icons/cg";
import Layout from "../components/Layouts/layout";
import { ContactForm } from "../components/ContactForm";

const contactSources = [
  {
    name: "Email",
    url: "mailto:charankamal20@gmail.com",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/charan-singh-1a1b3b1b4/",
  },
  {
    name: "GitHub",
    url: "https://github.com/charankamal20",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/charandoesitall",
  },
  {
    name: "Medium",
    url: "https://medium.com/@classikh",
  },
];

function Home() {
  const [isHovered, setIsHovered] = useState(false);
  const { scrollX, scrollY } = useScrollPosition();
  const { x, y } = useMousePosition();
  const size = isHovered ? 150 : 20;

  return (
    <Layout>
      <div className="relative sm:cursor-none">
        <div className="cursor-auto text-neutral-300 bg-neutral-900 w-full flex flex-col items-center">
          <div className="max-w-2xl">
            <Header
              className="scale-125"
              image={"assets/profilePhoto.png"}
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
                  <h2 className="w-fit font-semibold overflow-hidden flex flex-col">
                    Proficient
                  </h2>
                  <div className="p-2 text-neutral-400">
                    <li>React</li>
                    <li>Tailwind CSS</li>
                    <li>Framer Motion</li>
                    <li>JavaScript</li>
                    <li>Java, C/C++, Python</li>
                  </div>
                </div>
                <div>
                  <h2 className="font-semibold">Learning</h2>
                  <div className="p-2 text-neutral-400">
                    <li>TypeScript</li>
                    <li>Next.js</li>
                    <li>Node.js</li>
                    <li>Express</li>
                  </div>
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
                      className="w-full -mt-4 group-hover:blur-sm transition"
                      src="assets/authnex.png"
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
                <p className="w-full p-4 tracking-normal">
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
                      src="assets/blog.png"
                      alt="Blog Image"
                    />
                  </a>
                </div>
              </div>
            </Section>
            <Section id="connect" heading="Connect" className="space-y-6">
              <ul className="relative">
                {contactSources.map((source, index) => (
                  <a
                    key={index}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={source.url}
                  >
                    <li
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                      key={source.name}
                      className="w-fit group flex gap-1 items-center"
                    >
                      <span className="cursor-pointer group-hover:font-semibold group-hover:text-white transition-all">
                        {source.name}{" "}
                      </span>
                      <CgArrowRight className="transition-all group-hover:delay-0 delay-150 group-hover:opacity-100 group-hover:translate-x-1 -translate-x-1 opacity-0" />
                    </li>
                  </a>
                ))}
              </ul>
              <div className="shadow-lg sm:p-2 flex flex-col cursor-auto w-full bg-neutral-950 rounded-xl">
                <p className="text-sm m-4 sm:mx-0 sm:px-6">
                  Subscribe to my newsletter to get regular updates on resources
                  and blog posts.
                </p>
                <ContactForm />
              </div>
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
              image="assets/cat.png"
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
                  <h2 className="font-semibold">Proficient</h2>
                  <div className="p-2">
                    <li>React</li>
                    <li>Tailwind CSS</li>
                    <li>Framer Motion</li>
                    <li>JavaScript</li>
                    <li>Java, C/C++, Python</li>
                  </div>
                </div>
                <div>
                  <h2 className="font-semibold">Learning</h2>
                  <div className="p-2">
                    <li>TypeScript</li>
                    <li>Next.js</li>
                    <li>Node.js</li>
                    <li>Express</li>
                  </div>
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
                <p className="w-full p-4 text-justify tracking-normal">
                  AuthNex is a full-stack authentication application that uses
                  Next.js, Tailwind CSS, and PostgreSQL. AuthNex is a full-stack
                  authentication application that uses Next.js.
                </p>
              </div>
            </Section>
            <Section className="" id="Blog" heading="Blog">
              <div className="flex flex-col gap-4">
                <div className="h-20 w-full filter z-50"></div>
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
                      src="assets/blog.png"
                      alt="Blog Image"
                    />
                  </a>
                </div>
              </div>
            </Section>
            <Section id="connect" heading="Connect" className="space-y-6">
              <ul
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="relative"
              >
                {contactSources.map((source, index) => (
                  <a
                    key={index}
                    target="_blank"
                    rel="noreferrer noopener"
                    href={source.url}
                  >
                    <li
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                      key={source.name}
                      className="w-fit group flex gap-1 items-center"
                    >
                      <span className="cursor-pointer group-hover:font-semibold group-hover:text-white transition-all">
                        {source.name}{" "}
                      </span>
                      <CgArrowRight className="transition-all group-hover:delay-0 delay-150 group-hover:text-white group-hover:opacity-100 group-hover:translate-x-1 -translate-x-1 opacity-0" />
                    </li>
                  </a>
                ))}
              </ul>
            </Section>
          </div>
        </motion.div>
      </div>
    </Layout>
  );
}

export default Home;
