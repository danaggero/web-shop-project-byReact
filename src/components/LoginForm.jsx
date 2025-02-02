import kakaoLoginImg from "../assets/images/kakao_login_medium_wide.png";

function LoginForm() {

    return(

        <div id="main" className="flex flex-col h-[850px] mx-[400px] my-[100px]">
            <h2 id="login__title" className="mt-[100px] mb-[60px] text-2xl font-bold">로그인</h2>
        
        <form className="flex flex-col">
            <label htmlFor="login-id" className="flex flex-col mb-[7px]">
            <span className="text-[rgba(0,0,0,0.7)] mb-[7px]">아이디</span>
            <input
                id="login-id"
                type="text"
                className="text-2xl border-[rgba(0,0,0,0.7)] mt-[10px] focus:outline-none focus:border-black"
            />
            </label>

            <label htmlFor="login-password" className="flex flex-col mb-[7px]">
            <span className="text-[rgba(0,0,0,0.7)] mb-[7px]">비밀번호</span>
            <input
                id="login-password"
                type="password"
                className="text-2xl border-[rgba(0,0,0,0.7)] mt-[10px] focus:outline-none focus:border-black"
            />
            </label>

            <div className="flex justify-between mb-[60px]">
                <a className="text-[rgba(0,0,0,0.7)] text-sm no-underline" href="#">회원가입</a>
                <a className="text-[rgba(0,0,0,0.7)] text-sm no-underline" href="#">아이디 / 비밀번호 찾기</a>
            </div>

            <input
            type="submit"
            value="로그인"
            className="bg-black text-white text-lg py-[10px] rounded-md border-none mb-[5px] cursor-pointer w-[384px] h-[57px] mx-auto"
            />
        </form>

        <button className="w-full max-w-sm mx-auto mt-2 rounded-md overflow-hidden">
        <img className="w-full h-auto" src={kakaoLoginImg} alt="카카오 로그인" />
        </button>

        {/* <button className="bg-kakao text-black text-lg py-[10px] rounded-md border-none">
            카카오 로그인
        </button> */}


        
        </div>
    )
}

export default LoginForm;