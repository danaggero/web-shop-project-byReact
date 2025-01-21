import Header from "../components/Header";
import LoginForm from "../components/LoginForm";
import Footer from "../components/Footer";


const Login = () => {
  return (
    <div id="wrap" className="mx-auto w-[1280px] h-[1080px] bg-gray-100">
      <Header />
      <LoginForm />
      <Footer />
    </div>
  )
}

export default Login;