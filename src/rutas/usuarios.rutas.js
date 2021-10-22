const express = require('express');
const { Router } = require('express')
const rauterUsuarios = Router();
const ctrUsuario = require('../controladores/usuarios.controlador');

rauterUsuarios.get('/doble/:num',(req, res)=>{
  console.log(req.params.num);
  const doble = {
    "num": req.params.num,
    "operacion": req.params.num * 2,
  }
  res.json(doble);
})

rauterUsuarios.get('/', ctrUsuario.getUsuarios)

rauterUsuarios.post('/',ctrUsuario.postUsuario)

rauterUsuarios.put('/:id',ctrUsuario.putUsuario)

rauterUsuarios.delete('/:id',ctrUsuario.deleteUsuario)

module.exports = rauterUsuarios;