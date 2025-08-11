import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { useTheme } from "../hooks/useTheme";
import { FiSidebar } from "react-icons/fi";
import { NavLink, useLocation } from "react-router-dom";
import { useSidebar } from "../hooks/useSidebar";
import { useAuthContext } from "../hooks/useAuth";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const { collapsed, toggleSidebar } = useSidebar();
  const { user } = useAuthContext();
console.log("Header user:", user);
  const routeTitles: Record<string, string> = {
    "/adm": "> Painel",
    "/adm/products": "> Produtos",
    "/adm/category": "> Categoria",
  };

  const currentTitle = routeTitles[location.pathname] || "";

  return (
    <header
      className={`flex items-center px-10 py-3 bg-transparent border-b mb-8
      ${
        theme === "dark"
          ? "border-b-SurfaceLightTheme/40"
          : "border-b-SurfaceDarkTheme/40"
      }`}
    >
      <div className="flex items-center gap-5 flex-1">
        <button
          onClick={toggleSidebar}
          aria-expanded={collapsed}
          className={`cursor-pointer rounded-xl p-1.5 transition-transform duration-300 hover:scale-105
          ${
            theme === "dark"
              ? "text-TextDarkTheme hover:bg-SecondaryDarkTheme"
              : "text-TextLightTheme hover:bg-SecondaryLightTheme"
          }`}
        >
          <FiSidebar className="w-5 h-5" />
        </button>

        <p
          className={`text-lg font-medium
          ${theme === "dark" ? "text-TextDarkTheme" : "text-TextLightTheme"}`}
        >
          <NavLink to="/">Início </NavLink>
          {currentTitle}
        </p>
      </div>

      <div>
        <button
          onClick={toggleTheme}
          aria-label="Toggle theme"
          className={`rounded-xl border cursor-pointer p-1.5 transition-transform bg-transparent duration-300 hover:scale-105
          ${
            theme === "dark"
              ? "text-TextDarkTheme border-TextDarkTheme/50 hover:bg-SecondaryDarkTheme hover:text-TextLightTheme hover:border-SecondaryDarkTheme"
              : "text-TextLightTheme border-TextLightTheme/50 hover:bg-SecondaryLightTheme hover:text-TextDarkTheme hover:border-SecondaryLightTheme"
          }`}
        >
          {theme === "dark" ? (
            <IoMoonOutline className="w-5 h-5" />
          ) : (
            <IoSunnyOutline className="w-5 h-5" />
          )}
        </button>

        <button>
            <p>{user?.nameFull}</p>
        </button>
      </div>
    </header>
  );
}
