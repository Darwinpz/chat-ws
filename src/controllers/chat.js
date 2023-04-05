const Usuario = require("../models/users")

const Ctrl = {}

Ctrl.vista_chat = async (req, res) => {

    if (req.session._id != null) {

        const usuario = await Usuario.findOne({ '_id': req.session._id }).lean()

        const registrados = await Usuario.find({"_id":{$nin: req.session._id}}).select("-clave -creacion").lean();

        res.render("chat.hbs", {usuario, registrados} )

    } else {
        res.redirect("/login");

    }

}

module.exports = Ctrl;