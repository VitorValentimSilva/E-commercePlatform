import { TbCategory2, TbTag } from "react-icons/tb";
import { FiPlus } from "react-icons/fi";
import SectionBaseList from "../components/SectionBaseList";
import { useCategory } from "../hooks/useCategory";
import { useEffect, useState } from "react";
import type { CategoryActive } from "../types/categoryType";

export default function Category() {
  const { getCategoryActive } = useCategory();
  const [totalCategory, setTotalCategory] = useState(0);
  const [activeCount, setActiveCount] = useState(0);

  useEffect(() => {
    async function fetchCategories() {
      try {
        const categories = await getCategoryActive();
        const countAll = categories.length;
        const countActive = categories.filter(
          (c: CategoryActive) => c.isActive
        ).length;

        setTotalCategory(countAll);
        setActiveCount(countActive);
      } catch (error) {
        console.error("Erro ao buscar categorias ativas:", error);
      }
    }

    fetchCategories();
  }, [getCategoryActive]);

  const infoCardCategory = [
    {
      title: "Total de Categorias",
      info: String(totalCategory),
      icon: <TbCategory2 className="w-6 h-6" />,
    },
    {
      title: "Ativos",
      info: String(activeCount),
      icon: <TbTag className="w-6 h-6" />,
    },
    {
      title: "Adicionado este mês",
      info: "3",
      icon: <FiPlus className="w-6 h-6" />,
    },
  ];

  return <SectionBaseList cards={infoCardCategory} nameSection="Categoria" />;
}
