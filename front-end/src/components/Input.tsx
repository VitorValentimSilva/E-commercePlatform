import { useTheme } from "../hooks/useTheme";

interface InputProps {
  name: string;
  id: string;
  type: string;
  placeholder?: string;
  required?: boolean;
}

export default function Input({
  name,
  id,
  type,
  placeholder,
  required,
}: InputProps) {
  const { theme } = useTheme();

  return (
    <div className="flex flex-col gap-1">
      <label
        htmlFor={id}
        className={`text-base font-semibold
        ${theme === "dark" ? "text-TextDarkTheme" : "text-TextLightTheme"}`}
      >
        {name}
      </label>
      <input
        type={type}
        name={id}
        id={id}
        placeholder={placeholder}
        required={required}
        className={`w-full px-3 py-1.5 rounded-lg border
        ${
          theme === "dark"
            ? "bg-InputDarkTheme text-TextDarkTheme border-SurfaceLightTheme/60"
            : "bg-InputLightTheme text-TextLightTheme border-SurfaceDarkTheme/60"
        }`}
      />
    </div>
  );
}
