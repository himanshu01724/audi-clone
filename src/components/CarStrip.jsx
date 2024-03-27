import { useEffect } from "react";
import { useReducer, useRef } from "react";
import "./carstrip.css";
import first from "../../public/images/first.png";
import second from "../../public/images/second.png";
import third from "../../public/images/third.png";
import fourth from "../../public/images/fourth.png";
import fifth from "../../public/images/fifth.png";
import sixth from "../../public/images/sixth.png";
import seventh from "../../public/images/seventh.png";

const initialState = { cars: [] };

function reducer(state, action) {
  switch (action.type) {
    case "feedData":
      return { ...state, cars: action.payload };
  }
}

export default function CarStrip() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const { cars } = state;

  useEffect(() => {
    fetchCars();
  }, []);

  async function fetchCars() {
    try {
      const response = await fetch(`http://localhost:5001/cars`);
      if (!response.ok) {
        throw new Error(`Error in fetching request netwroking error`);
      }
      const data = await response.json();
      dispatch({ type: "feedData", payload: data });
    } catch (err) {
      console.error(err);
    }
  }

  {
    console.log(cars);
  }

  return (
    <>
      {/* <div className="flow">
        {cars.map((item, i) => (
          <div className="individual" key={i + 1}>
            <img src={item.link} alt={i} />
            <h3>{item.carName}</h3>
          </div>
        ))}
      </div> */}
      <div className="flow">
        <div className="individual">
          <img src={first} alt="ntoghji" />
          <h3>A4</h3>
        </div>
        <div className="individual">
          <img src={second} alt="ntoghji" />
          <h3>Q3</h3>
        </div>
        <div className="individual">
          <img src={third} alt="ntoghji" />
          <h3>A6</h3>
        </div>
        <div className="individual">
          <img src={fourth} alt="ntoghji" />
          <h3>Q8</h3>
        </div>
        <div className="individual">
          <img src={fifth} alt="ntoghji" />
          <h3>A5</h3>
        </div>
        <div className="individual">
          <img src={sixth} alt="ntoghji" />
          <h3>e-tron</h3>
        </div>
        <div className="individual">
          <img src={seventh} alt="ntoghji" />
          <h3>A6</h3>
        </div>
        <div className="individual">
          <img src={fifth} alt="ntoghji" />
          <h3>A6</h3>
        </div>
      </div>
    </>
  );
}
