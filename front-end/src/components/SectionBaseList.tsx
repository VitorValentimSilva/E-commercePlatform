import type { JSX } from "react";
import CardInformation from "./CardInformation";

interface InfoCard {
  title: string;
  info: string;
  icon: JSX.Element;
}

interface DashboardSectionProps {
  cards: InfoCard[];
}

export default function SectionBaseList({ cards }: DashboardSectionProps) {
  return (
    <section>
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

      <div></div>

      <div></div>
    </section>
  );
}
