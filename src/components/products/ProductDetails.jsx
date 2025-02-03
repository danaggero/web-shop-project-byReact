import React from "react";

const ProductDetails = ({ productId, sizeInfo }) => {
  return (
    <div className="mt-6">
      <h2 className="text-lg font-bold">상품정보</h2>
      <p>상품번호: {productId}</p>

      <h3 className="text-lg font-bold mt-4">사이즈정보</h3>
      <table className="table-auto border-collapse border w-full mt-2">
        <thead>
          <tr>
            <th className="border px-4 py-2">사이즈명</th>
            <th className="border px-4 py-2">총길이</th>
            <th className="border px-4 py-2">어깨 너비</th>
            <th className="border px-4 py-2">가슴 너비</th>
            <th className="border px-4 py-2">소매 길이</th>
          </tr>
        </thead>
        <tbody>
          {sizeInfo.map((size, index) => (
            <tr key={index}>
              <td className="border px-4 py-2">{size.size}</td>
              <td className="border px-4 py-2">{size.totalLength}cm</td>
              <td className="border px-4 py-2">{size.shoulder}cm</td>
              <td className="border px-4 py-2">{size.chest}cm</td>
              <td className="border px-4 py-2">{size.sleeve}cm</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductDetails;
