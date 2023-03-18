
const ctrl_usuario = require("../controllers/usuario")

module.exports = (app) =>{


    app.get("/",(req,res)=>{

        res.render("index.hbs");

    })

    app.get("/login",(req,res)=>{

        res.render("login.hbs");

    })

    app.post("/login",ctrl_usuario.login)

    app.get("/chat", (req,res)=>{

        res.render("chat.hbs");
    })


    app.get("/registro",ctrl_usuario.registro);
    app.post("/registro",ctrl_usuario.save_usuario);

}