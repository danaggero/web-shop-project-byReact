// useItems.js
import { useState, useEffect } from 'react';
import FetchItem from '../api/itemApi';

const useItems = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        FetchItem().then(fetchedItems => setItems(fetchedItems));
    }, []);

    return items;
};

export default useItems;
