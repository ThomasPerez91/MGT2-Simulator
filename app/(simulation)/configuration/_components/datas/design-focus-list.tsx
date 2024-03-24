import { DesignFocusItem } from "./design-focus-items";

interface DesignFocusListProps {
  items: number[];
  labels: string[];
}

export const DesignFocusList = ({ items, labels }: DesignFocusListProps) => {
  return (
    <div className="flex flex-col space-y-1.5">
      {items.map((item, index) => (
        <DesignFocusItem
          key={`df14-${index}`}
          item={item}
          label={labels[index]}
          width={item * 10}
        />
      ))}
    </div>
  );
};
