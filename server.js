// Importamos librerias
const express = require('express');
const cors = require('cors');

// configuracion de entorno
require('dotenv').config();
require('./utilidades/mongo');

// rutas

// Instanciar Express
const app = express();

// Llamamos las variables de entorno
const port = process.env.PORT_SERVER || 3001;

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// llamamos la api para probar la conexion
app.get('/api', async (req, res) => {
  res.status(200).send({
    status: 0,
    statusText: 'alive',
    service: 'my-api-corpus-api'
  });
});

app.listen(port, () => {
  console.log('**********************************************');
  console.log(`* My-Api server funcionando en el puerto ${port}`);
  console.log(`* Ambiente: ${process.env.NODE_ENV}`);
  console.log(`hora : ${new Date}`);
  console.log(`inicializado My-Api ${new Date}`);
  console.log('**********************************************');
});

// Exportar el servidor para pruebas
module.exports = app;
