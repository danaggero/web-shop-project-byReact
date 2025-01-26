import Header from "../components/Header";
import Main from "../components/Main";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div id="wrap" className="mx-auto w-[1280px] h-[1400px] bg-gray-100">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default Home;