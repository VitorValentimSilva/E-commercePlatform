import { FiCheck, FiPlus } from "react-icons/fi";
import { useTheme } from "../hooks/useTheme";
import Input from "./Input";
import { CgTrash } from "react-icons/cg";
import { useState } from "react";

interface FilterFieldsProps {
  name: string;
}

export default function FilterFields({ name }: FilterFieldsProps) {
  const { theme } = useTheme();
  const [selected, setSelected] = useState(false);

  return (
    <div
      className={`p-5 rounded-lg flex flex-col gap-6 border
      ${
        theme === "dark"
          ? "bg-SurfaceDarkTheme border-SurfaceLightTheme/40"
          : "bg-SurfaceLightTheme border-SurfaceDarkTheme/40"
      }`}
    >
      <div>
        <Input
          name="Procurar"
          id="search"
          type="search"
          placeholder={`Pesquise por nome de ${name}`}
        />
      </div>

      <div className="flex items-center justify-between">
        <div
          className={`flex items-center gap-5 w-full text-base
          ${theme === "dark" ? "text-TextDarkTheme" : "text-TextLightTheme"}`}
        >
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSelected((prev) => !prev)}
              className={`cursor-pointer border rounded-full flex items-center justify-center
              ${
                selected
                  ? theme === "dark"
                    ? "bg-PrimaryDarkTheme text-white border-PrimaryDarkTheme"
                    : "bg-PrimaryLightTheme text-white border-PrimaryLightTheme"
                  : theme === "dark"
                  ? "border-PrimaryDarkTheme p-2"
                  : "border-PrimaryLightTheme p-2"
              }`}
            >
              {selected && <FiCheck className="w-4 h-4" />}
            </button>

            <p
              onClick={() => setSelected((prev) => !prev)}
              className={`cursor-default
              `}
            >
              Selecionar tudo
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              className={`py-1 px-2 rounded-lg
              ${
                selected
                  ? theme === "dark"
                    ? "bg-BackgroundLightTheme/20 hover:opacity-80 cursor-pointer"
                    : "bg-BackgroundDarkTheme/20 hover:opacity-80 cursor-pointer"
                  : theme === "dark"
                  ? "bg-BackgroundLightTheme/20 opacity-60"
                  : "bg-BackgroundDarkTheme/20 opacity-60"
              }`}
            >
              Desativar
            </button>

            <button
              className={`py-1 px-2 rounded-lg flex items-center gap-1
                ${
                  selected
                    ? theme === "dark"
                      ? "bg-RedDarkTheme hover:opacity-80 cursor-pointer"
                      : "bg-RedLightTheme hover:opacity-80 cursor-pointer"
                    : theme === "dark"
                    ? "bg-RedDarkTheme opacity-60"
                    : "bg-RedLightTheme opacity-60"
                }`}
            >
              <CgTrash className="w-4.5 h-4.5" /> Deletar
            </button>
          </div>
        </div>

        <div>
          <button
            className={`cursor-pointer font-semibold text-base py-1.5 px-6 rounded-lg flex items-center gap-2 hover:opacity-75 w-max
          ${
            theme === "dark"
              ? "bg-PrimaryDarkTheme/70 text-TextDarkTheme"
              : "bg-PrimaryLightTheme/70 text-TextLightTheme"
          }`}
          >
            <FiPlus className="w-6 h-6" /> Criar {name}
          </button>
        </div>
      </div>
    </div>
  );
}
