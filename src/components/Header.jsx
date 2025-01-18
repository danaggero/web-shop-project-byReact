
function Header() {
  return (
    <div className="bg-beige flex justify-between items-center px-5 py-2 mt-5">
      <div id="logo" className="text-2xl font-extrabold">
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
  );
}

export default Header;