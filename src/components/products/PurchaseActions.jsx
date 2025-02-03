import React, { useState } from "react";
import { addToCart } from "../../api/cartApi";

const PurchaseActions = ({ productId }) => {
  const [size, setSize] = useState("");

  const handleAddToCart = async () => {
    if (!size) {
      alert("사이즈를 선택해주세요!");
      return;
    }

    try {
      await addToCart(productId, size);
      alert("장바구니에 추가되었습니다!");
    } catch (error) {
      alert("장바구니 추가 중 문제가 발생했습니다.");
    }
  };

  return (
    <div className="space-y-4 mt-4">
      <select
        className="w-full border rounded p-2"
        value={size}
        onChange={(e) => setSize(e.target.value)}
      >
        <option value="">사이즈 선택</option>
        <option value="M">M</option>
        <option value="L">L</option>
      </select>
      <div className="flex space-x-4">
        <button
          className="flex-1 bg-gray-200 p-3 rounded"
          onClick={handleAddToCart}
        >
          장바구니 담기
        </button>
        <button className="flex-1 bg-black text-white p-3 rounded">
          바로 구매하기
        </button>
      </div>
    </div>
  );
};

export default PurchaseActions;
