import React from "react";
import ProductImage from "../components/products/ProductImage";
import ProductInfo from "../components/products/ProductInfo";
import PurchaseActions from "../components/products/PurchaseActions";
import ProductDetails from "../components/products/ProductDetails";
import useProductData from "../../hooks/useProductData";

const ProductDetailPage = ({ productId }) => {
  const { product, sizeInfo, isLoading, error } = useProductData(productId);

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  if (error) {
    return <div>오류가 발생했습니다: {error.message}</div>;
  }

  return (
    <div className="max-w-screen-lg mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* 왼쪽: 제품 이미지 */}
        <ProductImage imageUrl={product.imageUrl} altText={product.title} />

        {/* 오른쪽: 제품 정보 */}
        <div>
          <ProductInfo
            title={product.title}
            price={product.price}
            reviews={product.reviews}
            rating={product.rating}
            shippingInfo={product.shippingInfo}
            freeShipping={product.freeShipping}
          />
          <PurchaseActions productId={productId} />
        </div>
      </div>

      {/* 추가 정보 */}
      <ProductDetails productId={productId} sizeInfo={sizeInfo} />
    </div>
  );
};

export default ProductDetailPage;
