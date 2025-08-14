import { useTheme } from "../hooks/useTheme";
import type { ListCategory } from "../types/categoryType";
import { FiCheck } from "react-icons/fi";

interface ListProps {
  thList: Array<string>;
  options: ListCategory[];
  selectedItems: number[];
  setSelectedItems: React.Dispatch<React.SetStateAction<number[]>>;
}

export default function List({
  thList,
  options,
  selectedItems,
  setSelectedItems,
}: ListProps) {
  const { theme } = useTheme();

  const handleSelectItem = (id: number) => {
    if (selectedItems.includes(id)) {
      setSelectedItems(selectedItems.filter((item) => item !== id));
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  };

  return (
    <div
      className={`p-4 rounded-lg border 
      ${
        theme === "dark"
          ? "bg-SurfaceDarkTheme border-SurfaceLightTheme/40"
          : "bg-SurfaceLightTheme border-SurfaceDarkTheme/40"
      }`}
    >
      <table className="w-full border-collapse">
        <thead>
          <tr
            className={`text-left text-lg 
            ${
              theme === "dark"
                ? "text-TextDarkTheme/70"
                : "text-TextLightTheme/70"
            }`}
          >
            {thList.map((item, key) => (
              <th key={key} className="pb-2">
                {item}
              </th>
            ))}
            <th className="pb-2 flex justify-end">Ações</th>
          </tr>
        </thead>

        <tbody
          className={`divide-y border-t border-b 
          ${
            theme === "dark"
              ? "divide-BackgroundLightTheme border-BackgroundLightTheme"
              : "divide-BackgroundDarkTheme border-BackgroundDarkTheme"
          }`}
        >
          {options
            .sort((a, b) => a.order - b.order)
            .map((item, key) => {
              const isSelected = selectedItems.includes(item.id);
              return (
                <tr
                  key={key}
                  className={`transition 
                  ${
                    theme === "dark"
                      ? "hover:bg-SecondaryDarkTheme/10"
                      : "hover:bg-SecondaryLightTheme/10"
                  }`}
                >
                  <td className="flex items-center py-5 gap-3">
                    <button
                      onClick={() => handleSelectItem(item.id)}
                      className={`cursor-pointer border rounded-full flex items-center justify-center w-4.5 h-4.5 transition-colors
                      ${
                        isSelected
                          ? "bg-PrimaryLightTheme text-white border-PrimaryLightTheme"
                          : "border-PrimaryLightTheme"
                      }`}
                    >
                      {isSelected && <FiCheck className="w-4 h-4" />}
                    </button>

                    {item.imageUrl && (
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        title={item.name}
                        className="rounded-lg w-12 h-12"
                      />
                    )}

                    <span
                      className={`font-semibold 
                      ${
                        theme === "dark"
                          ? "text-TextDarkTheme"
                          : "text-TextLightTheme"
                      }`}
                    >
                      {item.name}
                    </span>
                  </td>

                  <td
                    className={`font-semibold 
                    ${
                      item.isActive
                        ? theme === "dark"
                          ? "text-PrimaryDarkTheme"
                          : "text-PrimaryLightTheme"
                        : theme === "dark"
                        ? "text-TextDarkTheme/70"
                        : "text-TextLightTheme/70"
                    }`}
                  >
                    {item.isActive ? "Ativo" : "Inativo"}
                  </td>

                  <td className="flex gap-3 justify-end">
                    <button
                      className={`px-3 py-1 rounded-lg cursor-pointer hover:opacity-70 
                      ${
                        theme === "dark"
                          ? "bg-BackgroundLightTheme/20 text-TextDarkTheme"
                          : "bg-BackgroundDarkTheme/20 text-TextLightTheme"
                      }`}
                    >
                      Editar
                    </button>
                    <button
                      className={`px-3 py-1 rounded-lg cursor-pointer hover:opacity-70 
                      ${
                        theme === "dark"
                          ? "bg-RedDarkTheme text-TextDarkTheme"
                          : "bg-RedLightTheme text-TextLightTheme"
                      }`}
                    >
                      Deletar
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
