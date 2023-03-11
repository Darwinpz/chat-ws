//IMPORTANDO LIBRERIA APP DEL SERVIDOR
const app = require("./src/app")

//INICIALIZANDO EL SERVIDOR CON EL PUERTO PRECONFIGURADO
app.listen(app.get("port"), ()=>{

    console.log("Servidor iniciado en el Puerto: ", app.get("port"))

})