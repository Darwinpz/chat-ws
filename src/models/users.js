const mongoose = require("mongoose")
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
    nombre:  { type: String, required: true },
    username: { type: String, required: true },
    clave:  { type: String, required: true },
    estado: {type: Boolean, default: false},
    conexion:  { type: Date, default: Date.now },
    creacion: { type: Date, default: Date.now }
});

UserSchema.methods.encryptPassword = async (clave) => {

    const salt = await bcrypt.genSalt(10);
    const hash = bcrypt.hash(clave, salt);
    return hash;

};

UserSchema.methods.matchPassword = async function (clave) {

    return await bcrypt.compare(clave, this.clave);

};

module.exports = mongoose.model('User', UserSchema);