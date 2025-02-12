const MyPageForm = () => {
    return(
        <div className="h-[1000px]">
            <div className="w-[1280px] h-[150px] flex items-center bg-black ">
                <h1 className="ml-8 mt-4 text-4xl text-white">홍길동</h1>
            </div>

            <div className="flex flex-col">
                <div className="mt-4 border-b-4">나의 쇼핑 정보</div>
                <ul className="ml-5">
                    <li>주문배송조회</li>
                    <li>취소/교환/반품 내역</li>
                    <li>상품 리뷰</li>
                </ul>
                <div className="mt-4 border-b-4">나의 계정 정보</div>
                <ul className="ml-5">
                    <li>회원정보수정</li>
                    <li>쿠폰</li>
                </ul>
            </div>

        </div>
    )
}

export default MyPageForm;