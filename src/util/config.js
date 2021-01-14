export const mapConfig = {
    center: (window.innerWidth > 580) ? [36.652032, -93.57193] : [36.6957695, -93.405762],
    kcLatAndLong: [36.615940, -93.406080],
    accessToken: 'sk.eyJ1IjoiZnN0ZXZlcmVubmVyIiwiYSI6ImNraDIyc2pocTAwbzcycXFyd3hhMHkwN3EifQ.v1hz9oxAyWEVITUNZIqOZg',
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    url: 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
    maxZoom: 18,
    zoom: 10.5,
    scrollWheelZoom: false,
    id: 'mapbox/light-v10',
    tileSize: 512,
    zoomOffset: -1,
    popupText: '280 Old Still Rd, Kimberling City, MO 65686'
};

export const contactFormUrl = 'http://localhost:3300/contact';