import './App.css'
import "leaflet/dist/leaflet.css";
import { Card } from "@mui/material";
import { MapContainer, TileLayer } from "react-leaflet";

function App() {
  return (
    <>
      <h1>Leaflet</h1>
      <Card
        variant="outlined"
        sx={{
          width: 300,
          height: 300,
        }}
      >
        <MapContainer
          id="map"
          center={[51.505, -0.09]}
          zoom={13}
          scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </Card>
    </>
  );
}

export default App;
