import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from "./layout/rootLayout.jsx";
import Home from "./Pages/Home.jsx";
import AuthLayout from "./layout/AuthLayout.jsx";
import Login from "./components/Form/Login.jsx";
import Register from "./components/Form/Register.jsx";
import AuthProvider from "./context/AuthProvider.jsx";
import AllProperties from "./Pages/AllProperties.jsx";
import AddProperties from "./Pages/AddProperties.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "/allproperties",
        loader: () => fetch("http://localhost:3000/allproperties"),
        element: <AllProperties />,
      },
      {
        path: "/addproperties",
        element: <AddProperties />,
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      {" "}
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
