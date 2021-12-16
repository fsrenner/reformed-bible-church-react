import React, { useEffect } from 'react';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
// import { mapConfig } from '../../../util/config';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const mapConfig = window.mapConfig;

export default function LeafletMap({ home }) {

  const DefaultIcon = L.icon({
    iconUrl: icon
  });

  L.Marker.prototype.options.icon = DefaultIcon;

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
        <Row id="mapid" className="locationInformation">
        <Col sm={1}></Col>
        <Col sm={4} id="serviceTimes">
          <h3 className="text-center">Times and Location</h3>
          <br />
          <p className="text-center lead" id="bibleStudy">Bible Study | {home.bibleStudyTime}</p>
          <p className="text-center lead">Worship | {home.worshipTime}</p>
          <hr />
          {(home.locationName) ? <p className="text-center street">{home.locationName}</p> : null}
          <p className="text-center street">{home.locationStreet}</p>
          <p className="text-center">{home.locationCity}</p>
          <div id="getDirections">
            <a href={home.googleMapUrl} target="_blank" rel="noreferrer" className="btn">Get Directions</a>
          </div>
          
        </Col>
        <Col sm={1}></Col>
        <Col sm={6}></Col>
      </Row>
    );
}