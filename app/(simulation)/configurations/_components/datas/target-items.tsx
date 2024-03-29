import { Badge } from "@/components/ui/badge";

interface DesignPriorityListProps {
  targets: { value: string; label: string }[];
}

export const TargetItems = ({ targets }: DesignPriorityListProps) => {
  return (
    <div className="flex justify-center ml-2 space-x-2">
      {targets.map((target, index) => (
        <Badge variant="target" key={`target-${index}`}>
          {target.label}
        </Badge>
      ))}
    </div>
  );
};
