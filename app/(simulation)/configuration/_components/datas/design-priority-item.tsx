import Image from "next/image";

interface DesignPriorityItemProps {
  item: { value: number; priority: string };
  label: string;
  path: string;
}

export const DesignPriorityItem = ({
  item,
  label,
  path,
}: DesignPriorityItemProps) => {
  return (
    <div className="flex items-center pr-4">
      <div className="flex-grow max-w-32 text-right text-xs font-semibold">
        {label}
      </div>
      <div className="flex-none mx-2">
        <Image src={path} alt={label} width={24} height={24} />
      </div>
      <div className="flex-grow max-w-64">
        <div className="bg-gray-300 h-4 rounded-full relative shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]">
          <span
            className="bg-white h-6 w-6 absolute top-0 -ml-2 -mt-1 z-10 shadow rounded-full cursor-pointer"
            style={{ left: `${item.value * 198}%` }}
          ></span>
          <span
            className="bg-blue-500 h-4 absolute left-0 top-0 rounded-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.6)]"
            style={{ width: `${item.value * 200}%` }}
          ></span>
        </div>
      </div>
      <div className="flex-none ml-2 pb-1">
        <span className="text-sm font-semibold text-blue-500">
          {item.priority}
        </span>
      </div>
    </div>
  );
};
