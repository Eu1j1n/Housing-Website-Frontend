import location1 from "../assets/images/location1.png";
import location2 from "../assets/images/location2.png";
import location3 from "../assets/images/location3.png";
import location4 from "../assets/images/location4.png";
import "./styles/Location.css";
import { FaWalking } from "react-icons/fa";

function Location() {
  return (
    <div className="location-container">
      <div className="location-sub-container">
        <h2 className="location-title">입지환경</h2>
      </div>
      <div className="location-map-container">
        <span className="location-highlight">
          <span className="location-keyword">역세권의 마지막 기회!</span>
          <img src={location2} alt="community-img" className="community-img1" />
          <img src={location1} alt="community-img2" className="community-img2" />
          <br />
          신광교 클라우드 시티, 더 가까이 더 빠르게 연결되는 삶을 누리세요.{" "}
          <br />
          교통의 중심, 당신의 미래를 완성합니다.
          <br />
          <span className="location-subway-description">
            <FaWalking />
            도보 : 원천역 약 15분 <br />
            <FaWalking />
            도보 : 흥덕역 약 15분
          </span>
          <img src={location3} alt="community-img3" className="community-img3" />
          <img src={location4} alt="community-img4" className="community-img4" />
        </span>
      </div>
    </div>
  );
}

export default Location;
