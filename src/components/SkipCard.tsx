import type {WasteItem} from "../types/Waste.ts";
import small_enclosed from "../assets/small_enclosed.webp";
import big_enclosed_skip from "../assets/big_enclosed_skip.webp";
import {OctagonAlert} from "lucide-react";
import clsx from "clsx";

interface SkipCardProps {
    skip: WasteItem;
    onSelect: (skip: WasteItem) => void;
    isSelected: boolean;
}

function SkipCard({skip, onSelect, isSelected}: SkipCardProps) {
    const totalPrice = skip.price_before_vat * (1 + skip.vat / 100);
    const image = skip.size > 17 ? big_enclosed_skip : small_enclosed;

    return (
        <div
            className={clsx(
                "relative w-60 max-w-80 flex flex-col justify-between max-h-180 shadow-sm shrink grow basis-80 rounded-lg overflow-hidden font-sans",
                {"border-4 border-solid border-blue-900": isSelected}
            )}
        >
            <div className="w-full h-72 bg-gradient-to-b from-yellow-500 to-orange-600">
                <img
                    src={image}
                    alt={`${skip.size} Yard Skip`}
                    className="w-full h-full object-cover opacity-70"
                />
                {!skip.allowed_on_road && (
                    <div
                        className="absolute top-2 left-2 bg-yellow-300 text-black px-2 py-1 rounded text-xs flex items-center gap-1">
                        <OctagonAlert className="w-4 h-4"/>
                        <span>Not allowed on the road</span>
                    </div>
                )}
            </div>
            <div className="p-4 bg-gray-200 h-[40%]">
                <h3 className="text-2xl font-bold">{skip.size} Yard Skip</h3>
                <p className="text-sm">Hire for {skip.hire_period_days} days</p>
                <p className="text-2xl text-blue-600">£{totalPrice.toFixed(2)}</p>
                {skip.transport_cost && (
                    <p className="text-sm text-gray-200">
                        Transport: £{skip.transport_cost}
                    </p>
                )}
                <button
                    onClick={() => onSelect(skip)}
                    className={clsx(
                        "mt-2 px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 w-full text-sms",
                        {"bg-blue-900": isSelected}
                    )}
                    aria-label={`Select ${skip.size} yard skip`}
                >
                    {isSelected ? "Selected" : "Select This Skip"}
                </button>
            </div>
        </div>
    );
}

export default SkipCard;
