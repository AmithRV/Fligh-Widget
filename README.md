import axios from "axios";

const options = {
  method: 'GET',
  url: 'https://madrid-barajas-airport-flights.p.rapidapi.com/MAD/departures',
  headers: {
    'X-RapidAPI-Key': 'bfc1c2e7d6msh4378ffc7c0bb67bp11a07ajsn949cfd2d1909',
    'X-RapidAPI-Host': 'madrid-barajas-airport-flights.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
