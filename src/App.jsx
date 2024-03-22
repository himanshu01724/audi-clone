import Body from "./components/Body";
import Header from "./components/Header";
import Map from "./components/Map";
import Fourth from "./components/Fourth";

export default function App() {
  return (
    <>
      <div className="landing-page">
        <Header />
        <Body />
        <Map />
        <Fourth />
      </div>
    </>
  );
}
