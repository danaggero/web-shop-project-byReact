import axios from "axios";

const API_BASE_URL = "https://your-backend-api.com"; // 백엔드 API 엔드포인트

// 제품 상세 정보를 가져오는 API
export const fetchProductDetails = async (productId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products/${productId}`);
    return response.data; // 서버에서 반환된 데이터
  } catch (error) {
    console.error("Failed to fetch product details:", error);
    throw error;
  }
};

// 사이즈 정보 등 추가 데이터도 포함 가능
export const fetchSizeInfo = async (productId) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/products/${productId}/sizes`);
    return response.data; // 사이즈 정보 반환
  } catch (error) {
    console.error("Failed to fetch size info:", error);
    throw error;
  }
};
