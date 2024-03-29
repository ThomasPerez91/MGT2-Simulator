import { Badge } from "@/components/ui/badge";

interface DesignDirectionItemProps {
  item: number;
  firstLabel: string;
  secondLabel: string;
}

export const DesignDirectionItem = ({
  item,
  firstLabel,
  secondLabel,
}: DesignDirectionItemProps) => {
  return (
    <div className="flex items-center pr-4">
      <div className="flex-none mr-2">
        <Badge variant="datas">{item}</Badge>
      </div>
      <div className="flex-grow max-w-32 text-right mr-2 text-xs font-semibold">
        {firstLabel}
      </div>
      <div className="flex-grow max-w-64">
        <div className="bg-gray-300 h-4 rounded-full relative shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]">
          <span
            className="bg-white h-6 w-6 absolute top-0 -ml-2 -mt-1 z-10 shadow rounded-full cursor-pointer"
            style={{ left: `${item * 9.8}%` }}
          ></span>
          <span
            className="bg-blue-500 h-4 absolute left-0 top-0 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]"
            style={{ width: `${item * 10}%` }}
          ></span>
        </div>
      </div>
      <div className="flex-grow max-w-28 text-left ml-2 text-xs font-semibold">
        {secondLabel}
      </div>
    </div>
  );
};
