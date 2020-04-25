const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
  direccion: {
    alias: 'd',
    desc: 'direccion de la ciudad para obtener el clima',
    demand: true
  }
}).argv;

const getInfo = async (direccion) => {
  try {
    const obtenerLugar = await lugar.getLugarLatLng(direccion);
    const obtenerTemperatura = await clima.getClima(obtenerLugar.lat, obtenerLugar.lng);
    return `La temperatura de ${obtenerLugar.direccion} es: ${obtenerTemperatura}`;
  } catch (e) {
    return `No se pudo determinar el clima de ${direccion}`;
  }
}


getInfo(argv.direccion)
  .then(console.log)
  .catch(console.log);

