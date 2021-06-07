

function crearHora() {
  let fecha = new Date(),
    hora = fecha.getHours(),
    minutos = fecha.getMinutes(),
    segundos = fecha.getSeconds(),
    diasemana = fecha.getDay(),
    dias = fecha.getDate(),
    mes = fecha.getMonth();
  anio = fecha.getFullYear();
  console.log(fecha);
  console.log(diasemana);

  //asignar valores a lo elementos

  let pDiaSemana = document.getElementById("diaSemana"),
    pDia = document.getElementById("dias"),
    pMes = document.getElementById("mes"),
    pAnio = document.getElementById("anio");

  // ahora tengo que enviar esta info al html

  let semana = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado",
  ];
  pDiaSemana.innerText = semana[diasemana];
  //aqui el numero que me trae getday lo paso al numero de la semana que es
  //ej si es 2 me daria martes si es 0 me da domingo igual para el mes

  let meses = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  pMes.innerText = meses[mes]; // el numero de mes que me da va con la posision del array

  pDia.innerText = dias;
  pAnio.innerText = anio;

  //  traer la info de la hora

  let pHoras = document.getElementById("hora"),
    pMinutos = document.getElementById("minutos"),
    pSegundos = document.getElementById("segundos"),
    pAmpm = document.getElementById("ampm");

    if(hora >= 12){
      pAmpm.innerText= "pm";
      hora = hora ;
    }else{
      pAmpm.innerText= "am";
    }


  if (segundos < 10) {
    pSegundos.innerText = "0" + segundos;
  } else {
    pSegundos.innerText = segundos;
  }

  if (minutos < 10) {
    pMinutos.innerText = "0" + minutos;
  } else {
    pMinutos.innerText = minutos;
  }


  if (hora< 10) {
    pHora.innerText = "0" + hora;
  } else {
    pHoras.innerText = hora;
  }
  
}

window.setInterval(crearHora, 1000);
