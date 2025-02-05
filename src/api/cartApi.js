import axios from "axios";

const BASE_URL = "https://your-api-endpoint.com";

// 장바구니 데이터 가져오기
export const getCartItems = async () => {
  const response = await axios.get(`${BASE_URL}/cart`);
  return response.data;
};

// 장바구니 수량 변경
export const updateCartItemQuantity = async (id, quantity) => {
  const response = await axios.put(`${BASE_URL}/cart/${id}`, { quantity });
  return response.data;
};

// 장바구니 상품 삭제
export const deleteCartItem = async (id) => {
  const response = await axios.delete(`${BASE_URL}/cart/${id}`);
  return response.data;
};

export const addToCart = async (productId, size) => {
    try {
      const response = await axios.post(`${BASE_URL}/cart`, {
        productId,
        size,
      });
      return response.data; // 장바구니 추가 성공 여부
    } catch (error) {
      console.error("Failed to add to cart:", error);
      throw error;
    }
  };