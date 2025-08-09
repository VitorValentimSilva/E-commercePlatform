import { createBrowserRouter } from "react-router-dom";
import LayoutPublic from "../pages/LayoutPublic";
import LayoutPrivate from "../pages/LayoutPrivate";
import Dashboard from "../pages/Dashboard";
import Products from "../pages/Products";
import Category from "../pages/Category";
import PagesAuth from "../pages/PagesAuth";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic />,
    children: [
      {
        path: "login",
        element: <PagesAuth type="login" />,
      },
      {
        path: "register",
        element: <PagesAuth type="register" />,
      },
    ],
  },
  {
    path: "/adm",
    element: <LayoutPrivate />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "products", element: <Products /> },
      { path: "category", element: <Category /> },
    ],
  },
]);
