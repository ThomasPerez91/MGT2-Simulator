import { DesignDirectionItem } from "./design-direction-item";

interface DesignDirectionListProps {
  items: number[];
  labels: string[][];
}

export const DesignDirectionList = ({
  items,
  labels,
}: DesignDirectionListProps) => {
  return (
    <div className="flex flex-col space-y-1.5">
      {items.map((item, index) => (
        <DesignDirectionItem
          key={`dd-${index}`}
          item={item}
          firstLabel={labels[index][0]}
          secondLabel={labels[index][1]}
        />
      ))}
    </div>
  );
};
