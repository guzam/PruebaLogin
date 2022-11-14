import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {Router} from '@angular/router';
import { setPlatformHelpers } from 'ionicons/dist/types/stencil-public-runtime';
import  { presentAlert } from '../../../src/assets/ts/helper';
import  { preguntaResponse, objRespuestasList, objPregunta }  from '../../../src/assets/ts/interfaces';

import  { motionActive }  from '../../../src/assets/ts/motion';


import { PluginListenerHandle } from '@capacitor/core';
import { Motion } from '@capacitor/motion';


let accelHandler: PluginListenerHandle;

// myButton.addEventListener('click', async () => {
//   try {
//     await (DeviceMotionEvent as any).requestPermission() 
//   } catch (e) {
//     // Handle error
//     return;
//   }
//motionActive();
//   // Once the user approves, can start listening:
//   accelHandler = await Motion.addListener('accel', event => {
//     console.log('Device motion event:', event);
//   });
// });

// Stop the acceleration listener
const stopAcceleration = () => {
  if (accelHandler) {
    accelHandler.remove();
  }
};

// Remove all listeners
const removeListeners = () => {
  Motion.removeAllListeners();
};

@Component({
  selector: 'app-dado',
  templateUrl: './dado.page.html',
  styleUrls: ['./dado.page.scss'],
})


export class DadoPage implements OnInit {

  constructor(private location: Location, private router:Router) { }

  salir() {
    this.router.navigateByUrl('/home');
  }

  ngOnInit() {

    //var ronda: number = localStorage.getItem('ronda');
    var encabezado = (document.getElementById('id_Dado') as HTMLInputElement).value;
    
    // switch(ronda){
    //   "1" = localStorage.getItem('jugador1');
    // }
    //var verpreguntaenhtml["value"] = pregunta;

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
    let foods;

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
            //vercolor.style.visibility = "visible";

            verPregunta.style.visibility = "visible";


          } else {
            window.alert("Algo salió mal");
          }

        }

      }
    };

    //Evento al hacer click en boton "Salir"
    btnsalir.addEventListener('click', () => {

      //console.log("Voy saliendo");
      this.salir();

    });

    //Evento al hacer click en boton "Ver Pregunta"
    btnverpregunta.addEventListener('click', () => {
      valoresPregunta();
      //if (color != 0) {
        console.log(nroPregunta);//, color); //valores para hacer la consulta en DB
        
      //} else {
        //window.alert("Debe seleccionar un color");
      //}
    });

    //Numero de pregunta y color de libro
    function valoresPregunta() {
      //color = vercolor["value"];
      nroPregunta = centena["value"] + decena?.value + unidad?.value;
      //var nro: objPregunta{nroPregunta = } = nroPregunta as number;

      var nro: objPregunta = {nroPregunta:nroPregunta}

      pregunta(nro);
    }

    async function pregunta(preg: objPregunta) {
      var result = await getPregunta(preg);

      setearPregunta(result.pregunta);
      setearRespuestas(result.respuesta);
    }

    //Muestra pregunta en pantalla, los valores los debe tomar de la DB
    function setearPregunta(pregunta: string){
      verpreguntaenhtml["value"] = pregunta;
      verpreguntaenhtml.style.visibility = "visible";
    }

    function setearRespuestas(respuesta: objRespuestasList[]){
      verrespuesta.style.visibility = "visible";
      respuestas[1].text = respuesta[0].posibleRespuesta;
      respuestas[1].value = respuesta[0].esLaCorrecta;
      respuestas[2].text = respuesta[1].posibleRespuesta;
      respuestas[2].value = respuesta[1].esLaCorrecta;
      respuestas[3].text = respuesta[2].posibleRespuesta;
      respuestas[3].value = respuesta[2].esLaCorrecta;
      selrespuesta.style.visibility = "visible";
    }

    //Muestra pregunta en pantalla, los valores los debe tomar de la DB
    function leerpregunta() {
      //verpreguntaenhtml["value"] = "La vaca es un animal todo forrado de cuero que tiene las patas tan largas que le llegan hasta el suelo. Cuando se muera mi suegra que la entierren boca abajo, por si se quiere salir, que se vaya para abajo. En el lago Titicaca hay una vieja costumbre, para calentar la leche se prende fuego a la vaca"; // Levantar pregunta de la DB
      // opcion1["value"] = "Valor de la op. 1 de la DB"; //Levantar respuestas de la DB
      // opcion2["value"] = "Valor de la op. 2 de la DB";
      // opcion3["value"] = "Valor de la op. 3 de la DB";
      //verpreguntaenhtml.style.visibility = "visible";
      /* opcion1.style.visibility = "visible";
      opcion2.style.visibility = "visible";
      opcion3.style.visibility = "visible"; */
      // verrespuesta.style.visibility = "visible";
      // respuestas[1].text = opcion1["value"];
      // respuestas[2].text = opcion2["value"];
      // respuestas[3].text = opcion3["value"];
      // selrespuesta.style.visibility = "visible";
    }


    //Evento al hacer click en el boton "Seleccionar Respuesta"
    btnselrespuesta.addEventListener('click', () => {
      let respuesta = verrespuesta["value"]

      if(respuesta == "true"){
        presentAlert("Respuesta Correcta!","","Avance 3 casilleros y haga rodar el dado");
        //var suma = localStorage.setItem("jugador1",)
        var pts = localStorage.getItem("jugador1");
        var suma = parseInt(pts) + 3
        localStorage.setItem("jugador1",suma.toString())
        
       // localStorage.setItem('jugador1', j1 + "_0pts");
       /// localStorage.getItem("jugador1").
        //location.reload();
      }else{
        presentAlert("Respuesta Incorrecta!","Mala Suerte","que pase el que sigue");
        location.reload();
      }
    });

  }
}

//*************************** */

async function getPregunta(pregunta: objPregunta){

  var result : preguntaResponse

  try {
    // const response: Response
    const response = await fetch('https://localhost:44362/api/PreguntasCDM', {
      method: 'POST',
      //mode: 'cors',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        nroPregunta:pregunta.nroPregunta
      }),
    });

    if (!response.ok) {throw new Error(`Error! status: ${response.status}`);}

    // const result: CreateUserResponse
    const result = (await response.json()) as preguntaResponse;
    const json = JSON.stringify(result, null, 4);
    console.log('result is: ', json);
    return result;

  } catch (error) {
    if (error instanceof Error) {
      console.log('error message: ', error.message);
      result.pregunta = error.message;
    } else {
      console.log('unexpected error: ', error);
      result.pregunta = 'An unexpected error occurred';
    }
    //result.result = -1;
    return result;
  }

}








