import Header from "../components/Header";
import CategoryFilter from "../components/CategoryFilter";
import Footer from "../components/Footer";
import ItemCard from "../components/ItemCard";
import { useEffect, useState } from "react";

const Events = () => {
    const [ category, setCategory] = useState("ALL");
    const { filteredItems, isLoading, error } = useItems(category);

    if (isLoading) {
        return <div>로딩 중</div>;
    }

    if (error) {
        return <div>데이터를 불러오는 중 오류가 발생했습니다.</div>;
    }

  return (
    <div id="wrap" className="mx-auto w-[1280px] h-[1080px] bg-gray-100">
      <Header />
      <CategoryFilter category={category} setCategory={setCategory}/>
      <ItemCard items={filteredItems}/>
      <Footer />
    </div>
  )
}

export default Events;