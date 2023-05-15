/*challenge 37*/

let numeroMagico = 0;

const btnComenzar = document.getElementById('comenzar');
const btnAdivinar = document.getElementById('adivinar');
const btnReiniciar = document.getElementById('reiniciar');
const btnFinalizar = document.getElementById('finalizar');

btnComenzar.addEventListener('click', () => {
  numeroMagico = Math.floor(Math.random() * 100) + 1;
  document.getElementById('gameDiv').style.display = 'block';
});

btnAdivinar.addEventListener('click', () => {
  let user = parseInt(document.getElementById('guessInput').value);
  if (user === numeroMagico) {
    alert('Felicitaciones! Adivinaste el numero magico. Juega nuevamente');
    numeroMagico = Math.floor(Math.random() * 100) + 1;
  } else if (user < numeroMagico) {
    alert('Muy bajo! Intenta con un numero mas alto.');
  } else {
    alert('Muy alto! Intenta con un numero mas bajo.');
  }
});

btnReiniciar.addEventListener('click', () => {
  alert('El numero magico era ' + numeroMagico.toString() + ', intentelo nuevamente!');
  numeroMagico = Math.floor(Math.random() * 100) + 1;
});

btnFinalizar.addEventListener('click', () => {
  alert('Muchas gracias por jugar!, intentelo nuevamente mas tarde');
  document.getElementById('gameDiv').style.display = 'none';
});

