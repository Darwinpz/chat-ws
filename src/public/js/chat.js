var socket = io();

var id = document.getElementById("usuario-id").innerText

socket.emit("usuario",id);

socket.on("id", function(id){

    console.log(id); //64277d172e7f7b278ac93d47

    $.ajax({

        url: '/buscar_usuario/',
        type: 'POST',
        data: {id}

    }).done(function (user) {

        console.log(user);

    });

})