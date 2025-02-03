import { useState, useEffect } from "react";
import { getCartItems, updateCartItemQuantity, deleteCartItem } from "../api/cartApi";

const useCart = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // 장바구니 데이터 가져오기
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        setIsLoading(true);
        const data = await getCartItems();
        setCartItems(data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCartItems();
  }, []);

  // 수량 변경
  const handleQuantityChange = async (id, quantity) => {
    try {
      const updatedItem = await updateCartItemQuantity(id, quantity);
      setCartItems((prev) =>
        prev.map((item) =>
          item.id === id ? { ...item, quantity: updatedItem.quantity } : item
        )
      );
    } catch (err) {
      console.error("수량 변경 중 오류:", err);
    }
  };

  // 상품 삭제
  const handleRemoveItem = async (id) => {
    try {
      await deleteCartItem(id);
      setCartItems((prev) => prev.filter((item) => item.id !== id));
    } catch (err) {
      console.error("상품 삭제 중 오류:", err);
    }
  };

  return { cartItems, isLoading, error, handleQuantityChange, handleRemoveItem };
};

export default useCart;
