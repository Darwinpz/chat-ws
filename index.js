//IMPORTANDO LIBRERIA APP DEL SERVIDOR
const {server, app} = require("./src/app")

//INICIALIZANDO EL SERVIDOR CON EL PUERTO PRECONFIGURADO
server.listen(app.get("port"), ()=>{

    console.log("Servidor iniciado en el Puerto: ", app.get("port"))

})