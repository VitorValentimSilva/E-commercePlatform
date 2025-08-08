import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import { useTheme } from "../hooks/useTheme";

export default function Layout() {
  const { theme } = useTheme();

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div
        className={`flex flex-col flex-1 
        ${
          theme === "dark"
            ? "bg-BackgroundDarkTheme"
            : "bg-BackgroundLightTheme"
        }`}
      >
        <Header />
        <main className="flex-1 px-10 overflow-y-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
