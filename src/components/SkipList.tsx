import { useState } from "react";
import SkipCard from "./SkipCard";
import type { WasteItem } from "../types/Waste.ts";

interface SkipListProps {
  skips: WasteItem[];
}

function SkipList({ skips }: SkipListProps) {
  const [selectedSkip, setSelectedSkip] = useState<WasteItem | null>(null);

  const handleSelect = (skip: WasteItem) => {
    setSelectedSkip(skip);
  };

  return (
    <div className="mx-auto container px-4 sm:px-6 lg:px-8">
      <div className="flex flex-wrap justify-center items-stretch gap-8 p-4 mb-16">
        {skips.map((skip) => (
          <SkipCard
            key={skip.id}
            skip={skip}
            onSelect={handleSelect}
            isSelected={selectedSkip?.id === skip.id}
          />
        ))}
      </div>
      {selectedSkip && (
        <footer className="fixed bottom-0 left-0 w-full bg-gray-900 text-white flex flex-col sm:flex-row justify-between items-center p-2 sm:p-3 md:p-4">
          <div className="text-sm sm:text-base flex flex-col sm:flex-row items-center mb-2 sm:mb-0">
            <span>{selectedSkip.size} Yard Skip</span>
            <span className="text-blue-400 ml-2">
              £{selectedSkip.price_before_vat.toFixed(2)}
            </span>
            <span className="ml-2">
              {selectedSkip.hire_period_days} day hire
            </span>
          </div>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 w-full sm:w-auto">
            <button
              className="px-4 py-1 bg-gray-700 text-white rounded hover:bg-gray-600 w-full sm:w-auto"
              onClick={() => setSelectedSkip(null)}
            >
              Back
            </button>
            <button
              className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 w-full sm:w-auto"
              onClick={() => console.log("Proceed with:", selectedSkip)}
            >
              Continue
            </button>
          </div>
        </footer>
      )}
    </div>
  );
}

export default SkipList;
