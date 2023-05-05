// Sunday Morning Sermons
window.sermon = {
  title: 'The Gentiles Enter the Kingdom of God',
  scripture: 'Acts 10:23-48',
  date: 'Sunday, April 30, 2023',
  src: 'https://www.youtube.com/embed?v=khqvPZpI1BU',
  speaker: 'Steve Renner',
  series: 'The Book of Acts',
  rbcYTPageUrl: 'https://www.youtube.com/channel/UCRUvVoFRRCasFxQHwCH8EsA'
};

window.announcements = [
  {
    heading:'Last Sunday Fellowship Potluck Luncheon',
    title: 'May 28',
    details: 'The last Sunday of each month we will not have our regular evening service. Instead, we will have a fellowship meal following our Sunday morning service.',
    date: 'Last Sunday of each month',
    time: '12:30 pm'
  },
  {
    heading:'Study of the Westminster Confession of Faith',
    title: '',
    details: 'Our church\'s confessional statement is the Westminster Confession of faith. It is a systematic outlining of a theological understanding of what the Scriptures teach us about God, Jesus, Man, etc. Join in on learning more about this wonderful confession of faith on Tuesday Nights.',
    date: 'Tuesdays',
    time: '6:00 pm'
  },
];

window.config = {
 contactFormUrl: 'https://reformedbible.org/contact.php'
//   contactFormUrl: 'http://localhost:8000/contact.php'
};

window.mapConfig = {
center: (window.innerWidth > 580) ? [36.69, -93.570] : [36.7073328,-93.48],
kcLatAndLong: [36.70754351149493, -93.37235320214961],
accessToken: 'sk.eyJ1IjoiZnN0ZXZlcmVubmVyIiwiYSI6ImNraDIyc2pocTAwbzcycXFyd3hhMHkwN3EifQ.v1hz9oxAyWEVITUNZIqOZg',
attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
url: 'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
maxZoom: 18,
zoom: 10.5,
scrollWheelZoom: false,
id: 'mapbox/light-v10',
tileSize: 512,
zoomOffset: -1,
popupText: 'Reformed Bible Church, 18942-H Branson West, Missouri 65737'
};

window.givingUrl = 'https://tithe.ly/give?c=4503597';