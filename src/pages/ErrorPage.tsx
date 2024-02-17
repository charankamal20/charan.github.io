import { Link, useRouteError } from "react-router-dom";
import Layout from "../components/Layouts/layout";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <Layout>
      <div className="w-full max-w-2xl mx-auto text-neutral-300 mt-12">
        <h1 className="text-2xl font-bold">Oops!</h1>
        <p>There was an error loading this page.</p>
        <Link className="text-sm underline block " to='/'>Go to home</Link>
      </div>
    </Layout>
  );
}
