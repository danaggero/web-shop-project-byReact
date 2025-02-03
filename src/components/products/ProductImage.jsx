import React from "react";

const ProductImage = ({ imageUrl, altText }) => {
  return (
    <div className="w-full">
      <img
        src={imageUrl}
        alt={altText}
        className="w-full rounded-lg shadow-lg"
      />
    </div>
  );
};

export default ProductImage;
