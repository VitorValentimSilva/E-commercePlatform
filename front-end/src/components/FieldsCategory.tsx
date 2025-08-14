import { useEffect, useState } from "react";
import { useCategory } from "../hooks/useCategory";
import { useTheme } from "../hooks/useTheme";
import Input from "./Input";
import Textarea from "./Textarea";
import type { CategoryAll } from "../types/categoryType";
import Select from "./Select";

export default function FieldsCategory() {
  const { theme } = useTheme();
  const { getAllCategory } = useCategory();
  const [categories, setCategories] = useState<CategoryAll[]>([]);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const data = await getAllCategory();
        setCategories(data);
      } catch (error) {
        console.error("Erro ao buscar categorias:", error);
      }
    }

    fetchCategories();
  }, [getAllCategory]);

  return (
    <div className="flex justify-between gap-10">
      <div className="w-2/3 flex flex-col gap-8">
        <div
          className={`border rounded-lg p-6 flex flex-col gap-4
          ${
            theme === "dark"
              ? "bg-SurfaceDarkTheme border-SurfaceLightTheme/40"
              : "bg-SurfaceLightTheme border-SurfaceDarkTheme/40"
          }`}
        >
          <h2
            className={`text-2xl font-bold
            ${theme == "dark" ? "text-TextDarkTheme" : "text-TextLightTheme"}`}
          >
            Informações Básicas
          </h2>

          <div className="flex flex-col gap-4">
            <Select
              options={categories}
              placeholder="Nenhuma"
              label="Categoria Pai"
            />

            <Input
              name="Nome da Categoria"
              id="nameCategory"
              type="text"
              placeholder="Digite o nome da categoria"
              required={true}
            />
          </div>
        </div>

        <div
          className={`border rounded-lg p-6 flex flex-col gap-4
          ${
            theme === "dark"
              ? "bg-SurfaceDarkTheme border-SurfaceLightTheme/40"
              : "bg-SurfaceLightTheme border-SurfaceDarkTheme/40"
          }`}
        >
          <h2
            className={`text-2xl font-bold
            ${theme == "dark" ? "text-TextDarkTheme" : "text-TextLightTheme"}`}
          >
            Image
          </h2>

          <div>
            <Input
              name="Imagem"
              id="image"
              type="file"
              placeholder="Arraste e solte as imagens aqui ou clique para fazer upload"
            />
          </div>
        </div>
      </div>

      <div className="w-1/3 flex flex-col gap-8">
        <div
          className={`border rounded-lg p-6 flex flex-col gap-4
          ${
            theme === "dark"
              ? "bg-SurfaceDarkTheme border-SurfaceLightTheme/40"
              : "bg-SurfaceLightTheme border-SurfaceDarkTheme/40"
          }`}
        >
          <h2
            className={`text-2xl font-bold
            ${theme == "dark" ? "text-TextDarkTheme" : "text-TextLightTheme"}`}
          >
            Publicação
          </h2>

          <div>
            <Input name="Ativo" id="isActive" type="checkbox" />
          </div>
        </div>

        <div
          className={`border rounded-lg p-6 flex flex-col gap-4
          ${
            theme === "dark"
              ? "bg-SurfaceDarkTheme border-SurfaceLightTheme/40"
              : "bg-SurfaceLightTheme border-SurfaceDarkTheme/40"
          }`}
        >
          <h2
            className={`text-2xl font-bold
            ${theme == "dark" ? "text-TextDarkTheme" : "text-TextLightTheme"}`}
          >
            SEO
          </h2>

          <div className="flex flex-col items-center gap-4">
            <Input
              name="Meta Título"
              id="metaTitle"
              type="text"
              placeholder="Digite o meta título (até 60 caracteres)"
            />

            <Textarea
              name="Meta Descrição"
              id="metaDescription"
              placeholder="Digite a meta descrição (até 160 caracteres)"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
