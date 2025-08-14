import { useTheme } from "../hooks/useTheme";

interface TextareaProps {
  name: string;
  id: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
  value?: string;
}

export default function Textarea({
  name,
  id,
  placeholder,
  required,
  error,
  value,
}: TextareaProps) {
  const { theme } = useTheme();

  return (
    <div className="flex flex-col gap-1 w-full">
      <label
        htmlFor={id}
        className={`text-base font-semibold
        ${theme === "dark" ? "text-TextDarkTheme" : "text-TextLightTheme"}`}
      >
        {name}
      </label>

      <textarea
        name={id}
        id={id}
        placeholder={placeholder}
        required={required}
        value={value}
        className={`w-full px-3 py-1.5 rounded-lg border
        ${
          theme === "dark"
            ? "bg-InputDarkTheme text-TextDarkTheme border-SurfaceLightTheme/60"
            : "bg-InputLightTheme text-TextLightTheme border-SurfaceDarkTheme/60"
        }`}
      ></textarea>

      {error && (
        <span
          className={`text-sm mt-1
          ${theme === "dark" ? "text-RedDarkTheme" : "text-RedLightTheme"}`}
        >
          {error}
        </span>
      )}
    </div>
  );
}
