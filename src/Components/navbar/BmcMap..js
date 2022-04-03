import React from 'react'
import "./BmcMap.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";


function BmcMap() {

    return (
        <div className='bmcMap'>
            <MapContainer center={[18.948586398705633, 72.83543292916639]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[18.948586398705633, 72.83543292916639]}>
                    <Popup>
                        Mumbai Municipal Corporation<br /> Mumbai.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default BmcMap
