export const mapConfig = {
    center: (window.innerWidth > 580) ? [36.652032, -93.57193] : [36.6957695, -93.405762],
    kcLatAndLong: [36.677220, -93.339190],
    accessToken: 'sk.eyJ1IjoiZnN0ZXZlcmVubmVyIiwiYSI6ImNraDIyc2pocTAwbzcycXFyd3hhMHkwN3EifQ.v1hz9oxAyWEVITUNZIqOZg',
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    url: 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
    maxZoom: 18,
    zoom: 10.5,
    scrollWheelZoom: false,
    id: 'mapbox/light-v10',
    tileSize: 512,
    zoomOffset: -1,
    popupText: 'Best Western Branson Inn and Conference Center, 8514 E State Highway 76 Branson West, Missouri 65737'
};

export const contactFormUrl = 'http://reformedbible.org/contact.php';
export const apiUrl = 'http://localhost:3002';

export const isEmpty = (obj) => {
    for(let key in obj) {
        if (obj.hasOwnProperty(key)) {
            return false;
        }
    }
    return true;
};