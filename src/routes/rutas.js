
const ctrl_usuario = require("../controllers/usuario")

module.exports = (app) =>{


    app.get("/",(req,res)=>{

        res.render("index.hbs");

    })

    app.get("/login",(req,res)=>{

        res.render("login.hbs");

    })

    app.post("/login",(req,res)=>{

        const {identificacion, clave} = req.body

        res.render("login.hbs", {message:"Error al iniciar sesion", usuario:identificacion})


    })

    app.get("/chat", (req,res)=>{

        res.render("chat.hbs");
    })


    app.get("/registro",ctrl_usuario.save_usuario);

}