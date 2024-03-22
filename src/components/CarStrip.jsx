import { useEffect } from "react";
import { useReducer, useRef } from "react";
import "./carstrip.css";

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
      <div className="flow">
        {cars.map((item, i) => (
          <div className="individual" key={i + 1}>
            <img src={item.link} alt={i} />
            <h3>{item.carName}</h3>
          </div>
        ))}
      </div>
    </>
  );
}
