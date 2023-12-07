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
    title: 'July 30',
    details: 'The last Sunday of each month we will not have our regular evening service. Instead, we will have a fellowship meal following our Sunday morning service.',
    date: 'Last Sunday of each month',
    time: '12:30 pm'
  },
  {
    heading:'Fellowship Down by the River',
    title: 'At the Applegate Farm',
    details: 'Come and enjoy some time of fun and fellowship on the James River at the Applegate\'s farm in Galena. Bring a potluck item to share for dinner and a swimsuit or a fishing pole and come hang out with the church family',
    date: 'Friday, July 21',
    time: '4:00 pm'
  },
  {
    heading:'New Member Class',
    title: '',
    details: 'For those interested in becoming a covenant member of Reformed Bible Church, we will be holding a New Member class on Sunday, July 23 for those interested.',
    date: 'Sunday, July 23',
    time: '6:30 pm'
  },
];

window.leadership = {
  government: `Our form of government is presbyterian in nature. The Greek word presbuterus is the most used term for elder in the New Testament. Therefore, we are an elder governed church.`,
  elder: `Paul emphasized a plurality of elders in the early church (Titus 1:5; Acts 20: 17).  We believe multiple elders are necessary for accountability in morality, accountability in teaching the Truth of Scripture, shared leadership to avoid burnout, shared responsibility for church discipline, as well as many other benefits for the local congregation.  Church leadership should not rest on the decisions of one man.  An elder is a biblically qualified man who has been nominated, trained, examined, and ordained to see to the affairs of the church.  Scripture gives explicit qualifications for an elder (I Timothy 3: 1-7).`,
  deacon: `Deacon means, literally, “one who waits on tables”.  Acts 6 records the Apostles appointing the first deacons so they could better attend to prayer and the ministry of The Word.  A deacon is a biblically qualified man who has been nominated, trained, examined, and ordained to minister to the physical needs of the church.  Scripture gives explicit qualifications for deacons (I Timothy 3: 8-13).`,
  leaders: [
    {
      title: 'Elder, Lead Pastor',
      name: 'Steve Renner',
      image: './resources/steve_renner.jpg'
    },
    {
      title: 'Elder, Teaching Pastor',
      name: 'Bill Finkenbinder',
      image: './resources/blank-person.png'
    },
    {
      title: 'Elder Candidate',
      name: 'Ryan Marty',
      image: './resources/blank-person.png'
    },
    {
      title: 'Deacon, Worship Leader',
      name: 'Adam Barker',
      image: './resources/blank-person.png'
    },
    {
      title: 'Deacon, Finances',
      name: 'Chris Baker',
      image: './resources/chris_baker.jpeg'
    },
    {
      title: 'Deacon, Property and Facilities',
      name: 'Steve Dunlap',
      image: './resources/blank-person.png'
    },
    {
      title: 'Deacon, Church Clerk',
      name: 'Landon Steele',
      image: './resources/blank-person.png'
    },
    {
      title: 'Deacon, Compassion and Benevolence',
      name: 'Lawrence Powers',
      image: './resources/blank-person.png'
    }
  ]
};

// window.config = {
//  contactFormUrl: 'https://reformedbible.org/contact.php'
//   contactFormUrl: 'http://localhost:8000/contact.php'
// };

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