import { lazy, Suspense, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Preloader from "./pages/Preloader";

const Home = lazy(() => import("./pages/Home"));
const Blog = lazy(() => import("./pages/Blog"));
const Projects = lazy(() => import("./pages/Projects"));
const Resources = lazy(() => import("./pages/resources"));
const ErrorPage = lazy(() => import("./pages/ErrorPage"));

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return isLoading ? (
    <Preloader setLoading={setIsLoading} />
  ) : (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
