import { useState, useEffect } from "react";
import { fetchProductDetails, fetchSizeInfo } from "../api/productApi";

const useProductData = (productId) => {
  const [product, setProduct] = useState(null); 
  const [sizeInfo, setSizeInfo] = useState([]); 
  const [isLoading, setIsLoading] = useState(true); 
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        const productDetails = await fetchProductDetails(productId);
        const sizes = await fetchSizeInfo(productId);

        setProduct(productDetails);
        setSizeInfo(sizes);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, [productId]);

  return { product, sizeInfo, isLoading, error };
};

export default useProductData;
