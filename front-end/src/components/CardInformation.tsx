import type { JSX } from "react";
import { useTheme } from "../hooks/useTheme";

interface CardInformationProps {
  title: string;
  info: string;
  icon: JSX.Element;
  percentage?: string;
}

export default function CardInformation({
  title,
  info,
  icon,
  percentage,
}: CardInformationProps) {
  const { theme } = useTheme();

  return (
    <div
      className={`p-5 rounded-lg flex items-center justify-between border w-full gap-4
      ${
        theme === "dark"
          ? "bg-SurfaceDarkTheme border-SurfaceLightTheme/40"
          : "bg-SurfaceLightTheme border-SurfaceDarkTheme/40"
      }`}
    >
      <div className="gap-2 flex flex-col">
        <p
          className={`text-lg font-semibold
          ${
            theme === "dark"
              ? "text-TextDarkTheme/70"
              : "text-TextLightTheme/70"
          }`}
        >
          {title}
        </p>

        <p
          className={`font-bold text-2xl
          ${theme === "dark" ? "text-TextDarkTheme" : "text-TextLightTheme"}`}
        >
          {info}
        </p>
      </div>

      <div className="flex flex-col items-center gap-3">
        <p
          className={`p-2 rounded-full font-bold
          ${
            theme === "dark"
              ? "text-PrimaryDarkTheme bg-PrimaryDarkTheme/30"
              : "text-PrimaryLightTheme bg-PrimaryLightTheme/30"
          }`}
        >
          {icon}
        </p>

        <p
          className={`text-base font-medium
          ${
            theme === "dark"
              ? "text-PrimaryDarkTheme"
              : "text-PrimaryLightTheme"
          }`}
        >
          {percentage}
        </p>
      </div>
    </div>
  );
}
