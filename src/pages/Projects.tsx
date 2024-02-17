import Layout from "../components/Layouts/layout";
import Section from "../components/Section";
import { TextGenerateEffect } from "../components/ui/textGenerate";
import { FiArrowUpRight } from "react-icons/fi";
import Reveal from "../components/motion/reveal";
import PacmanLoader from 'react-spinners/PacmanLoader';

const projectData = [
  {
    title: "AuthNex",
    description:
      "AuthNex is a robust full-stack authentication application leveraging Next.js, Auth.js (NextAuth.js), and PostgreSQL. Through seamless integration with backend databases and APIs, it offers OAuth and Two-factor Authentication functionalities. Additionally, role-based access control ensures secure API routes and server actions, making AuthNex a reliable solution for modern authentication needs.",
    link: "https://auth-nex.vercel.app/",
    imageUrl: "assets/authnex.png",
  },
  {
    title: "NexDrop",
    description:
      "A full-stack Dropbox replica utilizing Next.js 14, enabling seamless file uploads to Firebase Storage. Implemented robust CRUD functionality for enhanced user interaction. Designed an intuitive UI/UX with Shadcn/ui for visual appeal, fortified with Firebase Authentication for secure access management.",
    link: "https://nex-drop.vercel.app/",
    imageUrl: "assets/nex-drop.png",
  },
  {
    title: "BookTrackr",
    description:
      "BookTrackr: a dynamic to-do list app for book enthusiasts. Powered by React.js, Firebase Authentication and Storage, Shadcn/ui, TypeScript, and Tailwind CSS, BookTrackr empowers users to manage their reading goals, track progress, and annotate chapters with ease. Through this project, I honed my skills in dynamic data management, ensuring seamless user interactions and responsive interfaces.",
    link: "https://booktrackr.vercel.app/",
    imageUrl: "assets/bookTrackr.png",
  },
];

function Projects() {
  return (
    <Layout>
      <div className="mx-auto w-full max-w-2xl text-neutral-300">
        <Section id="projects-page" heading="Projects" content="">
          <TextGenerateEffect words="Creating digital footprints that leave an impression." />
        </Section>
        <Section id="list" heading="">
          <ul className="p-4 space-y-24">
            {projectData.map((project, index) => (
              <li key={index} className="space-y-4">
                <a
                  rel="noopener noreferrer"
                  target="_blank"
                  className="font-bold text-lg"
                  href={project.link}
                >
                  {" "}
                  {project.title}{" "}
                </a>
                <div className="mx-auto w-11/12 group transition-all rounded-xl relative bg-neutral-950 overflow-hidden">
                  <img
                    className="cursor-grab scale-95 duration-300 transition-all rounded-lg"
                    src={project.imageUrl}
                    alt={project.title}
                  />
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    href={project.link}
                    className="transition opacity-0 gap-x-1 font-bold text-neutral-500 flex justify-center items-center w-full h-full bg-black/80 duration-500 hover:backdrop-blur-sm hover:opacity-100 absolute top-0 left-0"
                  >
                    Visit
                    <FiArrowUpRight className="transition group-hover:translate-x-0 -translate-x-1 opacity-0 group-hover:opacity-100" />
                  </a>
                </div>
                <Reveal width="100%">
                  <p className="text-pretty text-zinc-400 leading-7 mx-auto w-11/12 text-sm">
                    {project.description}
                  </p>
                </Reveal>
              </li>
            ))}
            <li>
              <span className="cursor-wait font-bold text-neutral-500 flex items-center gap-x-2">
                Next Project
                <PacmanLoader size={10} color="rgb(115 115 115) " />
              </span>
            </li>
          </ul>
        </Section>
      </div>
    </Layout>
  );
}

export default Projects;
