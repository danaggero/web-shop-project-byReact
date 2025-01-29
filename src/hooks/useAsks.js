import { useState, useEffect } from "react";
import { getInquiries, createInquiry, deleteInquiry } from "../api/inquiryApi";

const useInquiry = () => {
  const [inquiries, setInquiries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInquiries = async () => {
      try {
        setIsLoading(true);
        const data = await getInquiries();
        setInquiries(data);
      } catch (err) {
        setError(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchInquiries();
  }, []);

  // 새로운 문의 작성
  const handleCreateInquiry = async (inquiryData) => {
    try {
      const newInquiry = await createInquiry(inquiryData);
      setInquiries((prev) => [newInquiry, ...prev]);
    } catch (err) {
      console.error("문의 작성 중 오류 발생:", err);
    }
  };
  
  const handleDeleteInquiry = async (id) => {
    try {
      await deleteInquiry(id);
      setInquiries((prev) => prev.filter((inquiry) => inquiry.id !== id));
    } catch (err) {
      console.error("문의 삭제 중 오류 발생:", err);
    }
  };

  return { inquiries, isLoading, error, handleCreateInquiry, handleDeleteInquiry };
};

export default useInquiry;
