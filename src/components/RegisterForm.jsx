import { useState } from "react";

function RegisterForm() {
  const [allChecked, setAllChecked] = useState(false);
  const [individualChecks, setIndividualChecks] = useState({
    age: false,
    terms: false,
    privacy: false,
    marketing: false,
  });

  // 모두 동의 체크박스 클릭 시 실행되는 함수
  const handleAllCheck = () => {
    const newCheckState = !allChecked;
    setAllChecked(newCheckState);
    setIndividualChecks({
      age: newCheckState,
      terms: newCheckState,
      privacy: newCheckState,
      marketing: newCheckState,
    });
  };

  // 개별 체크박스 클릭 시 실행되는 함수
  const handleIndividualCheck = (key) => {
    setIndividualChecks((prev) => {
      const updatedChecks = { ...prev, [key]: !prev[key] };
      const isAllChecked = Object.values(updatedChecks).every((value) => value);
      setAllChecked(isAllChecked);
      return updatedChecks;
    });
  };

  return (
    <div id="main" className="flex flex-col h-[1200px] mx-[400px] my-[100px]">
      <h2 id="login__title" className="mt-[100px] mb-[60px] text-2xl font-bold">
        회원가입
      </h2>

      <form className="flex flex-col">
        {/* 이메일 입력 */}
        <label htmlFor="email-address" className="flex flex-col mb-[7px]">
          <span className="text-[rgba(0,0,0,0.7)] mb-[7px]">이메일주소</span>
          <input
            id="login-id"
            type="email"
            placeholder="example@email.com"
            className="text-2xl border-[rgba(0,0,0,0.7)] mt-[10px] focus:outline-none focus:border-black"
          />
        </label>

        {/* 비밀번호 입력 */}
        <label htmlFor="register-password" className="flex flex-col mb-[7px]">
          <span className="text-[rgba(0,0,0,0.7)] mb-[7px]">비밀번호</span>
          <input
            id="login-password"
            type="password"
            placeholder="비밀번호를 입력하세요"
            className="text-2xl border-[rgba(0,0,0,0.7)] mt-[10px] focus:outline-none focus:border-black"
          />
        </label>

        {/* 전화번호 입력 */}
        <label htmlFor="phone-number" className="flex flex-col mb-[7px]">
          <span className="text-[rgba(0,0,0,0.7)] mb-[7px]">전화번호</span>
          <input
            id="phone-number"
            type="tel"
            className="text-2xl border-[rgba(0,0,0,0.7)] mt-[10px] focus:outline-none focus:border-black"
          />
        </label>

        {/* 주소 입력 */}
        <label htmlFor="address" className="flex flex-col mb-[7px]">
          <span className="text-[rgba(0,0,0,0.7)] mb-[7px]">주소</span>
          <input
            id="address"
            type="text"
            className="text-2xl border-[rgba(0,0,0,0.7)] mt-[10px] focus:outline-none focus:border-black"
          />
        </label>

        {/* 이용약관 */}
        <div id="이용약관" className="flex flex-col h-[350px] bg-slate-100 my-10 text-[rgba(0,0,0,0.9)]">
          <div className="h-20 flex items-center">
            <input
              className="w-[20px] h-[20px] mr-2"
              type="checkbox"
              checked={allChecked}
              onChange={handleAllCheck}
            />
            <span> 모두 동의합니다</span>
          </div>
          <div className="h-10 flex items-center">
            <input
              type="checkbox"
              checked={individualChecks.age}
              onChange={() => handleIndividualCheck("age")}
              className="mr-2  w-[15px] h-[15px]"
            />
            <span> [필수] 만 14세 이상입니다</span>
          </div>
          <div className="h-10 flex items-center">
            <input
              type="checkbox"
              checked={individualChecks.terms}
              onChange={() => handleIndividualCheck("terms")}
              className="mr-2 w-[15px] h-[15px]"
            />
            <span> [필수] 이용약관 동의</span>
          </div>
          <div className="h-10 flex items-center">
            <input
              type="checkbox"
              checked={individualChecks.privacy}
              onChange={() => handleIndividualCheck("privacy")}
              className="mr-2 w-[15px] h-[15px]"
            />
            <span> [필수] 개인 정보 수집 및 이용 동의</span>
          </div>
          <div className="h-10 flex items-center">
            <input
              type="checkbox"
              checked={individualChecks.marketing}
              onChange={() => handleIndividualCheck("marketing")}
              className="mr-2 w-[15px] h-[15px]"
            />
            <span> [선택] 광고성 정보 수신 모두 동의</span>
          </div>
        </div>

        {/* 회원가입 버튼 */}
        <input
          type="submit"
          value="본인인증하고 가입하기"
          className="bg-black text-white text-lg rounded-md border-none mb-[5px] cursor-pointer w-[384px] h-[57px] mx-auto"
        />
      </form>
    </div>
  );
}

export default RegisterForm;
