
function Header() {
  return (
    <>
      {/* Header-top */}
      <div id="header-top" className="bg-beige flex justify-between items-center p-5 mt-5">
        <div id="logo" className="text-3xl font-extrabold">
          LOGO
        </div>
        <ul className="flex list-none gap-5">
          <li className="flex items-center gap-1">
            <span className="material-icons">shopping_cart</span>
            <a href="#">
              장바구니
            </a>
          </li>
          <li className="flex items-center gap-1">
            <span className="material-icons">account_circle</span>
            <a href="#">
              마이페이지
            </a>
          </li>
          <li className="flex items-center gap-1">
            <span className="material-icons">assignment</span>
            <a href="#">
              회원가입
            </a>
          </li>
          <li className="flex items-center gap-1">
            <span className="material-icons">login</span>
            <a href="/login.html">
              로그인
            </a>
          </li>
        </ul>
      </div>

      {/* Header-middle */}
      <div id="header-middle" className="flex mt-5 items-center">
        <div id="nav">
          <button className="ml-5 bg-transparent w-10 h-10 bg-[url('./assets/icons/menu.svg')] bg-no-repeat bg-cover cursor-pointer">
          </button> 
        </div>
        <ul className="flex gap-16 px-14">
          <li className="cursor-pointer font-semibold">Home</li>
          <li className="cursor-pointer font-semibold">Magazine</li>
          <li className="cursor-pointer font-semibold">Services</li>
          <li className="cursor-pointer font-semibold">Events</li>
          <li className="cursor-pointer font-semibold">About Us</li>
        </ul>
        <div className="relative w-72 ml-5">
          <input
            type="text"
            placeholder="검색어를 입력하세요"
            className="w-4/5 pl-4 pr-10 py-2 border border-gray-300 rounded-full bg-white text-base outline-none transition-shadow focus:shadow-lg"
          />
          <span className="material-icons absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 cursor-pointer hover:text-black">
            search
          </span>
        </div>
      </div>
    </>

    
  );
}

export default Header;