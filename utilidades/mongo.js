const mongoose = require('mongoose');

const mongoIp = process.env.MONGO_HOST || '127.0.0.1';
const mongoPort = process.env.MONGO_PORT || 3001;
const mongoDb = process.env.MONGO_DB || 'bdprueba';

const mongoUri = `mongodb://${mongoIp}:${mongoPort}/${mongoDb}`;


const db = async () => {
  try {
    await mongoose.connect(mongoUri, {useNewUrlParser: true});
    console.log('conexion exitosoa a mongodb');
  } catch (error) {
    console.log(error);
  }
};

module.exports = db;
