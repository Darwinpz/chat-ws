var socket = io();

var id = document.getElementById("usuario-id").innerText

socket.emit("usuario", id);

socket.on("id", function (id) {

    var u = document.getElementById(id);
    var estatus = u.getElementsByClassName("usuario-status")[0];
    estatus.children[0].style.color = "#5cb85c";
    estatus.children[1].innerText = "Online";

})

socket.on("id_disconect", function (id) {

    var u = document.getElementById(id);
    var estatus = u.getElementsByClassName("usuario-status")[0];
    estatus.children[0].style.color = "#525252";
    estatus.children[1].innerText = "Ofline";

})