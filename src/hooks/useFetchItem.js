import { useState, useEffect } from "react";
import EventItem from "../assets/data/EventItem.json";

const useFetchItems = (category) => {
    const [filteredItems, setFilteredItems] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        try {
            const items = category === "ALL" ? EventItem : EventItem.filter(item => item.category === category);
            setFilteredItems(items);
            setIsLoading(false);
        } catch (error) {
            setError(error);
            setIsLoading(false);
        }
    }, [category]);

    return { filteredItems, isLoading, error };
};

export default useFetchItems;
