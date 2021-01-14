import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { mapConfig } from '../../../util/config';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function LeafletMap({ home }) {
    return (

            <MapContainer className="row" id="mapid" center={mapConfig.center} zoom={mapConfig.zoom} scrollWheelZoom={mapConfig.scrollWheelZoom} style={{ minHeight: '100%'}}>
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
                <Col sm={1}></Col>
                <Col sm={4} id="serviceTimes">
                    <h3 className="text-center">Times and Location</h3>
                    <br />
                    <p className="text-center lead" id="bibleStudy">Bible Study | {home.bibleStudyTime}</p>
                    <p className="text-center lead">Worship | {home.worshipTime}</p>
                    <hr />
                    <p className="text-center street">{home.locationStreet}</p>
                    <p className="text-center">{home.locationCity}</p>
                    <div id="getDirections">
                        <a href="https://goo.gl/maps/TWWNN8Qij1n7BYWc9" target="_blank" className="btn" rel="noreferrer">Get Directions</a>
                    </div>
                </Col>
                <Col sm={1}></Col>
                <Col sm={6}> </Col>
            </MapContainer>

        
    );
}