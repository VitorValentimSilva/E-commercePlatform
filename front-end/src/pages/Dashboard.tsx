import {
  MdAttachMoney,
  MdBorderAll,
  MdOutlinePerson2,
  MdOutlineShoppingCart,
} from "react-icons/md";
import CardInformation from "../components/CardInformation";

export default function Dashboard() {
  const infoCardDashboard = [
    {
      title: "Total de Vendas",
      info: "R$84,920",
      icon: <MdAttachMoney className="w-6 h-6" />,
      percentage: "+12%",
    },
    {
      title: "Total de Pedidos",
      info: "1,294",
      icon: <MdOutlineShoppingCart className="w-6 h-6" />,
      percentage: "+5%",
    },
    {
      title: "Total de Clientes",
      info: "8,431",
      icon: <MdOutlinePerson2 className="w-6 h-6" />,
      percentage: "+8%",
    },
    {
      title: "Valor médio do pedido",
      info: "R$65.30",
      icon: <MdBorderAll className="w-6 h-6" />,
      percentage: "+3%",
    },
  ];

  return (
    <section>
      <div className="flex gap-8">
        {infoCardDashboard.map((item, key) => (
          <CardInformation
            key={key}
            title={item.title}
            info={item.info}
            icon={item.icon}
            percentage={item.percentage}
          />
        ))}
      </div>
    </section>
  );
}
