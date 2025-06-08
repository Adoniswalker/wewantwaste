import { useState } from 'react';
import SkipCard from './SkipCard';
import type {WasteItem} from "../types/Waste.ts";

interface SkipListProps {
    skips: WasteItem[];
}

function SkipList({ skips }: SkipListProps) {
    const [selectedSkip, setSelectedSkip] = useState<WasteItem | null>(null);

    const handleSelect = (skip: WasteItem) => {
        setSelectedSkip(skip);
        // Add logic for selection (e.g., store in context or trigger next step)
    };

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
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
                <div className="p-4 text-center">
                    <button
                        className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                        onClick={() => console.log('Proceed with:', selectedSkip)} // Replace with actual logic
                    >
                        Continue
                    </button>
                </div>
            )}
        </div>
    );
}

export default SkipList;