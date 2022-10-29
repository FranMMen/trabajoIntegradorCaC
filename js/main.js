const btnRedireccion1 = document.getElementById("compraTickets1");
const btnRedireccion2 = document.getElementById("compraTickets2");

function redireccionamiento(){
    window.location = "pages/compraTickets.html";
}

btnRedireccion1.addEventListener("click", redireccionamiento);
btnRedireccion2.addEventListener("click", redireccionamiento);