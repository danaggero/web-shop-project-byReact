import axios from "axios";

const BASE_URL = "https://your-api-endpoint.com";

// 문의 목록 가져오기
export const getInquiries = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/asks`);
    return response.data;
  } catch (error) {
    console.error("문의 목록을 불러오는 중 오류 발생:", error);
    throw error;
  }
};

// 새로운 문의 작성
export const createInquiry = async (inquiryData) => {
  try {
    const response = await axios.post(`${BASE_URL}/asks`, inquiryData);
    return response.data;
  } catch (error) {
    console.error("문의 작성 중 오류 발생:", error);
    throw error;
  }
};

// 특정 문의 삭제
export const deleteInquiry = async (id) => {
  try {
    const response = await axios.delete(`${BASE_URL}/asks/${id}`);
    return response.data;
  } catch (error) {
    console.error("문의 삭제 중 오류 발생:", error);
    throw error;
  }
};
