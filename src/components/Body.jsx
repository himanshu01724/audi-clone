import second from "../assets/Landing_page/second.jpg";
import third from "../assets/Landing_page/third.jpg";
import fourth from "../assets/Landing_page/fourth.jpg";
import first from "../assets/Landing_page/first.jpg";
import "./body.css";
import CarStrip from "./CarStrip";

export default function Body() {
  return (
    <>
      <div className="second-img">
        <img src={second} alt="nothing" className="testing" />

        <div className="overlap">
          <h1>A matter of character .</h1>
          <p>
            With progressive design that suits your lifestyle. <br />
            Progress you can feel. The new, fully electric <br />
            Audi Q8 e-tron and Audi Q8 Sportback e-tron range. <br />
            Future is an attitude
          </p>
          <span className="overlap-btn">
            <button style={{ border: "0px" }}>Explore Audi Q8 e-tron</button>
            <button
              style={{
                border: "1px solid white",
                background: "transparent",
                color: "white",
                marginLeft: "10px",
                cursor: "pointer",
              }}
            >
              Explore Audi Q8 Sportback e-tron
            </button>
          </span>
        </div>
      </div>

      <div className="models">
        <p>
          <u>Models</u>
        </p>
      </div>

      <CarStrip />

      <div className="explorer">
        <img src={third} alt="nothing" style={{ height: "500px" }} />
        <span>
          <p>Audi Virtual Showroom</p>
          <button>Explore More</button>
        </span>
      </div>

      <div className="third-category">
        <img src={fourth} alt="nothing" id="thirdImage" />
        <div className="container">
          <h1>The home of electric</h1>
          <p>
            Seeing the world with different eyes is what drives us. Discover
            more about our vision of the future of mobility. Learn more about
            the technology in the Audi e-tron along with the charging options,
            range calculations and its benefits.
          </p>
          <br />
          <span className="container-btn">
            <button>e-tron hub</button>
            <button
              style={{
                marginLeft: "5px",
                background: "transparent",
                color: "black",
                border: "1px solid black",
                width: "200px",
              }}
            >
              #FutureIsAnAttitude
            </button>
          </span>
        </div>
      </div>

      <div className="augmented">
        <img src={first} alt="nothing" />
        <span className="augmented-content">
          <h1>Augumented Reality</h1>
          <button>e-tron</button>
          <button
            style={{
              marginLeft: "5px",
              background: "transparent",
              color: "black",
              border: "1px solid black",
              width: "200px",
            }}
          >
            e-tron Sportback
          </button>
        </span>
      </div>
    </>
  );
}
