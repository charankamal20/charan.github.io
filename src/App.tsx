import Blog from "./pages/Blog";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Projects from "./pages/Projects";
import Resources from "./pages/resources";

const router = createBrowserRouter([
  {
    path: "/portfolio-react/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/blog",
    element: <Blog />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/resources",
    element: <Resources />,
  },
  {
    path: "/more",
    element: <ErrorPage />,
  },
]);

function App() {

  return <RouterProvider router={router} />;
}

export default App;
