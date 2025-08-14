import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { useState } from "react";
import { useTheme } from "../hooks/useTheme";
import { FaAngleDown } from "react-icons/fa";

interface Option {
  id: string | number | null;
  name: string;
}

interface CustomSelectProps {
  options: Option[];
  placeholder: string;
  label: string;
}

export default function CustomSelect({
  options,
  placeholder,
  label,
}: CustomSelectProps) {
  const { theme } = useTheme();
  const [selected, setSelected] = useState<Option | null>(null);

  const allOptions = [{ id: null, name: "Nenhuma" }, ...options];

  return (
    <div className="flex flex-col gap-1 w-full">
      <label
        className={`text-base font-semibold 
        ${theme === "dark" ? "text-TextDarkTheme" : "text-TextLightTheme"}`}
      >
        {label}
      </label>

      <Listbox value={selected} onChange={setSelected}>
        <div className="relative w-full">
          <ListboxButton
            className={`w-full px-3 py-1.5 rounded-lg border font-semibold text-left flex justify-between items-center
            ${
              theme === "dark"
                ? "text-TextDarkTheme border-SurfaceLightTheme/60"
                : "text-TextLightTheme border-SurfaceDarkTheme/60"
            }`}
          >
            {selected ? selected.name : placeholder}
            <FaAngleDown className="w-5 h-5 ml-2" />
          </ListboxButton>

          <ListboxOptions
            className={`absolute mt-1 w-full max-h-60 overflow-auto rounded-lg border
            ${
              theme === "dark"
                ? "bg-BackgroundDarkTheme text-TextDarkTheme border-SurfaceLightTheme/60"
                : "bg-BackgroundLightTheme text-TextLightTheme border-SurfaceDarkTheme/60"
            } z-10`}
          >
            {allOptions.map((opt) => (
              <ListboxOption
                key={opt.id ?? "none"}
                value={opt}
                className={`cursor-pointer hover:opacity-70 px-3 py-1`}
              >
                {opt.name}
              </ListboxOption>
            ))}
          </ListboxOptions>
        </div>
      </Listbox>
    </div>
  );
}
