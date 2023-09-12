// import './App.css'
import "leaflet/dist/leaflet.css";
import { Card } from "@mui/material";
import { MapContainer, TileLayer } from "react-leaflet";

const Map = () => {
    return (
        <>
        <Card
        variant="outlined"
        sx={{
          width: 400,
          height: 350,
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

export default Map;