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


  document.getElementById("counter").innerText = `${dias} d ${horas} h ${minutos} m e ${segundos} s.`;
  console.log(dias, horas, minutos, segundos);
  if (distanciaAteEvento < 0) {
    clearInterval(contagemRegressiva);
    document.querySelector(".hero__countdown").innerText = `ATRASADO!\nAs Almas ja foram colhidas!`;
    document.querySelector(".hero__countdown").style.color = "red";
    document.querySelector(".hero__countdown").style.lineHeight = "50px";
  }

}, 1000)