const botonuno = document.getElementById("capturar_nombre");
const nombreUsuario = document.getElementById('name');

const bienvenida = document.getElementById("welcome");
const primerapantalla = document.getElementById("primerapantalla")
const contenido = document.getElementById("contenido");
const contenidodos = document.getElementById("contenidodos");
const primerapregunta = document.getElementById("questionOne");
const segundapregunta = document.getElementById("questionTwo");
const tercerapregunta= document.getElementById("questionThree");
const resultados = document.getElementById("results");
const correctCounter = 0;
const ncorrectCounter = 0;
const correctAnswer = document.getElementById("correct-answers");
const incorrectAnswwer = document.getElementById("incorrect-answers");


function dar_click(){
  const nombre = nombreUsuario.value;
  if(nombre === " "){
    alert("Upps!! No ingresaste un nombre");
  }else{

  document.getElementById('user_name').innerHTML = nombre;
  document.getElementById('user').style.display = 'block';
  bienvenida.style.display = 'block';
  primerapantalla.style.display = 'none';

}
  }

conciencia.addEventListener('click',()=>{
  document.getElementById('contenidoAmbiente').style.display ='block';
  document.getElementById('welcome').style.display = 'none';
});

paises.addEventListener('click',()=>{
  document.getElementById('contenidoPaises').style.display='block';
  document.getElementById('welcome').style.display='none';
});

conciencia_pregunta_1.addEventListener('click',()=>{
  document.getElementById('conciencia_pregunta_1').style.display = 'none';
  document.getElementById('conciencia_pregunta_2').style.display = 'block';
});

conciencia_pregunta_2.addEventListener('click',()=>{
  document.getElementById('conciencia_pregunta_2').style.display = 'none';
  document.getElementById('conciencia_pregunta_3').style.display = 'block';
});

// Formulario de Conciencia
const formConcienia = document.getElementById("formConciencia");
formConcienia.addEventListener("submit", function (evt) {
  evt.preventDefault();

  puntosAcumuladosPaises = 0;

  // Pregunta 1
  let respuesta_1 = document.querySelector('input[name="conciencia_1"]:checked');
  if (respuesta_1) {

    if (respuesta_1.value === '5 años') {
      puntosAcumuladosPaises += 1;
    }
  }

  // Pregunta 2
  let respuesta_2 = document.querySelector('input[name="conciencia_2"]:checked');
  if (respuesta_2) {

    if (respuesta_2.value === '10 años') {
      puntosAcumuladosPaises += 1;
    }
  }

  // Pregunta 3
  let respuesta_3 = document.querySelector('input[name="conciencia_3"]:checked');
  if (respuesta_3) {

    if (respuesta_3.value === '2 años') {
      puntosAcumuladosPaises += 1;
    }
  }

  const correctas = puntosAcumuladosPaises;
  const incorrectas = 3 - correctas;

  document.getElementById('correct-answers').innerHTML = correctas;
  document.getElementById('incorrect-answers').innerHTML = incorrectas;


  document.getElementById('conciencia_pregunta_3').style.display = 'none';
  document.getElementById('results').style.display = 'block';

});


// Mostrar pregunta 2 de paises
function mostrarPaises2() {
  document.getElementById('paises_pregunta_1').style.display = 'none';
  document.getElementById('paises_pregunta_2').style.display = 'block';
}

// Mostrar pregunta 3 de paises
function mostrarPaises3() {
  document.getElementById('paises_pregunta_2').style.display = 'none';
  document.getElementById('paises_pregunta_3').style.display = 'block';
}

// Formulario de paises
const formPaises = document.getElementById("formPaises");
formPaises.addEventListener("submit", function (evt) {
  evt.preventDefault();

  puntosAcumuladosPaises = 0;

  // Pregunta 1
  let respuesta_1 = document.querySelector('input[name="paises_1"]:checked');
  if ( respuesta_1 ) {

    if (respuesta_1.value === 'Brasil') {
      puntosAcumuladosPaises += 1;
    }
  }

  // Pregunta 2
  let respuesta_2 = document.querySelector('input[name="paises_2"]:checked');
  if (respuesta_2 ) {

    if (respuesta_2.value === 'la invasion francesa') {
      puntosAcumuladosPaises += 1;
    }
  }

  // Pregunta 3
  let respuesta_3 = document.querySelector('input[name="paises_3"]:checked');
  if (respuesta_3 ) {

    if (respuesta_3.value === 'Alcala de Henares') {
      puntosAcumuladosPaises += 1;
    }
  }

  const correctas = puntosAcumuladosPaises;
  const incorrectas = 3 - correctas;

  document.getElementById('correct-answers').innerHTML = correctas;
  document.getElementById('incorrect-answers').innerHTML = incorrectas;


  document.getElementById('paises_pregunta_3').style.display = 'none';
  document.getElementById('results').style.display = 'inline-block';

});
function resetear(){
  document.getElementById('results').style.display='none';
  document.getElementById('welcome').style.display='block';
}
