import { NavLink } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import { TbHome, TbHomeFilled, TbTags, TbTagsFilled } from "react-icons/tb";
import { BsBoxes } from "react-icons/bs";
import { LuBoxes } from "react-icons/lu";
import { useSidebar } from "../hooks/useSidebar";

export default function Sidebar() {
  const { theme } = useTheme();
  const { collapsed } = useSidebar();

  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    `flex items-center gap-2 px-4 py-2 rounded-xl transition-colors 
    ${
      isActive
        ? theme === "dark"
          ? "bg-gray-800 text-[#f8fafc] font-semibold"
          : "bg-gray-300 text-[#0f1729] font-semibold"
        : theme === "dark"
        ? "text-[#f8fafc] hover:bg-gray-700"
        : "text-[#0f1729] hover:bg-gray-400"
    }
    ${collapsed ? "justify-center" : "justify-start"}`;

  return (
    <aside
      className={`h-screen p-5 border-r transition-all duration-300 
      ${
        theme === "dark"
          ? "bg-SurfaceDarkTheme border-r-SurfaceLightTheme/40"
          : "bg-SurfaceLightTheme border-r-SurfaceDarkTheme/40"
      } ${collapsed ? "w-16" : "w-64"}`}
    >
      <h1
        className={`text-xl font-bold mb-3 text-center transition-opacity duration-200 
        ${theme === "dark" ? "text-TextDarkTheme" : "text-TextLightTheme"} ${
          collapsed
            ? "opacity-0 pointer-events-none h-0 overflow-hidden"
            : "opacity-100"
        }`}
      >
        E-commerce Platform
      </h1>

      <nav className="flex flex-col gap-2">
        <NavLink to="/adm" className={linkClasses} end title="Painel">
          {({ isActive }) => (
            <>
              <div className={`flex-shrink-0 ${collapsed ? "mx-auto" : ""}`}>
                {isActive ? (
                  <TbHomeFilled className="w-5 h-5" />
                ) : (
                  <TbHome className="w-5 h-5" />
                )}
              </div>
              <span className={`${collapsed ? "hidden" : "ml-2"}`}>Painel</span>
            </>
          )}
        </NavLink>

        <NavLink to="/adm/products" className={linkClasses} title="Produtos">
          {({ isActive }) => (
            <>
              <div className={`flex-shrink-0 ${collapsed ? "mx-auto" : ""}`}>
                {isActive ? (
                  <LuBoxes className="w-5.5 h-5.5" />
                ) : (
                  <BsBoxes className="w-5 h-5" />
                )}
              </div>
              <span className={`${collapsed ? "hidden" : "ml-2"}`}>
                Produtos
              </span>
            </>
          )}
        </NavLink>

        <NavLink to="/adm/category" className={linkClasses} title="Categoria">
          {({ isActive }) => (
            <>
              <div className={`flex-shrink-0 ${collapsed ? "mx-auto" : ""}`}>
                {isActive ? (
                  <TbTagsFilled className="w-5 h-5" />
                ) : (
                  <TbTags className="w-5 h-5" />
                )}
              </div>
              <span className={`${collapsed ? "hidden" : "ml-2"}`}>
                Categoria
              </span>
            </>
          )}
        </NavLink>
      </nav>
    </aside>
  );
}
