import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { mapConfig } from '../../../util/config';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function LeafletMap({ home }) {

    useEffect(() => {
        const light = L.tileLayer(mapConfig.url, {
            attribution: mapConfig.attribution,
            maxZoom: mapConfig.maxZoom,
            id: mapConfig.id,
            tileSize: mapConfig.tileSize,
            zoomOffset: mapConfig.zoomOffset,
            accessToken: mapConfig.accessToken,

        });
        const rbcLoc = L.marker(mapConfig.kcLatAndLong).bindPopup(mapConfig.popupText);
        const city = L.layerGroup([rbcLoc]);
        L.map('mapid', {
            center: mapConfig.center,
            zoom: mapConfig.zoom,
            scrollWheelZoom: mapConfig.scrollWheelZoom,
            layers: [light, city]
        });
    }, []);

    return (
        <Row id="mapid">
        <Col sm={1}></Col>
        <Col sm={4} id="serviceTimes">
          <h3 class="text-center">Times and Location</h3>
          <br />
          <p class="text-center lead" id="bibleStudy">Bible Study | {home.bibleStudyTime}</p>
          <p class="text-center lead">Worship | {home.worshipTime}</p>
          <hr />
          <p class="text-center street">{home.locationStreet}</p>
          <p class="text-center">{home.locationCity}</p>
          <div id="getDirections">
            <a href={home.googleMapUrl} target="_blank" rel="noreferrer" class="btn">Get Directions</a>
          </div>
          
        </Col>
        <Col sm={1}></Col>
        <Col sm={6}></Col>
      </Row>
    );
}