import { FiPlus } from "react-icons/fi";
import { TbTag } from "react-icons/tb";
import { LuBoxes } from "react-icons/lu";
import SectionBaseList from "../components/SectionBaseList";

export default function Products() {
  const infoCardProducts = [
    {
      title: "Total de Produtos",
      info: "4",
      icon: <LuBoxes className="w-6 h-6" />,
    },
    {
      title: "Ativos",
      info: "3",
      icon: <TbTag className="w-6 h-6" />,
    },
    {
      title: "Adicionado este mês",
      info: "2",
      icon: <FiPlus className="w-6 h-6" />,
    },
  ];

  return <SectionBaseList cards={infoCardProducts} nameSection="Produtos" />;
}
