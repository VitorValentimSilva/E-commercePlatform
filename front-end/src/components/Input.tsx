import { useTheme } from "../hooks/useTheme";

interface InputProps {
  name: string;
  id: string;
  type: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
  name,
  id,
  type,
  placeholder,
  required,
  error,
  value,
  onChange,
}: InputProps) {
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

      <input
        type={type}
        name={id}
        id={id}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        className={`w-full px-3 py-1.5 rounded-lg border
        ${
          theme === "dark"
            ? "bg-InputDarkTheme text-TextDarkTheme border-SurfaceLightTheme/60"
            : "bg-InputLightTheme text-TextLightTheme border-SurfaceDarkTheme/60"
        }`}
      />

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
