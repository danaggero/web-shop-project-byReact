import React, { useState } from "react";

const categories = [
  "ALL",
  "브랜드",
  "컬렉션",
  "프로모션",
  "여성의류",
  "여성가방",
  "여성신발",
  "여성액세서리",
  "남성의류",
  "남성가방",
  "남성신발",
  "남성액세서리",
  "홈",
  "뷰티",
  "테크",
  "스타일아이콘",
  "위클리에세이",
  "증정&댓글 이벤트",
  "코멘터리",
  "라이브",
  "푸드",
];

const allItems = [
  { id: 1, category: "여성의류", name: "Dress" },
  { id: 2, category: "남성의류", name: "Shirt" },
  { id: 3, category: "뷰티", name: "Lipstick" },
  { id: 4, category: "테크", name: "Smartphone" },
];

const CategoryFilter = () => {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  const filteredItems =
    selectedCategory === "ALL"
      ? allItems
      : allItems.filter(item => item.category === selectedCategory);

  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap", marginBottom: "20px" }}>
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            style={{
              margin: "5px",
              padding: "10px 15px",
              background: selectedCategory === category ? "#000" : "#fff",
              color: selectedCategory === category ? "#fff" : "#000",
              cursor: "pointer",
              border: "none",
              outline: "none",
            }}
          >
            {category}
          </button>
        ))}
      </div>

      <div>
        {filteredItems.length > 0 ? (
          filteredItems.map(item => (
            <div key={item.id} style={{ marginBottom: "10px" }}>
              {item.name} ({item.category})
            </div>
          ))
        ) : (
          <p>해당 카테고리에 아이템이 없습니다.</p>
        )}
      </div>
    </div>
  );
};

export default CategoryFilter;
