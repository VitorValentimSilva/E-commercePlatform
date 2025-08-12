import { TbCategory2, TbTag } from "react-icons/tb";
import { FiPlus } from "react-icons/fi";
import SectionBaseList from "../components/SectionBaseList";

export default function Category() {
  const infoCardCategory = [
    {
      title: "Total de Categorias",
      info: "4",
      icon: <TbCategory2 className="w-6 h-6" />,
    },
    {
      title: "Ativos",
      info: "3",
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
