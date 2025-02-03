import "./App.css"
import {Routes, Route, Link} from "react-router-dom"
import Home from "./pages/Home";
import Login from "./pages/Login";
<<<<<<< HEAD
import Register from "./pages/Register";
=======
import NotFound from "./pages/NotFound";
>>>>>>> 5d9e0d85d7af0b5357a4acf7190eef6436c91f2a



function App() {
  return ( 
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
<<<<<<< HEAD
        <Route path="/register" element={<Register />} />
=======
        <Route path="/NotFound" element={<NotFound/>}/>
>>>>>>> 5d9e0d85d7af0b5357a4acf7190eef6436c91f2a
      </Routes>
    </>
  )
}

export default App;