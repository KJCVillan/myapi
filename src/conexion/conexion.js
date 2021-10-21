const mongoose = require('mongoose');

const conexionDB = async () => {
  try {
    const db = await mongoose.connect('mongodb://localhost:27017/test-usuarios');
    console.log(`mongo conectado satisfacoriamente ${db.connection.name}`)
  } catch (error) {
    console.log(error)
  }
}

module.exports = conexionDB;