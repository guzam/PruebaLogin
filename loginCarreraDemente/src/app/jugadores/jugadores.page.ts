import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {Router} from '@angular/router';

import { Camera, CameraResultType } from '@capacitor/camera';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.page.html',
  styleUrls: ['./jugadores.page.scss'],
})
export class JugadoresPage implements OnInit {

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
 }



  gotodado() {
    
    var nombreJugador = (document.getElementById('nombreJugador') as HTMLInputElement).value;

    if((nombreJugador !== "")){
      localStorage.setItem("jugador1", "0");
    }

    this.router.navigateByUrl('/dado');
  }
  
  salir() {
    this.router.navigateByUrl('/home');
  }

  
  
  ngOnInit() {
    
    const btnsalir = document.querySelector('#btnsalir');
    

    btnsalir.addEventListener('click', () => {

      this.salir();

    });

  }

}

