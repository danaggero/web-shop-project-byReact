import react, {useState, useEffect} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useHistory } from "react-router-dom";
import InquiryList from "../components/InquiryList";
const Asks = () => {
    const [ currentTab, clickTab ] = useState("1:1 문의 홈")
    const selectMenuHandler = (type) => {
        clickTab(type);
    };

    const history = useHistory();

    const handleButtonClick = () => {
        history.push("/write-inquiry");
    }; 

    const [inquiries, setInquiries] = useState([]); 

    return (
        <div>
            <Header/>
            <div className={`${styles.tab} ${currentTab === "1:1 문의 홈" ? styles.focused : ''}`}
                 onClick={() => selectMenuHandler("1:1 문의 홈")}>
                <span>1:1 문의 홈</span>
            </div>
            <div className={`${styles.tab} ${currentTab === "1:1 문의 내역" ? styles.focused : ''}`}
                    onClick={() => selectMenuHandler("1:1 문의 내역")}>
                        <span>1:1 문의 내역</span>
            </div>

            <div>
                {currentTab === "1:1 문의 홈" && (
                    <div>
                        <h2>문의 유형 선택</h2>
                        <p>문의 유형을 선택해 주세요. 고객센터 상담보다 더 빠르게 해결할 수 있습니다.</p>
                        <h3>찾으시는 내용이 없나요?</h3>
                        <button onClick={handleButtonClick}>1:1 문의 쓰기</button>
                    </div>
                )}
                {currentTab === "1:1 문의 내역" && (
                    <div>
                        {inquiries.length === 0 ? (
                            <div>
                                <h5>문의하신 내역이 없습니다.</h5>
                                <p>이전 문의 보러가기</p>
                            </div>
                        ) : (
                            <InquiryList inquiries={inquiries} />
                        )}
                    </div>
                )}
            </div>

            <Footer/>
        </div>
    );
}