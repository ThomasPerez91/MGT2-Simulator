import { Badge } from "@/components/ui/badge";
import { genresData } from "@/constants/genres";
import { paths } from "@/constants/paths";
import Image from "next/image";

import {
  designDirectionLabels,
  designPriorityLabels,
  focusDesignLabels1,
  focusDesignLabels2,
} from "@/constants/labels";

interface DatasProps {
  selectedGenre: string;
  selectedSubGenre?: string;
}

export const Datas = ({ selectedGenre, selectedSubGenre }: DatasProps) => {
  if (!selectedGenre)
    return <div id="datas" className="flex flex-col bg-gray-100"></div>;

  const datas = genresData[selectedGenre];

  const targets = datas.targets;
  const designPriorities = datas.designPriorities;
  const designFocus =
    selectedSubGenre && selectedSubGenre !== "none"
      ? datas.designFocus.find((item) => item.subGenre === selectedSubGenre)
      : datas.designFocus.find((item) => item.subGenre === "none");

  return (
    <div id="datas" className="w-[32rem] flex flex-col bg-gray-100 rounded-md">
      <div className="w-full mb-2">
        <div className="bg-gradient-to-t from-blue-900 from-10% to-blue-500 to-90% rounded-t-md mb-1">
          <span className="ml-4 text-slate-200 text-sm pb-1">Design focus</span>
        </div>
        <div className="space-y-2.5 mb-1">
          <div className="flex flex-col space-y-1.5">
            {designFocus &&
              designFocus["designFocus1-4"].map((item, index) => (
                <div key={`df14-${index}`} className="flex items-center pr-4">
                  <div className="flex-none mr-2">
                    <Badge variant="datas">{item}</Badge>
                  </div>
                  <div className="flex-grow max-w-32 text-right mr-2 text-xs font-semibold">
                    {focusDesignLabels1[index]}
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
                </div>
              ))}
          </div>
          <div className="flex flex-col space-y-1.5">
            {designFocus &&
              designFocus["designFocus5-8"].map((item, index) => (
                <div key={`df58-${index}`} className="flex items-center pr-4">
                  <div className="flex-none mr-2">
                    <Badge variant="datas">{item}</Badge>
                  </div>
                  <div className="flex-grow max-w-32 text-right mr-2 text-xs font-semibold">
                    {focusDesignLabels2[index]}
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
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="w-full mb-2">
        <div className="bg-gradient-to-t from-blue-900 from-10% to-blue-500 to-90% mb-1">
          <span className="ml-4 text-slate-200 text-sm">Design direction</span>
        </div>
        <div className="space-y-2.5 mb-1">
          <div className="flex flex-col space-y-1.5">
            {designFocus &&
              designFocus["designDirection"].map((item, index) => (
                <div key={`dd-${index}`} className="flex items-center pr-4">
                  <div className="flex-none mr-2">
                    <Badge variant="datas">{item}</Badge>
                  </div>
                  <div className="flex-grow max-w-32 text-right mr-2 text-xs font-semibold">
                    {designDirectionLabels[index][0]}
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
                    {designDirectionLabels[index][1]}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
      <div className="w-full mb-2">
        <div className="bg-gradient-to-t from-blue-900 from-10% to-blue-500 to-90% mb-1">
          <span className="ml-4 text-slate-200 text-sm pb-1">
            Design priority
          </span>
        </div>
        <div className="space-y-2.5 mb-1">
          <div className="flex flex-col space-y-1.5">
            {designPriorities &&
              designPriorities.map((item, index) => (
                <div key={`dp-${index}`} className="flex items-center pr-4">
                  <div className="flex-grow max-w-32 text-right text-xs font-semibold">
                    {designPriorityLabels[index]}
                  </div>
                  <div className="flex-none mx-2">
                    <Image
                      src={paths[index]}
                      alt={designPriorityLabels[index]}
                      width={24}
                      height={24}
                    />
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
                  <div className="flex-none ml-2">
                    <span className="text-sm font-semibold text-blue-500">
                      {item.priority}
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
