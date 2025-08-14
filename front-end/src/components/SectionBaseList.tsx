import { useEffect, useState, type JSX } from "react";
import CardInformation from "./CardInformation";
import FilterFields from "./FilterFields";
import List from "./List";
import type { ListCategory } from "../types/categoryType";
import { useCategory } from "../hooks/useCategory";

interface InfoCard {
  title: string;
  info: string;
  icon: JSX.Element;
}

interface DashboardSectionProps {
  cards: InfoCard[];
  nameSection: string;
}

export default function SectionBaseList({
  cards,
  nameSection,
}: DashboardSectionProps) {
  const { getListCategory } = useCategory();
  const [categories, setCategories] = useState<ListCategory[]>([]);
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const getTableHeaders = () => {
    switch (nameSection.toLowerCase()) {
      case "categoria":
        return ["Nome", "Status"];
      case "produtos":
        return ["Product", "Price", "Stock", "Actions"];
      case "orders":
        return ["Order ID", "Customer", "Total", "Status", "Actions"];
      default:
        return ["Column 1", "Column 2", "Column 3"];
    }
  };

  useEffect(() => {
    async function fetchCategories() {
      try {
        const data = await getListCategory();
        setCategories(data);
      } catch (error) {
        console.error("Erro ao buscar categorias:", error);
      }
    }

    fetchCategories();
  }, [getListCategory]);

  return (
    <section className="flex flex-col gap-8">
      <div className="flex gap-8">
        {cards.map((item, key) => (
          <CardInformation
            key={key}
            title={item.title}
            info={item.info}
            icon={item.icon}
          />
        ))}
      </div>

      <FilterFields
        name={nameSection}
        options={categories}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
      />

      <List
        thList={getTableHeaders()}
        options={categories}
        selectedItems={selectedItems}
        setSelectedItems={setSelectedItems}
      />
    </section>
  );
}
