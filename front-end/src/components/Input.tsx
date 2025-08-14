import { useState } from "react";
import { useTheme } from "../hooks/useTheme";

interface InputProps {
  name: string;
  id: string;
  type: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
  value?: string;
  checked?: boolean;
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
  checked,
  onChange,
}: InputProps) {
  const { theme } = useTheme();
  const [fileName, setFileName] = useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setFileName(e.target.files[0].name);
    } else {
      setFileName("");
    }

    onChange?.(e);
  };

  return (
    <div className="flex flex-col gap-1 w-full">
      {type === "file" ? (
        <label
          htmlFor={id}
          className={`w-full h-36 flex flex-col items-center justify-center gap-2 border-2 border-dashed rounded-lg cursor-pointer py-6
          ${
            theme === "dark"
              ? "text-TextDarkTheme border-SurfaceLightTheme/60"
              : "text-TextLightTheme border-SurfaceDarkTheme/60"
          }`}
        >
          <span className="text-base opacity-80">
            {fileName || placeholder}
          </span>
          <input
            id={id}
            name={id}
            type="file"
            className="hidden"
            onChange={handleFileChange}
            required={required}
            accept="image/*"
          />
        </label>
      ) : type === "checkbox" ? (
        <label
          htmlFor={id}
          className={`flex items-center justify-between cursor-pointer
          ${theme === "dark" ? "text-TextDarkTheme" : "text-TextLightTheme"}`}
        >
          <span className="text-base font-semibold">{name}</span>

          <div className="relative">
            <input
              type="checkbox"
              id={id}
              name={id}
              checked={checked}
              onChange={onChange}
              className="sr-only peer"
            />
            <div
              className={`w-10 h-5 rounded-full transition-colors duration-300
              ${
                theme === "dark"
                  ? "bg-gray-700 peer-checked:bg-purple-500"
                  : "bg-gray-300 peer-checked:bg-purple-600"
              }`}
            ></div>
            <div className="absolute top-0.5 left-0.5 w-4 h-4 bg-black rounded-full transition-transform duration-300 peer-checked:translate-x-5"></div>
          </div>
        </label>
      ) : (
        <>
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
        </>
      )}

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
