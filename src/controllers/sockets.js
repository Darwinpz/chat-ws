

module.exports = (io_server) => {

    const io = require('socket.io')(io_server);

    io.on('connection', (socket) => {

        console.log("nueva conexion: ",socket.handshake.address);

    });

};