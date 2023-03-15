const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    nombre: string,
    clave: string,
});


module.exports = mongoose.model('User', UserSchema);