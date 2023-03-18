const Usuario = require("../models/users")

const Ctrl = {}

Ctrl.registro = (req,res)=>{

    res.render("registro.hbs");

}

Ctrl.save_usuario = async (req, res)=>{

    const {usuario, clave} = req.body;

    const user = new Usuario({
        nombre : usuario,
        clave : clave
    })

    await user.save();

    res.render("registro.hbs", {message:"Usuario Creado Correctamente"})


}


Ctrl.login = async (req,res) => {

    const {usuario, clave} = req.body;

    const existe = await Usuario.findOne({"nombre":usuario})

    if (existe){

       res.redirect("/chat")

    }else{
        res.render("login.hbs", {message:"Usuario o Clave incorrecto"})
    }

}


Ctrl.update_user = (req, res) =>{

}


module.exports = Ctrl;