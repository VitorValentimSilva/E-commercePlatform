import { NavLink } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";
import { TbHome } from "react-icons/tb";
import { BsBoxes } from "react-icons/bs";

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
          ? "bg-SurfaceDarkTheme border-r-SurfaceLightTheme/50"
          : "bg-SurfaceLightTheme border-r-SurfaceDarkTheme/50"
      }`}
    >
      <h1
        className={`text-xl font-bold mb-3 text-center
        ${theme === "dark" ? "text-TextDarkTheme" : "text-TextLightTheme"}`}
      >
        E-commerce Platform
      </h1>
      <nav className="flex flex-col gap-2">
        <NavLink to="/" className={linkClasses} end>
          <TbHome className="w-5 h-5" /> Dashboard
        </NavLink>

        <NavLink to="/products" className={linkClasses}>
          <BsBoxes className="w-5 h-5" /> Products
        </NavLink>
      </nav>
    </aside>
  );
}
