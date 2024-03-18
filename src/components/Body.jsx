import second from "../assets/Landing_page/second.jpg";
import "./body.css";
import CarStrip from "./CarStrip";

export default function Body() {
  return (
    <>
      <div className="second-img">
        <img src={second} alt="nothing" className="testing" />
        <div className="overlap">H</div>
      </div>
      <div className="models">
        <h2>Models</h2>
      </div>

      <CarStrip />
    </>
  );
}
