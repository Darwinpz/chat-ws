const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    nombre: String,
    clave: String,
});

module.exports = mongoose.model('User',UserSchema);