
const ctrl_usuario = require("../controllers/usuario")
const ctrl_chat = require("../controllers/chat")

module.exports = (app) =>{

    app.get("/",(req,res)=>{res.render("index.hbs")})

    app.get("/login",ctrl_usuario.vista_login)
    app.post("/login",ctrl_usuario.login)

    app.get("/chat", ctrl_chat.vista_chat)

    app.get("/registro",ctrl_usuario.registro);
    app.post("/registro",ctrl_usuario.save_usuario);

    app.get("/salir",ctrl_usuario.salir);

    app.post("/buscar_usuario",ctrl_usuario.buscar_usuario);

}