import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { useTheme } from "../hooks/useTheme";
import { FiLogOut, FiSidebar, FiUser } from "react-icons/fi";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { useSidebar } from "../hooks/useSidebar";
import { useAuthContext } from "../hooks/useAuth";
import { useEffect, useRef, useState } from "react";

interface LocationState {
  name?: string;
}

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const { collapsed, toggleSidebar } = useSidebar();
  const { user, setUser } = useAuthContext();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { name } = (location.state as LocationState) || {};
  const nameToPath: Record<string, string> = {
    Categoria: "category",
    Produtos: "products",
  };
  const pageName = nameToPath[name ?? ""] ?? "";

  const routeTitles: Record<string, React.ReactNode> = {
    "/adm": "> Painel",
    "/adm/products": "> Produtos",
    "/adm/category": "> Categoria",
    "/adm/create": name ? (
      <>
        {" > "}
        <NavLink to={`/adm/${pageName}`}>{name}</NavLink>
        {` > Criar ${name}`}
      </>
    ) : (
      "> Criar"
    ),
  };

  const currentTitle = routeTitles[location.pathname] || "";

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleLogout() {
    setUser(null);
    navigate("/");
  }

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
          <NavLink to="/adm">Início </NavLink>
          {currentTitle}
        </p>
      </div>

      <div className="flex items-center gap-5">
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

        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className={`cursor-pointer w-8 h-8 flex items-center justify-center rounded-full font-medium
            ${
              theme === "dark"
                ? "bg-SurfaceLightTheme/30 text-TextDarkTheme hover:bg-SecondaryDarkTheme"
                : "bg-SurfaceDarkTheme/30 text-TextLightTheme hover:bg-SecondaryLightTheme"
            }`}
          >
            {user?.user.nameFull.charAt(0).toUpperCase()}
          </button>

          {open && (
            <div
              className={`absolute right-0 mt-2 w-80 rounded-lg shadow-lg overflow-hidden border
              ${
                theme === "dark"
                  ? "bg-SurfaceDarkTheme border-SurfaceLightTheme/40"
                  : "bg-SurfaceLightTheme border-SurfaceDarkTheme/40"
              }`}
            >
              <div
                className={`flex items-center gap-4 px-4 py-3 border-b
                ${
                  theme === "dark"
                    ? "border-SurfaceLightTheme/40"
                    : "border-SurfaceDarkTheme/40"
                }`}
              >
                <div
                  className={`w-8 h-8 flex items-center justify-center rounded-full font-medium
                  ${
                    theme === "dark"
                      ? "bg-SurfaceLightTheme/30 text-TextDarkTheme"
                      : "bg-SurfaceDarkTheme/30 text-TextLightTheme"
                  }`}
                >
                  {user?.user.nameFull.charAt(0).toUpperCase()}
                </div>
                <span
                  className={`font-semibold text-base
                  ${
                    theme === "dark"
                      ? "text-TextDarkTheme"
                      : "text-TextLightTheme"
                  }`}
                >
                  {user?.user.nameFull}
                </span>
              </div>

              <button
                onClick={() => navigate("/adm/profile")}
                className={`flex items-center gap-3 w-full px-4 py-2 cursor-pointer
                ${
                  theme === "dark"
                    ? "text-TextDarkTheme hover:bg-SecondaryDarkTheme/20"
                    : "text-TextLightTheme hover:bg-SecondaryLightTheme/20"
                }`}
              >
                <FiUser /> Sua Conta
              </button>
              <button
                onClick={handleLogout}
                className={`flex items-center gap-3 w-full px-4 py-2 cursor-pointer
                ${
                  theme === "dark"
                    ? "text-TextDarkTheme hover:bg-SecondaryDarkTheme/20"
                    : "text-TextLightTheme hover:bg-SecondaryLightTheme/20"
                }`}
              >
                <FiLogOut /> Sair da Conta
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
