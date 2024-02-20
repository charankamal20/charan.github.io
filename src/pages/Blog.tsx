import { FiArrowUpRight } from "react-icons/fi";
import Layout from "../components/Layouts/layout";
import Section from "../components/Section";

function Blog() {
  return (
    <Layout>
      <div className="max-w-2xl text-neutral-300 w-full mx-auto">
        <Section
          revealDisabled={true}
          heading="Blog"
          id="blog-page"
          content="Find all my blogs on medium."
        />
        <Section heading="" id="blog-list">
          <div>
            <ol className="p-2 space-y-6 list-decimal list-inside">
              <li className="w-full">
                <div className="w-11/12 inline-flex justify-between items-center">
                  <a
                    rel="noopener noreferrer"
                    target="_blank"
                    className="gap-y-2 group inline-flex flex-col transition"
                    href="https://medium.com/@classikh/ai-already-implemented-9cb99b78f40b"
                  >
                    <span className="font-semibold hover:underline inline-flex items-center">
                      AI: Already Implemented?
                      <FiArrowUpRight className="transition-all group-hover:delay-0 delay-150 group-hover:opacity-100 group-hover:translate-x-1 -translate-x-1 opacity-0" />
                    </span>
                    <span className="text-xs text-neutral-400">
                      Questioning the definitions(s).
                    </span>
                  </a>
                  <div className="text-xs text-neutral-500 flex flex-col">
                    <span>Aug 2, 2023</span>
                    <span>6 min read.</span>
                  </div>
                </div>
                <div className="text-pretty text-zinc-400 leading-8 p-2 flex flex-col gap-y-3 mt-2">
                  <p className="">
                    In this article, I wish to put forward some questions that I
                    had when I attended my first AI lecture in my college. I
                    wish to share my thoughts and the knowledge that I stumbled
                    upon in pursuit of these answers. So, let us start at the
                    very beginning.
                  </p>
                  <p>
                    After reading extensively about the definition of AI I can
                    confidently say that there really isn’t a strict definition
                    of AI. Because to define “Artificial Intelligence” you would
                    have to first answer “What is Intelligence?” and that is a
                    topic that is as abstract as it can get.
                  </p>
                  <p className="line-clamp-3">
                    But for now lets explore what definitions we have, below is
                    a text from the book by Kevin Knight, Elaine Rich, B. Nair —
                    Artificial Intelligence. Artificial Intelligence is the
                    study of how to make computers do things which, at the
                    moment, people do better.
                  </p>
                  <a
                    href="https://medium.com/@classikh/ai-already-implemented-9cb99b78f40b"
                    className="w-fit mx-auto hover:animate-pulse"
                  >
                    Read More.
                  </a>
                </div>
                <div className="side-mask h-px w-full bg-zinc-500/50 mt-4"></div>
              </li>
              <li className="cursor-wait text-neutral-500">Coming more.</li>
            </ol>
          </div>
        </Section>
      </div>
    </Layout>
  );
}

export default Blog;
