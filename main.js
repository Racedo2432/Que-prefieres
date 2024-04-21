function cambiartexto() {
  let opcion_azul = document.getElementById("opcion_azul");
  let opcion_roja = document.getElementById("opcion_roja");
  let container = document.getElementById("container");
  let boton = document.getElementById("boton");
  if (opcion_azul.textContent === "vivir 100 años en el pasado" || opcion_roja.textContent === "vivir 100 años en el futuro") {
    opcion_azul.innerHTML = "tener siempre frio";
    opcion_roja.innerHTML = "tener siempre calor";
  } else if (opcion_azul.textContent === "tener siempre frio" || opcion_roja.textContent === "tener siempre calor") {
    opcion_azul.innerHTML = "tener un salario bajo en un trabajo que amas";
    opcion_roja.innerHTML = "tener un salario alto en un trabajo que odias";
  } else if (opcion_azul.textContent === "tener un salario bajo en un trabajo que amas" || opcion_roja.textContent === "tener un salario alto en un trabajo que odias") {
    opcion_azul.innerHTML = "poder ver tus sueños de nuevo en un vídeo";
    opcion_roja.innerHTML = "poder quedarte dormido solo con chasquear los dedos";
  } else if (opcion_azul.textContent === "poder ver tus sueños de nuevo en un vídeo" || opcion_roja.textContent === "poder quedarte dormido solo con chasquear los dedos") {
    container.style.display = "none";
    document.getElementById("titulo").innerHTML = "Gracias por jugar";
    boton.style.display = "block";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  let boton = document.getElementById("boton");
  boton.style.display = "none";
});

function jugar_de_nuevo() {
  let boton = document.getElementById("boton");
  let container = document.getElementById("container");
  boton.style.display = "none";
  container.style.display = "flex";
  document.getElementById("titulo").innerHTML = "¿Qué prefieres?";
  document.getElementById("opcion_azul").innerHTML = "vivir 100 años en el pasado";
  document.getElementById("opcion_roja").innerHTML = "vivir 100 años en el futuro";
}
