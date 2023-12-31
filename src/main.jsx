import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Layout/Root";
import ErrorPage from "./components/Errorpage";
import Home from "./components/Home";
import AppliedJobs from "./components/AppliedJobs";
import Statistics from "./components/Statistics";
import Blog from "./components/Blog";
import FeatureJobDetails from "./components/FeatureJobDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("jobs.json"),
      },
      {
        path: "job/:jobId",
        element: <FeatureJobDetails />,
        loader: ({ params }) => fetch(`jobs.json/${params.jobId}`),
      },
      {
        path: "appliedJobs",
        element: <AppliedJobs />,
      },
      {
        path: "statistics",
        element: <Statistics />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
