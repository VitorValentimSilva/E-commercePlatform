import { NavLink } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import { TbHome, TbHomeFilled, TbTags, TbTagsFilled } from "react-icons/tb";
import { BsBoxes } from "react-icons/bs";
import { LuBoxes } from "react-icons/lu";

export default function Sidebar() {
  const { theme } = useTheme();
  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-2 px-4 py-2 rounded-xl transition-colors ${
      isActive
        ? theme === "dark"
          ? "bg-gray-800 text-[#f8fafc] font-semibold"
          : "bg-gray-300 text-[#0f1729] font-semibold"
        : theme === "dark"
        ? "text-[#f8fafc] hover:bg-gray-700"
        : "text-[#0f1729] hover:bg-gray-400"
    }`;

  return (
    <aside
      className={`w-64 h-screen p-5 border-r
      ${
        theme === "dark"
          ? "bg-SurfaceDarkTheme border-r-SurfaceLightTheme/40"
          : "bg-SurfaceLightTheme border-r-SurfaceDarkTheme/40"
      }`}
    >
      <h1
        className={`text-xl font-bold mb-3 text-center
        ${theme === "dark" ? "text-TextDarkTheme" : "text-TextLightTheme"}`}
      >
        E-commerce Platform
      </h1>
      <nav className="flex flex-col gap-2">
        <NavLink to="/adm" className={linkClasses} end>
          {({ isActive }) => (
            <>
              {isActive ? (
                <TbHomeFilled className="w-5 h-5" />
              ) : (
                <TbHome className="w-5 h-5" />
              )}
              Painel
            </>
          )}
        </NavLink>

        <NavLink to="/adm/products" className={linkClasses}>
          {({ isActive }) => (
            <>
              {isActive ? (
                <LuBoxes className="w-5.5 h-5.5" />
              ) : (
                <BsBoxes className="w-5 h-5" />
              )}
              Produtos
            </>
          )}
        </NavLink>

        <NavLink to="/adm/category" className={linkClasses}>
          {({ isActive }) => (
            <>
              {isActive ? (
                <TbTagsFilled className="w-5 h-5" />
              ) : (
                <TbTags className="w-5 h-5" />
              )}
              Categoria
            </>
          )}
        </NavLink>
      </nav>
    </aside>
  );
}
