const express = require('express')
const morgan = require('morgan')
const conexionDB = require('./conexion/conexion')
const rauterEstudiantes = require('./rutas/usuarios.rutas')
const app = express()

//llamamos la conexion
conexionDB();


//configuraciones
app.set('name', 'rest-api-alma');
app.set('port', process.env.port || 8005)

//middleware
app.use(express.json())
app.use(morgan("dev"));

//archivo estatico para presentacion
app.use(express.static('public'))

// llamado de rutas
app.use('/alma', rauterEstudiantes);

module.exports = app;
