const Usuario = require("../models/users")

const Ctrl = {}

Ctrl.vista_chat = async (req, res) => {

    if (req.session._id != null) {

        const user = await Usuario.findOne({ '_id': req.session._id })

        res.render("chat.hbs", user )

    } else {
        res.redirect("/login");

    }

}

module.exports = Ctrl;