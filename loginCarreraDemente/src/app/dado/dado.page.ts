import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {Router} from '@angular/router';
import  { presentAlert } from '../../../src/assets/ts/helper';
import  { preguntaResponse, objRespuestasList, objPregunta }  from '../../../src/assets/ts/interfaces';
import { Camera, CameraResultType } from '@capacitor/camera';



@Component({
  selector: 'app-dado',
  templateUrl: './dado.page.html',
  styleUrls: ['./dado.page.scss'],
})


export class DadoPage implements OnInit {

  constructor(private location: Location, private router:Router) { }

  picture: string;


  async takePicture (){
 
   var item = document.getElementById('imgAvatarIcon') as HTMLInputElement
   item.style.display = "none"
   var img = document.getElementById('img') as HTMLElement;
 
   const image = await Camera.getPhoto({
     quality: 90,
     allowEditing: false,
     resultType: CameraResultType.DataUrl,
     saveToGallery: true
 
   });
 
   this.picture = image.dataUrl;
   img.style.visibility = "visible";

   const verdado = document.getElementsByClassName('dado')
    for (let i = 0; i<verdado.length; i++)
    {
      const dadohtml = verdado[i] as HTMLElement;
      dadohtml.style.visibility = 'visible';
    }
    var verpregunta = document.getElementById('btnverpregunta') as HTMLInputElement;
    verpregunta.style.visibility = "visible";
    var titulopagina = document.getElementById('titulopagina') as HTMLInputElement;
    titulopagina.textContent = "Haga click sobre el dado para hacerlo rodar";

  }
  
  
  salir() {
    this.router.navigateByUrl('/home');
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
    let foods;

    // Girar el dado y mostrar numero de pregunta en pantalla

    function ocultar() {
      centena.style.visibility = "hidden";
      centena["value"]="";
      decena.value="";
      decena.style.visibility = "hidden"
      unidad.value="";
      unidad.style.visibility = "hidden"
      verPregunta.style.visibility = "hidden";
      selrespuesta.style.visibility = "hidden";
      verrespuesta.style.visibility = "hidden";
      verpreguntaenhtml.style.visibility = "hidden";

    }
    
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
                ocultar();
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

    //Retrasar la aparicion del numero de pregunta en pantalla y habilitar el boton "Ver Pregunta"
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
            presentAlert("Atención!","","Debe presionar tres veces el dado para seleccionar la pregunta");
        
          }
 
        }

      }
    };

    //Evento al hacer click en boton "Salir"
    btnsalir.addEventListener('click', () => {

      
      this.salir();

    });

    //Evento al hacer click en boton "Ver Pregunta"
    btnverpregunta.addEventListener('click', () => {
      valoresPregunta();
      
        console.log(nroPregunta);
        
      
    });

    //Numero de pregunta y color de libro
    function valoresPregunta() {
      
      nroPregunta = centena["value"] + decena?.value + unidad?.value;
      

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

    
    //Evento al hacer click en el boton "Seleccionar Respuesta"
    btnselrespuesta.addEventListener('click', () => {
      let respuesta = verrespuesta["value"]

      if(respuesta == "true"){
        presentAlert("Respuesta Correcta!","","Avance 3 casilleros y haga rodar el dado");
      
        var pts = localStorage.getItem("jugador1");
        var suma = parseInt(pts) + 3
        localStorage.setItem("jugador1",suma.toString())
        ocultar()
                
       
      }else{
        presentAlert("Respuesta Incorrecta!","Mala Suerte","que pase el que sigue");
        ocultar();
      }
    });

  }
}

//*************************** */

async function getPregunta(pregunta: objPregunta){

  var result : preguntaResponse

  try {
    
    const response = await fetch('https://localhost:44362/api/PreguntasCDM', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        nroPregunta:pregunta.nroPregunta
      }),
    });

    if (!response.ok) {throw new Error(`Error! status: ${response.status}`);}

    
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
    
    return result;
  }

}










