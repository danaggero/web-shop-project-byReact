import {Routes, Route, Link} from "react-router-dom"
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
import ProductDetailPage from "./pages/ProductDetail";
import Events from "./pages/Event";
import Cart from "./pages/Cart";  
import Asks from "./pages/Asks";
import AsksWrite from "./pages/AsksWrite";
import MyPageForm from "./components/MyPageForm";
import MyPage from "./pages/MyPage";

function App() {
  return ( 
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/NotFound" element={<NotFound/>}/>
        <Route path="/product/:productId" element={<ProductDetailPage />} />
        <Route path="/events" element={<Events />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/asks" element={<Asks />} />
        <Route path="/asks/write" element={<AsksWrite />} />
      </Routes>
    </>
  )
}

export default App;