import React from "react";
import { Link } from "react-router-dom";
import useAuthStore from "../store/authStore";
import Users from "../assets/data/dummy.json"



function SideBar({ isSidebarOpen, setIsSidebarOpen }) {
  
    const { isLoggedIn, currentUser } = useAuthStore();


    return (
    <>
      {/* 사이드바 */}
      <div 
        className={`fixed top-0 left-0 h-full w-96 bg-white shadow-lg transition-transform duration-300 z-50 
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-5 flex justify-between items-center border-b h-24">
        {
            isLoggedIn && currentUser 
            ? (
            <>
              <span className="font-semibold text-xl"> {currentUser.name}</span>
               <span>님 환영합니다</span>           
            </>
            )
            :
            (<h2 className="text-xl font-bold mt-12">로그인</h2>)
        }
          {/* 닫기 버튼 */}
          <button className="text-gray-500 hover:text-black" onClick={() => setIsSidebarOpen(false)}>
            <span className="material-icons">close</span>
          </button>
        </div>
        <ul className="p-5 space-y-3">
          <li className="cursor-pointer hover:text-gray-600">
            <Link to="/" onClick={() => setIsSidebarOpen(false)}>Home</Link>
          </li>
          <li className="cursor-pointer hover:text-gray-600">
            <Link to="/NotFound" onClick={() => setIsSidebarOpen(false)}>Magazine</Link>
          </li>
          <li className="cursor-pointer hover:text-gray-600">
            <Link to="/asks" onClick={() => setIsSidebarOpen(false)}>Services</Link>
          </li>
          <li className="cursor-pointer hover:text-gray-600">
            <Link to="/events" onClick={() => setIsSidebarOpen(false)}>Events</Link>
          </li>
          <li className="cursor-pointer hover:text-gray-600">
            <Link to="/about" onClick={() => setIsSidebarOpen(false)}>About Us</Link>
          </li>
        </ul>
      </div>

      {/* 배경 클릭 시 닫힘 */}
      {isSidebarOpen && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-40"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}
    </>
  );
}

export default SideBar;
