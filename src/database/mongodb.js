const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1/chat-ws',
    {
        useNewUrlParser: true, useUnifiedTopology: true
    })
    .then(() => console.log('Conectado a MongoDB...'))
    .catch(err => console.error('Error de Conexión', err));


module.exports = mongoose;