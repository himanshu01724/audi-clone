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
  const stripRef = useRef(null);

  const scrollLeft = () => {};

  const scrollRight = () => {
    console.log("clicked");
    if (stripRef.current) {
      const currentScroll = stripRef.current.scrollLeft;
      const targetScroll = currentScroll + 900; // Adjust scroll distance as needed

      const scrollWithDelay = () => {
        const scrollAmount = Math.min(
          targetScroll - stripRef.current.scrollLeft,
          10
        ); // Adjust scroll speed here

        stripRef.current.scrollLeft += scrollAmount;

        if (stripRef.current.scrollLeft < targetScroll) {
          setTimeout(scrollWithDelay, 10); // Adjust timeout as needed
        }
      };

      scrollWithDelay();
    }
  };

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
