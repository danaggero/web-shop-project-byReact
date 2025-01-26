import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import padding1 from "../assets/images/padding1.jpg";
import padding2 from "../assets/images/padding2.jpg";
import main3 from "../assets/images/main3.jpg";


const ImageSlider = () => {
  const settings = {
    dots: true, // 하단의 점 네비게이션
    infinite: true, // 무한 스크롤
    speed: 500, // 슬라이드 속도 (ms)
    slidesToShow: 1, // 한 번에 보여줄 슬라이드 개수
    slidesToScroll: 1, // 한 번에 넘어가는 슬라이드 개수
    autoplay: true, // 자동 재생
    autoplaySpeed: 3000, // 자동 재생 간격
  };

  return (
    <div className="w-full max-h-[900px]">
      <h2>슬라이드 메뉴</h2>
      <Slider {...settings}>
        <div>
          <img className="w-full h-[900px]"
            src={padding1}
            alt="Slide 1"
          />
        </div>
        <div>
          <img className="w-full h-[900px]"
            src={padding2}
            alt="Slide 2"
          />
        </div>
        <div>
          <img className="w-full h-[900px]"
            src={main3}
            alt="Slide 3"
          />
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;