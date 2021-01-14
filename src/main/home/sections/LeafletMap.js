import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { mapConfig } from '../../../util/config';

export default function LeafletMap() {
    return (
        <MapContainer center={mapConfig.center} zoom={mapConfig.zoom} scrollWheelZoom={mapConfig.scrollWheelZoom}>
            <TileLayer
                attribution={mapConfig.attibution}
                url={mapConfig.url}
                maxZoom={mapConfig.maxZoom}
                id={mapConfig.id}
                tileSize={mapConfig.tileSize}
                zoomOffset={mapConfig.zoomOffset}
                accessToken={mapConfig.accessToken}
            />
            <Marker position={mapConfig.kcLatAndLong}>
                <Popup>{mapConfig.popupText}</Popup>
            </Marker>
        </MapContainer>
    );
}