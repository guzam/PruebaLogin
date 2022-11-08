import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';

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
    const selectcolor = document.querySelector('#selectcolor');
    const respuestas = document.querySelector('#respuestas');
    const btnverpregunta = document.querySelector('#btnverpregunta');
    const btnselrespuesta = document.querySelector('#btnselrespuesta');
    const btnsalir = document.querySelector('#btnsalir');
    let verpreguntaenhtml = document.getElementById("verpreguntaenhtml");
    let opcion1 = document.getElementById("opcion1");
    let opcion2 = document.getElementById("opcion2");
    let opcion3 = document.getElementById("opcion3");
    let centena = document.getElementById("centena");
    let decena = document.getElementById("decena") as HTMLInputElement;
    let unidad = document.getElementById("unidad") as HTMLInputElement;
    let vercolor = document.getElementById("selectcolor");
    let verrespuesta = document.getElementById("respuestas");
    let verPregunta = document.getElementById("btnverpregunta");
    let selrespuesta = document.getElementById('btnselrespuesta');
    let mostrarCentena;
    let mostrarDecena;
    let mostrarUnidad;
    let verResultados;
    let nroPregunta;
    let color;
    let respuesta;

    // Girar el dado y mostrar numero de pregunta en pantalla

    dado.addEventListener('click', () => {
      dado.style.transition = '';
      dado.style.transform = `translateY(0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;
      setTimeout(() => {
        dado.style.transition = `transform ${time}s`;
        const randomValue = Math.floor((Math.random() * 6) + 1);
        console.log(`randomValue: ${randomValue}`);

        function giradado() {

          if (centena["value"] == "") {
            centena["value"] = randomValue;
            console.log(centena["value"])
            mostrarCentena = randomValue;
          }
          else {
            if (decena?.value == "") {
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

        switch (randomValue) {
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
    function restraso() {
      verResultados = setTimeout(mostrarResultados, 2000)
    };


    function mostrarResultados() {
      if (centena["value"] == mostrarCentena) {

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
            vercolor.style.visibility = "visible";
            verPregunta.style.visibility = "visible";


          } else {
            window.alert("Algo salió mal");
          }

        }

      }
    };

    //Evento al hacer click en botón Salir
    btnsalir.addEventListener('click', () => {

      this.salir();

    });

    //Evento al hacer click en boton Ver Pregunta
    btnverpregunta.addEventListener('click', () => {
      valoresPregunta();
      if (color != 0) {
        console.log(nroPregunta, color);
        leerpregunta();
      } else {
        window.alert("Debe seleccionar un color");
      }





    });

    function valoresPregunta() {
      color = vercolor["value"];
      nroPregunta = centena["value"] + decena?.value + unidad?.value;

    }

    function leerpregunta() {
      verpreguntaenhtml["value"] = "La vaca es un animal todo forrado de cuero que tiene las patas tan largas que le llegan hasta el suelo. Cuando se muera mi suegra que la entierren boca abajo, por si se quiere salir, que se vaya para abajo. En el lago Titicaca hay una vieja costumbre, para calentar la leche se prende fuego a la vaca";
      opcion1["value"] = "Valor de la op. 1 de la DB";
      opcion2["value"] = "Valoe de la op. 2 de la DB";
      opcion3["value"] = "Valor de la op. 3 de la DB";
      verpreguntaenhtml.style.visibility = "visible";
      /* opcion1.style.visibility = "visible";
      opcion2.style.visibility = "visible";
      opcion3.style.visibility = "visible"; */
      verrespuesta.style.visibility = "visible";
      respuestas[1].text = opcion1["value"];
      respuestas[2].text = opcion2["value"];
      respuestas[3].text = opcion3["value"];
      selrespuesta.style.visibility = "visible";


    }


    btnselrespuesta.addEventListener('click', () => {

      respuestaseleccionada()
      console.log("La respuesta seleccionada es: ", respuesta)

      if (respuesta == 0) {
        window.alert("Debe seleccionar una respuesta!");
      }
      else {
        if (respuesta == 2) {  // igualar con la respuesta correcta de la DB

          window.alert("Correcto!!!! Avance 3 casilleros y haga rodar el dado");
          location.reload();
        }
        else {
          window.alert("Mala suerte, que pase el que sigue");
          location.reload();
        }
      }

      function respuestaseleccionada() {
        respuesta = verrespuesta["value"];
      }


    });



  }
}

//*************************** */








