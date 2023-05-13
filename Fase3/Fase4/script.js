function procesarRespuestas() {
    const respuestas = document.forms["formulario"];
    let puntaje = 0;
    let respuestasCorrectas = ["c", "a", "b"];
  
    for (let i = 1; i <= respuestas.length / 3; i++) {
      if (respuestas["r" + i].value == null || respuestas["r" + i].value == "") {
        alert('Favor responder todas las preguntas');
        return false;
      } else {
        if (respuestas["r" + i].value === respuestasCorrectas[i - 1]) {
          puntaje++;
        }
      }
    }
  
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = 'Obtuviste ' + puntaje + ' puntos de ' + respuestas.length / 3 + ' posibles';
    return false;
  }
  