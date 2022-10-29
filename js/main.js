const btnRedireccion1 = document.getElementById("compraTickets1");
const btnRedireccion2 = document.getElementById("compraTickets2");
const btnEnvio = document.getElementById("envioForm");

function redireccionamiento(){
    window.location = "pages/compraTickets.html";
}

function envioFormulario(){
    alert("¡Gracias por tu ofrecimiento!\nSin duda te tendremos en cuenta para nuestra próxima conferencia")
}

btnRedireccion1.addEventListener("click", redireccionamiento);
btnRedireccion2.addEventListener("click", redireccionamiento);
btnEnvio.addEventListener("click", envioFormulario);