import axios from 'axios';
import type{ WasteItem } from './types/Waste.ts';

export const fetchSkips = async (): Promise<WasteItem[]> => {
    try {
        const response = await axios.get<WasteItem[]>(
            'https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft'
        );
        return response.data;
    } catch (error) {
        console.error('Error fetching skips:', error);
        throw Error("Failed to fetch skips")
    }
};