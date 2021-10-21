const User = require('../modelos/Usuario')

exports.getUsuarios = (req, res) => {
  const usuarios = [
    {
      'nombre': 'pedro paramo',
      'correo': 'pedro@paramo.com'
    },
    {
      'nombre': 'laura paramo',
      'correo': 'laura@paramo.com'
    }
  ]
  res.json(usuarios)
}

exports.postUsuario = async (req, res) => {
  try {
    const { nombre, correo } = req.body;
    console.log(`nombre: ${nombre} correo: ${correo}`)

    if (nombre && correo) {
      const nuevoUsuario = new User({
        nombre,
        correo
      })
      await nuevoUsuario.save()
      res.json({ isOk: true, msj: "usuario guardado", id: nuevoUsuario._id })
    } else {
      res.json({ isOk: false, msj: "los datos son requeridos" })
    }
  } catch (error) {
    res.json(error);
  }
}

exports.putUsuario = (req, res) => {
  const id = req.params.id
  res.json(`datos recibidos para actualizar id ${id}`);
}

exports.deleteUsuario = (req, res) => {
  const id = req.params.id
  res.json(`datos recibidos para borrar id ${id}`);
}