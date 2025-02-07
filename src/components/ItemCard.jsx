import React from "react";

const ItemCard = ({ item }) => {
    console.log("Items:", item); 
    if (!item || item.length === 0) {
        return <div>아이템 정보를 불러올 수 없습니다.</div>;
    }

    return (
    <div style={{borderRadius: 20, backgroundColor: "white", display: "flex", justifyContent: "center", alignItems: "center"}}>
        <div key={item.id} style={{textAlign: "center"}}>
            <div>
                <img
                    src={item.imageUrl}
                    alt={item.title}
                    style={{width: "100%", borderRadius: "10px"}}
                />
            </div>
            <div
                style={{
                    backgroundColor: "#000",
                    color: "#fff",
                    padding: "5px 10px",
                    borderRadius: "5px",
                    display: "inline-block",
                    marginTop: "10px",
                }}
            >
                {item.category}
            </div>
            <h3 style={{margin: "10px 0"}}>{item.title}</h3>
            <p style={{ color : "#666" }}>
                {item.startDate} ~ {item.endDate}
            </p>
        </div>
    </div>
    );
};

export default ItemCard;
