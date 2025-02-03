import React from "react";
import useFetchItem from "../hooks/useFetchItem";

const ItemCard = () => {
    const {item, isLoading, error} = useFetchItem();

    if (isLoading) {
        return <div>로딩 중</div>;
    }

    if (error) {
        return <div>에러가 발생했습니다.</div>;
    }

    if(!item) {
        return <div>아이템 정보를 불러올 수 없습니다.</div>;
    }

    return (
        <div>
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
    );
};

export default ItemCard;