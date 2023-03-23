const Ctrl = {}

Ctrl.vista_chat = (req, res) => {

    (req.session._id != null) ? res.render("chat.hbs") : res.redirect("/login");

}

module.exports = Ctrl;