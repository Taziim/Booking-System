import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout.jsx";
import CarPage from "./layout/CarPage.jsx";
import RegisterPage from "./layout/RegisterPage.jsx";
import MenuLayout from "./layout/MenuLayout.jsx"
import "./index.css";
const browserRouter = createBrowserRouter([
{
  path: "/register",
  element: <MenuLayout />,
  children: [
    {
      index: true,
      element: <RegisterPage />,
    },
  ],
},
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/cars",
        element: <CarPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={browserRouter} />
  </StrictMode>,
);
