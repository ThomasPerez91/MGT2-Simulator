import React from "react";
import { DesignPriorityItem } from "./design-priority-item";

interface DesignPriorityListProps {
  priorities: { value: number; priority: string }[];
  labels: string[];
  paths: string[];
}

export const DesignPriorityList = ({
  priorities,
  labels,
  paths,
}: DesignPriorityListProps) => {
  return (
    <div className="flex flex-col space-y-1.5">
      {priorities.map((item, index) => (
        <DesignPriorityItem
          key={`dp-${index}`}
          item={item}
          label={labels[index]}
          path={paths[index]}
        />
      ))}
    </div>
  );
};
