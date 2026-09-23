import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/Layout.jsx";
import CarPage from "./layout/CarPage.jsx";
import RegisterPage from "./layout/RegisterPage.jsx";
import MenuLayout from "./layout/MenuLayout.jsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppContextProvider } from "./contexts/AppContext.jsx";

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 0 } },
});

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
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>
        <RouterProvider router={browserRouter} />
      </AppContextProvider>
    </QueryClientProvider>
  </StrictMode>,
);
