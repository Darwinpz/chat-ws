const Usuario = require("../models/users")

const Ctrl = {}

Ctrl.save_usuario= async(req, res)=>{

    const user = new Usuario({
        nombre: "Deku",
        clave : "123"
    })

    await user.save()

    console.log("Usuario guardado correctamente");
}

Ctrl.update_user = (req, res) =>{
     
}
module.exports = Ctrl;