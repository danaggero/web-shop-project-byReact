import { useState, useEffect } from "react";
import { FetchItem } from "../api/itemApi";

const useFetchItem = () => {
    const [item, setItem] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await FetchItem();
                setItem(data);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);
    return { item, isLoading, error};

};

export default useFetchItem;