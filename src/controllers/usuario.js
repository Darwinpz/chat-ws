const Usuario = require("../models/users")

const Ctrl = {}

Ctrl.save_usuario = async (req, res)=>{

    const user = new Usuario({
        nombre : "Darwinpz",
        clave : "123"
    })

    await user.save();

    console.log("Usuario Guardado Correctamente");

}

Ctrl.update_user = (req, res) =>{

}


module.exports = Ctrl;