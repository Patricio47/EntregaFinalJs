/*const btnPrimerForma = document.getElementById("btn");

btnPrimerForma.addEventListener("click", () => {
    console.log("Hola, me hiciste click");
})


const btnDos = document.getElementById("btnDos");

btnDos.onclick = () =>{
    alert("segundo forma");
}

*/

let total = 0;

function agregar(producto) {
  let precio;
  switch (producto) {
    case "zapatos":
      precio = 100;
      break;
    case "camisa":
      precio = 50;
      break;
    case "pantalon":
      precio = 75;
      break;
  }
  let cantidad = parseInt(document.getElementById(producto).value);
  total += precio * cantidad;
  document.getElementById("total").innerHTML = total;
}