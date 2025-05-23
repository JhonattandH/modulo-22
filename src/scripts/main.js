AOS.init();

const dataDoEvento = new Date("jun 19, 2025 21:00:00");
const timeStampEvento = dataDoEvento.getTime();

const contagemRegressiva = setInterval(function () {
  const agora = new Date();
  const timeStampAgora = agora.getTime();

  const distanciaAteEvento = timeStampEvento - timeStampAgora;

  const contDias = 1000 * 60 * 60 * 24;
  const contHoras = 1000 * 60 * 60;
  const contMinutos = 1000 * 60;
  const contSegundos = 1000;

  const dias = Math.floor(distanciaAteEvento / contDias);
  const horas = Math.floor((distanciaAteEvento % contDias) / contHoras);
  const minutos = Math.floor((distanciaAteEvento % contHoras) / contMinutos);
  const segundos = Math.floor((distanciaAteEvento % contMinutos) / contSegundos);

  // Verifique se o elemento existe antes de tentar modificá-lo
  const counterElement = document.getElementById('counter');
  if (counterElement) {
      // aqui vai o código que modifica o elemento
      counterElement.innerHTML = `${dias} d ${horas} h ${minutos} m e ${segundos} s.`;
  } else {
      console.error("Elemento com ID 'counter' não foi encontrado!");
  }

  if (distanciaAteEvento < 0) {
    clearInterval(contagemRegressiva);
    document.querySelector(".hero__countdown").innerHTML = `ATRASADO!\nAs Almas ja foram colhidas!`;
    document.querySelector(".hero__countdown").style.color = "red";
    document.querySelector(".hero__countdown").style.lineHeight = "50px";
  }

}, 1000)