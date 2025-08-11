import { useTheme } from "../hooks/useTheme";

interface NavProfileProps {
  name: string;
  active?: boolean;
  onClick?: () => void;
}

export default function NavProfile({ name, active, onClick }: NavProfileProps) {
  const { theme } = useTheme();

  return (
    <div
      onClick={onClick}
      className={`font-semibold text-base rounded-lg py-2 px-6 text-center cursor-pointer transition
      ${
        active
          ? theme === "dark"
            ? "text-TextDarkTheme bg-BackgroundDarkTheme"
            : "text-TextLightTheme bg-BackgroundLightTheme"
          : theme === "dark"
          ? "text-TextDarkTheme bg-transparent hover:opacity-70"
          : "text-TextLightTheme bg-transparent hover:opacity-70"
      }`}
    >
      <p>{name}</p>
    </div>
  );
}
