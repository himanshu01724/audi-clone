import "./fourth.css";
import fourthC from "../assets/Landing_page/fourthC.jpg";

function Fourth() {
  return (
    <div className="fourth-main">
      <div className="fourth-first">
        <h2>
          Because you expect more from your Audi than just a drive from A to B .
          Download it now, to get more of your car on your phone.
          <br />
          <b>myAudi</b>
        </h2>
        <span className="fourth-first-btn">
          <button>myAudi Connect</button>
          <button style={{ marginLeft: "10px" }}>Audi Shop</button>
        </span>
      </div>
      <div className="fourth-second">
        <img src={fourthC} alt="this is not an image" />
      </div>
    </div>
  );
}

export default Fourth;
