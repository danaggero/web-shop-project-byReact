import React from "react";

const CartItem = ({ item, onQuantityChange, onRemove }) => {
  const {
    id,
    name = "No name",
    brand = "No brand",
    price = 0,
    salePrice = 0,
    discount = 0,
    quantity = 1,
    size = "N/A",
    imageUrl = "src/assets/images/NonePic.png"
  } = item;

  return (
    <div className="flex items-center justify-between border-b border-gray-300 py-4">
      <div className="flex items-center">
        <input type="checkbox" className="mr-4" />
        <img src={imageUrl} alt={name} className="w-20 h-20 rounded" />
        <div className="ml-4">
          <h3 className="text-lg font-bold">{brand}</h3>
          <p className="text-gray-500">{name}</p>
          <p className="text-gray-400">사이즈: {size}</p>
          <p className="text-red-500 font-bold">
            {discount}% {salePrice.toLocaleString()}원
          </p>
          <p className="text-gray-500 line-through">{price.toLocaleString()}원</p>
        </div>
      </div>
      <div className="flex items-center">
        <button
          className="px-2 py-1 border border-gray-400 rounded"
          onClick={() => onQuantityChange(id, quantity - 1)}
        >
          -
        </button>
        <span className="px-4">{quantity}</span>
        <button
          className="px-2 py-1 border border-gray-400 rounded"
          onClick={() => onQuantityChange(id, quantity + 1)}
        >
          +
        </button>
        <p className="ml-4">{(salePrice * quantity).toLocaleString()}원</p>
        <button
          className="ml-4 text-red-500"
          onClick={() => onRemove(id)}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default CartItem;
