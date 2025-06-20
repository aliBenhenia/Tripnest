const axios = require('axios');

const fetchTopMoroccanCities = async () => {
  const url = 'https://wft-geo-db.p.rapidapi.com/v1/geo/countries/MA/cities';
  const headers = {
    'X-RapidAPI-Key': "5b8a5a02f3msh2cbb0edd5b9cad9p1f7c83jsn0f12ae7e07fe",
    'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
  };

  const params = {
    limit: 10,
    sort: '-population',
  };

  const response = await axios.get(url, { headers, params });

  // Transform to match your Place interface
  return response.data.data.map((city) => ({
    id: city.id,
    name: city.name,
    slug: city.name.toLowerCase().replace(/\s+/g, '-'),
    imageUrl: `https://source.unsplash.com/featured/?${city.name},morocco`,
    properties: Math.floor(Math.random() * 30) + 1,
    rating: parseFloat((Math.random() * 2 + 3).toFixed(1)),
    location: 'Morocco',
  }));
};

module.exports = { fetchTopMoroccanCities };
