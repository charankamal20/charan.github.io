import Layout from "../components/Layouts/layout";
import Section from "../components/Section";
import { VscCoffee } from "react-icons/vsc";
import { Link } from 'react-router-dom';

function Resources() {
  return (
    <Layout>
      <div className="w-full max-w-2xl mx-auto text-neutral-300">
        <Section
          id="resources-page"
          heading="Resources"
          content="This is a collection of resources that I have found helpful in my
        journey as a developer. I hope you find them helpful too!"
        >
          <p className="text-neutral-300"></p>
        </Section>
        <Section id="resources" heading="" content="">
          <div className="text-sm flex gap-1">
            <p className="text-sm w-fit">
              Making some coffee <VscCoffee className="-translate-y-[2px] inline" />
            </p>
              right now.
          </div>
          <div className="text-xs text-neutral-400">
            Go to{" "}
            <Link className="underline" to="/">
              Home
            </Link>
          </div>
        </Section>
      </div>
    </Layout>
  );
}

export default Resources;
