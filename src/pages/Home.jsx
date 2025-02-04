import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";
import ImageSlider from "../components/ImageSlider";

const Home = () => {
  return (
    <div id="wrap" className="mx-auto w-[1280px] h-[1400px] bg-gray-100">
      <Header />
      <ImageSlider />
      <Main />
      <Footer />
    </div>
  )
}

export default Home;