const axios = require('axios');

const getLugarLatLng = async (dir) => {
  const encodedUrl = encodeURI(dir);

  const instance = axios.create({
    baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
    headers: { "x-rapidapi-key": '17304f039amshe97763b844bfc6ap137207jsnc39ef865fb2e' }
  })

  const resp = await instance.get();

  if (resp.data.Results.length === 0) {
    throw new Error(`No hay resultados para ${direccion}`);
  }

  const data = resp.data.Results[0];
  const direccion = data.name;
  const lat = data.lat;
  const lng = data.lon;




  return {
    direccion,
    lat,
    lng
  }
}

module.exports = {
  getLugarLatLng
}

