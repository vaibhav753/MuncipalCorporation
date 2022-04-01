import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "./Map.css";

import { showDataOnMap } from "./util";

function CovidMap({ countries, casesType, center, zoom }) {
    return (
        <div className='map'>

            <MapContainer center={center} zoom={zoom}>
                <TileLayer
                    url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
                    attribution='&copy; <a href="https://www.osm.org/copyright">OpenStreetMap</a> contributors'
                />
                {/* Loop through all countries and draw circlres */}
                {showDataOnMap(countries, casesType)}
            </MapContainer>







            {/* <MapContainer center={[34.80746, -40.4796]} zoom={13} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[34.80746, -40.4796]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer> */}

        </div>
    )
}

export default CovidMap
