const Usuario = require("../models/users")

const Ctrl = {}

Ctrl.registro = (req, res) => {

    res.render("registro.hbs");

}

Ctrl.save_usuario = async (req, res) => {

    const { nombre, username, clave } = req.body;

    const existe = await Usuario.findOne({ 'username': username })

    if (existe) {

        res.render("registro.hbs", { message: "Usuario Existente" })

    } else {

        const user = new Usuario({
            nombre,
            username,
            clave
        })

        user.clave = await user.encryptPassword(clave)
        await user.save();

        res.render("registro.hbs", { message: "Usuario Creado Correctamente" })

    }

}


Ctrl.buscar_usuario = async(req, res) =>{

    const { id } = req.body;

    const usuario = await Usuario.findOne({ '_id': id }).select("-clave")

    res.json(usuario);

}

Ctrl.vista_login = (req, res) => {

    (req.session._id != null) ? res.redirect("chat") : res.render("login.hbs");

}

Ctrl.login = async (req, res) => {

    const { usuario, clave } = req.body;

    const existe = await Usuario.findOne({ 'username': usuario })

    if (existe) {

        if (await existe.matchPassword(clave)) {

            req.session._id = existe._id;
            req.session.usuario = existe.nombre;
            res.redirect("/chat")

        }else{
            res.render("login.hbs", { message: "Usuario o Clave incorrecto" })
        }

    } else {
        res.render("login.hbs", { message: "Usuario no existente" })
    }

}


Ctrl.salir = async (req, res) => {

    req.session.destroy();
    res.redirect('/login');
};


module.exports = Ctrl;