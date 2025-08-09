import { Outlet } from "react-router-dom";
import { useTheme } from "../hooks/useTheme";

export default function LayoutPublic() {
  const { theme } = useTheme();

  return (
    <div
      className={`
      ${
        theme === "dark" ? "bg-BackgroundDarkTheme" : "bg-BackgroundLightTheme"
      }`}
    >
      <Outlet />
    </div>
  );
}
