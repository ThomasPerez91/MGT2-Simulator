import { DesignFocusList } from "./design-focus-list";
import { DesignPriorityList } from "./design-priority-list";
import { DesignDirectionList } from "./design-direction-list";

import { paths } from "@/constants/paths";
import { genresData } from "@/constants/genres";
import {
  designDirectionLabels,
  designPriorityLabels,
  focusDesignLabels1,
  focusDesignLabels2,
} from "@/constants/labels";
import { TargetItems } from "./target-items";

interface DatasProps {
  selectedGenre: string;
  selectedSubGenre?: string;
}

export const Datas = ({ selectedGenre, selectedSubGenre }: DatasProps) => {
  if (!selectedGenre)
    return (
      <div id="datas" className="w-[32rem] flex flex-col bg-gray-100"></div>
    );

  const datas = genresData[selectedGenre];
  const targets = datas.targets;
  const designPriorities = datas.designPriorities;
  const designFocus =
    selectedSubGenre && selectedSubGenre !== "none"
      ? datas.designFocus.find((item) => item.subGenre === selectedSubGenre)
      : datas.designFocus.find((item) => item.subGenre === "none");

  if (!designFocus || !designPriorities)
    return (
      <div id="datas" className="w-[32rem] flex flex-col bg-gray-100"></div>
    );

  return (
    <div className="w-[32rem] space-y-3">
      <div className=" flex flex-col bg-gray-100 rounded-md shadow-lg">
        <div className="mb-1">
          <div className="bg-gradient-to-t from-blue-900 from-10% to-blue-500 to-90% rounded-t-md mb-1">
            <span className="ml-4 text-slate-200 text-sm pb-1">
              Targets group
            </span>
          </div>
          <TargetItems targets={targets} />
        </div>
      </div>
      <div
        id="datas"
        className="w-full flex flex-col bg-gray-100 rounded-md shadow-lg"
      >
        <div className="w-full mb-2">
          <div className="bg-gradient-to-t from-blue-900 from-10% to-blue-500 to-90% rounded-t-md mb-1">
            <span className="ml-4 text-slate-200 text-sm pb-1">
              Design focus
            </span>
          </div>
          <div className="space-y-2.5 mb-1">
            <DesignFocusList
              items={designFocus["designFocus1-4"]}
              labels={focusDesignLabels1}
            />
            <DesignFocusList
              items={designFocus["designFocus5-8"]}
              labels={focusDesignLabels2}
            />
          </div>
        </div>
        <div className="w-full mb-2">
          <div className="bg-gradient-to-t from-blue-900 from-10% to-blue-500 to-90% mb-1">
            <span className="ml-4 text-slate-200 text-sm">
              Design direction
            </span>
          </div>
          <div className="space-y-2.5 mb-1">
            <DesignDirectionList
              items={designFocus["designDirection"]}
              labels={designDirectionLabels}
            />
          </div>
        </div>
        <div className="w-full mb-2">
          <div className="bg-gradient-to-t from-blue-900 from-10% to-blue-500 to-90% mb-1">
            <span className="ml-4 text-slate-200 text-sm pb-1">
              Design priority
            </span>
          </div>
          <div className="space-y-2.5 mb-1">
            <DesignPriorityList
              priorities={designPriorities}
              labels={designPriorityLabels}
              paths={paths}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
