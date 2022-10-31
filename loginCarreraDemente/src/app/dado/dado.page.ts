import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-dado',
  templateUrl: './dado.page.html',
  styleUrls: ['./dado.page.scss'],
})
export class DadoPage implements OnInit {

  constructor(private location: Location) { }

  salir() {
    this.location.back();
  }

  ngOnInit() {
  
  const dado: HTMLElement = document.querySelector('.dado');
  const time = 2;
  const btnverpregunta = document.querySelector('#btnverpregunta');
  const btnsalir = document.querySelector('#btnsalir');
  let centena = document.getElementById("centena") as HTMLInputElement;
  let decena = document.getElementById("decena") as HTMLInputElement;
  let unidad = document.getElementById("unidad") as HTMLInputElement;
  let verPregunta = document.getElementById("btnverpregunta");
  let mostrarCentena;
  let mostrarDecena;
  let mostrarUnidad;
  let verResultados;
  let nroPregunta;  
  
  // Girar el dado y mostrar numero de pregunta en pantalla

dado.addEventListener('click', () => {
  dado.style.transition = '';
  dado.style.transform = `translateY(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
  setTimeout(() => {
      dado.style.transition = `transform ${time}s`;
      const randomValue = Math.floor((Math.random() * 6) + 1);
      console.log(`randomValue: ${randomValue}` );

      function giradado() {
          
          if (centena?.value == "") {
              centena.value = randomValue.toString();
              console.log(centena?.value)
              mostrarCentena = randomValue;
          } 
          else { 
              if (decena?.value == "")
              {
                      decena.value = randomValue.toString();
                      console.log(decena?.value)
                      mostrarDecena = randomValue;
              }
              else {
                  if (unidad?.value == "") {
                      unidad.value = randomValue.toString();
                      console.log(unidad?.value)
                      mostrarUnidad = randomValue;
                      }
                  else {
                      location.reload();
                  }
                  }
              }
          };
      
      switch(randomValue) {
          case 1:             
              dado.style.transform = `translateY(0px) rotateX(3600deg) rotateY(3600deg) rotateZ(3600deg)`;
              giradado();
              restraso();      
              break;
          case 2:
              dado.style.transform = `translateY(0px) rotateX(4410deg) rotateY(3600deg) rotateZ(3600deg)`;
              giradado();
              restraso();
              break;
          case 3:
              dado.style.transform = `translateY(0px) rotateX(3600deg) rotateY(4410deg) rotateZ(3600deg)`;
              giradado();
              restraso();
              break;
          case 4:
              dado.style.transform = `translateY(0px) rotateX(3600deg) rotateY(2430deg) rotateZ(3600deg)`;
              giradado();
              restraso();
              break;
          case 5:
              dado.style.transform = `translateY(0px) rotateX(2430deg) rotateY(3600deg) rotateZ(3600deg)`;
              giradado();
              restraso();
              break;
          case 6:
              dado.style.transform = `translateY(0px) rotateX(3600deg) rotateY(1980deg) rotateZ(3600deg)`;
              giradado();
              restraso();
              break;
      };
  }, time * 10);

});

//Retrasar la aparicion del numero de pregunta en pantalla
//y habilitar el boton "Ver Pregunta"
function restraso (){
  verResultados = setTimeout(mostrarResultados, 2000)
};    
  

function mostrarResultados() {
  if (centena?.value == mostrarCentena) {
   
      centena.style.visibility = "visible";
      mostrarCentena = 0;
  
  } else {
      if (decena?.value == mostrarDecena) {

          decena.style.visibility = "visible";
          mostrarDecena = 0;

      } else {
          if (unidad?.value == mostrarUnidad) {
              unidad.style.visibility = "visible";
              mostrarUnidad = 0;
              verPregunta.style.visibility = "visible";
              
          } else {
              window.alert("Algo salió mal");
          }
          
      }
      
  }
};


//Evento al hacer click en boton Ver Pregunta
btnverpregunta.addEventListener('click', () => {
 
  nroPregunta = centena?.value + decena?.value + unidad?.value;
  console.log(nroPregunta);
  window.alert("Pregunta numero " + nroPregunta);

});

//Evento al hacer click en botón Salir
btnsalir.addEventListener('click', () => {
  
  this.salir();

});

  }
}

//*************************** */





       


