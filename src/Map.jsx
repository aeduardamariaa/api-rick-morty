import 'leaflet/dist/leaflet.css';

import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';

import "leaflet-defaulticon-compatibility";

import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'
import { NavBar } from "./components/NavBar";

export default function Map() {

    return(
        <>
            <div>
                <NavBar/>
            </div>
            <div>
                <h2>Mapa</h2>
                <div>
                    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} style={{width:"100%", height:"400px"}}>
                        <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[51.505, -0.09]}>
                            <Popup>
                            <a href="https://maps.app.goo.gl/iF8zsG51GoSGXe5S6" target='_blank'>Google Maps</a>
                            </Popup>
                        </Marker>
                    </MapContainer>
                </div>
            </div>
        </>
    )
}