import React from "react";

const CartItem = ({ item, onQuantityChange, onRemove }) => {
  return (
    <div className="flex items-center justify-between border-b border-gray-300 py-4">
      <div className="flex items-center">
        <input type="checkbox" className="mr-4" />
        <img src={item.imageUrl} alt={item.name} className="w-20 h-20 rounded" />
        <div className="ml-4">
          <h3 className="text-lg font-bold">{item.brand}</h3>
          <p className="text-gray-500">{item.name}</p>
          <p className="text-gray-400">사이즈: {item.size}</p>
          <p className="text-red-500 font-bold">
            {item.discount}% {item.salePrice.toLocaleString()}원
          </p>
          <p className="text-gray-500 line-through">{item.price.toLocaleString()}원</p>
        </div>
      </div>
      <div className="flex items-center">
        <button
          className="px-2 py-1 border border-gray-400 rounded"
          onClick={() => onQuantityChange(item.id, item.quantity - 1)}
        >
          -
        </button>
        <span className="px-4">{item.quantity}</span>
        <button
          className="px-2 py-1 border border-gray-400 rounded"
          onClick={() => onQuantityChange(item.id, item.quantity + 1)}
        >
          +
        </button>
        <p className="ml-4">{(item.salePrice * item.quantity).toLocaleString()}원</p>
        <button
          className="ml-4 text-red-500"
          onClick={() => onRemove(item.id)}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default CartItem;
