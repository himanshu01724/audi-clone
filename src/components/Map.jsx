import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./map.css";

export default function Map() {
  const position = [20.5937, 78.9629];

  return (
    <>
      <div className="main">
        <div className="first">
          <h1>Dealer Locator</h1>
          <button>Explore More</button>
        </div>
        <div className="second">
          <MapContainer
            center={position}
            zoom={5}
            scrollWheelZoom={true}
            className="map"
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>
        </div>
      </div>
    </>
  );
}
