import React from "react";

const ProductInfo = ({ title, price, reviews, rating, shippingInfo, freeShipping }) => {
  return (
    <div className="space-y-4">
      {/* 제품 제목 */}
      <h1 className="text-2xl font-bold">{title}</h1>

      {/* 리뷰 및 평점 */}
      <div className="flex items-center space-x-2">
        <span>
          {"★".repeat(rating)}{"☆".repeat(5 - rating)}
        </span>
        <span className="text-sm text-gray-500">{reviews}개의 리뷰 보기</span>
      </div>

      {/* 가격 정보 */}
      <div className="text-3xl font-bold text-red-500">{price}</div>

      {/* 배송 정보 */}
      <ul className="list-disc pl-5 text-sm text-gray-600">
        <li>{shippingInfo}</li>
        <li>{freeShipping}</li>
      </ul>
    </div>
  );
};

export default ProductInfo;
