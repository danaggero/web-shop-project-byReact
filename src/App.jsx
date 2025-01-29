import "./App.css"
import {Routes, Route, Link} from "react-router-dom"
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";



function App() {
  return ( 
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/NotFound" element={<NotFound/>}/>
      </Routes>
    </>
  )
}

export default App;