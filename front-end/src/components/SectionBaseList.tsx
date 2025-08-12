import type { JSX } from "react";
import CardInformation from "./CardInformation";
import FilterFields from "./FilterFields";

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

      <FilterFields name={`${nameSection}`} />

      <div></div>
    </section>
  );
}
