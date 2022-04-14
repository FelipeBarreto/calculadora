const contador = 0;

function mudarNome(novoNome) {
  contador = contador + 1;
  document.getElementById("ola-mundo").innerText = novoNome + contador;
}
