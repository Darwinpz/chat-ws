//IMPORTANDO LAS LIBRERIAS
const express = require("express")
const exphbs = require("express-handlebars")
const morgan = require("morgan")
const path = require("path")
const session = require('express-session');
const nocache = require("nocache");

const http = require('http');
const { Server } = require("socket.io");

//INSTANCIANDO EL SERVIDOR
const app = express()

//INSTANCIA DEL SOCKET
const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
    //console.log('Un usuario se ha conectado!!', socket.handshake.address);

    socket.on("usuario",(msg)=>{

        //ACTUALIZACIÓN DE LA BD CON EL ESTADO TRUE
        socket.broadcast.emit("id",msg);
    
    })

    socket.on('disconnect', () =>{

        console.log("Desconectado",socket.id)
        //socket.broadcast.emit("id_disconect",socket.id);
    
    })

});


//DEFINICION DE PUERTO
app.set("port",3000)

//SESION
var sess = {
    secret: 'hola',
    resave: false,
    saveUninitialized: true
}
app.use(session(sess))
app.use(nocache())

//DEFINICION DEL DIRECTORIO VIEWS
app.set("views", path.join(__dirname,"views"));

//DEFINICION DEL MOTOR DE PLANTILLAS HBS
app.engine(".hbs", exphbs.engine({

    defaultLayout: 'main',
    layoutsDir: path.join(app.get("views"),"layouts"),
    partialsDir: path.join(app.get("views"),"partials"),
    extname: '.hbs'

}))

//DEFINICION DE VISTAS
app.set('views engine', '.hbs');

//DEFINICION DE HERRAMIENTA PARA DEVS
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(morgan('dev'))

//DEFINICION DEL DIRECTORIO PUBLIC
app.use(express.static(path.join(__dirname,"public")));

//DEFINICION DE RUTAS
require("./routes/rutas")(app);

//CONEXION A LA BD MONGODB
require("./database/mongodb")

//EXPORTACION DE MODULO APP
module.exports = {server,app};
