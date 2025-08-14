import { FiCheck, FiPlus } from "react-icons/fi";
import { useTheme } from "../hooks/useTheme";
import Input from "./Input";
import { CgTrash } from "react-icons/cg";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import type { ListCategory } from "../types/categoryType";

interface FilterFieldsProps {
  name: string;
  options: ListCategory[];
  selectedItems: number[];
  setSelectedItems: React.Dispatch<React.SetStateAction<number[]>>;
}

export default function FilterFields({
  name,
  options,
  selectedItems,
  setSelectedItems,
}: FilterFieldsProps) {
  const { theme } = useTheme();
  const [selectedAll, setSelectedAll] = useState(false);

  const handleSelectAll = () => {
    if (selectedAll) {
      setSelectedItems([]);
    } else {
      setSelectedItems(options.map((item) => item.id));
    }
    setSelectedAll(!selectedAll);
  };

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
              onClick={handleSelectAll}
              className={`cursor-pointer border rounded-full flex items-center justify-center
              ${
                selectedAll || selectedItems.length === options.length
                  ? "bg-PrimaryLightTheme text-white border-PrimaryLightTheme"
                  : "border-PrimaryLightTheme p-2"
              }`}
            >
              {(selectedAll || selectedItems.length === options.length) && (
                <FiCheck className="w-4 h-4" />
              )}
            </button>

            <p onClick={handleSelectAll} className="cursor-default">
              Selecionar tudo
            </p>
          </div>

          <div className="flex items-center gap-4">
            <button
              className={`py-1 px-2 rounded-lg
              ${
                selectedItems.length > 0
                  ? theme === "dark"
                    ? "bg-BackgroundLightTheme/20 hover:opacity-80 cursor-pointer"
                    : "bg-BackgroundDarkTheme/20 hover:opacity-80 cursor-pointer"
                  : theme === "dark"
                  ? "bg-BackgroundLightTheme/20 opacity-60"
                  : "bg-BackgroundDarkTheme/20 opacity-60"
              }`}
              disabled={selectedItems.length === 0}
            >
              Desativar
            </button>

            <button
              className={`py-1 px-2 rounded-lg flex items-center gap-1
              ${
                selectedItems.length > 0
                  ? theme === "dark"
                    ? "bg-RedDarkTheme hover:opacity-80 cursor-pointer"
                    : "bg-RedLightTheme hover:opacity-80 cursor-pointer"
                  : theme === "dark"
                  ? "bg-RedDarkTheme opacity-60"
                  : "bg-RedLightTheme opacity-60"
              }`}
              disabled={selectedItems.length === 0}
            >
              <CgTrash className="w-4.5 h-4.5" /> Deletar
            </button>
          </div>
        </div>

        <div>
          <NavLink
            to="/adm/create"
            state={{ name }}
            className={`cursor-pointer font-semibold text-base py-1.5 px-6 rounded-lg flex items-center gap-2 hover:opacity-75 w-max
            ${
              theme === "dark"
                ? "bg-PrimaryDarkTheme/70 text-TextDarkTheme"
                : "bg-PrimaryLightTheme/70 text-TextLightTheme"
            }`}
          >
            <FiPlus className="w-6 h-6" /> Criar {name}
          </NavLink>
        </div>
      </div>
    </div>
  );
}
