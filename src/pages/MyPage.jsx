import Header from "../components/Header";
import MyPageForm from "../components/MyPageForm";
import Footer from "../components/Footer";


const MyPage = () => {
  return (
    <div id="wrap" className="mx-auto w-[1280px] h-[1400px] bg-gray-100">
      <Header />
      <MyPageForm />
      <Footer />
    </div>
  )
}

export default MyPage;