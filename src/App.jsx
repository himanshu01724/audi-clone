import Body from "./components/Body";
import Header from "./components/Header";
import Map from "./components/Map";
import Fourth from "./components/Fourth";
import Fifth from "./components/Fifth";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <div className="landing-page">
        <Header />
        <Body />
        <Map />
        <Fourth />
        <Fifth />
        <Footer />
      </div>
    </>
  );
}
