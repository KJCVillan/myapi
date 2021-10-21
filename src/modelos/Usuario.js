const { Schema, model } = require("mongoose")

const UsuarioSchema = new Schema({
  nombre: {
    type: String, 
    required:true
  },
  correo: {
    type:String, 
    required:true
  }
})

model.exports = model('Usuario', UsuarioSchema)