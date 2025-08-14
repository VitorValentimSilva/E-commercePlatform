import { createBrowserRouter } from "react-router-dom";
import LayoutPublic from "../pages/LayoutPublic";
import LayoutPrivate from "../pages/LayoutPrivate";
import Dashboard from "../pages/Dashboard";
import Products from "../pages/Products";
import Category from "../pages/Category";
import PagesAuth from "../pages/PagesAuth";
import RequireAuth from "../components/RequireAuth";
import Profile from "../components/Profile";
import Create from "../pages/Create";

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
    element: (
      <RequireAuth>
        <LayoutPrivate />
      </RequireAuth>
    ),
    children: [
      { index: true, element: <Dashboard /> },
      { path: "products", element: <Products /> },
      { path: "category", element: <Category /> },
      { path: "profile", element: <Profile /> },
      { path: "create", element: <Create /> },
    ],
  },
]);
