import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import Apply from "./pages/Apply.jsx";
import AppliedLIst from "./pages/Dashboard/AppliedLIst.jsx";
import DashHome from "./pages/Dashboard/DashHome/DashHome.jsx";
import Home from "./pages/Home/Home.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <App />
      </div>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/apply-now",
        element: <Apply />,
      },
      // Dashboard Routes
      {
        path: "/dashboard",
        element: <DashHome />,
      },
      {
        path: "/application-list",
        element: <AppliedLIst />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
