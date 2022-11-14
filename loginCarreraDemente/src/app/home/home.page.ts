import { Component, ViewChild } from '@angular/core';
import { IonModal, NavController } from '@ionic/angular';
import {Router} from '@angular/router';
import  { presentAlert, validarIngreso }  from '../../../src/assets/ts/helper'
import  { LoginResponse, objUsuario }  from '../../../src/assets/ts/interfaces';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  //constructor(private router:Router) {}
  constructor(public navCtrl:NavController, private router: Router) {}
  @ViewChild(IonModal) modal: IonModal;


  message = '';
  respuesta: string;
  
  ingresar() {
    //var ruta = this.router.navigateByUrl('/jugadores');
    var usu = (document.getElementById('usu') as HTMLInputElement).value
    var pass = (document.getElementById('pass') as HTMLInputElement).value
    //console.log(usu);
    //console.log(pass);
    var user: objUsuario = {usuario:usu, password:pass}

    //TEST
    //this.router.navigate(['jugadores']);
    //PROD 
    validarIngreso(user)
  }

  ingresarSinLogin(){
    this.router.navigate(['jugadores']);
  }

  // gotojugadores() { //Muestra los input para cargar los jugadores
  //   //this.router.navigateByUrl('/jugadores');
  //   this.router.navigate(['jugadores']);
  // }

  cancelar() {
    this.modal.dismiss(null, 'cancel');
  }

  confirmar() {
    this.modal.dismiss(this.respuesta, 'confirm');
  }

  verificar() {
    const elementosresp = document.getElementsByClassName('tohide')
    for (let i = 0; i<elementosresp.length; i++)
    {
      const resphtml = elementosresp[i] as HTMLElement;
      resphtml.style.display = 'none';
    }
    const elementosnewpass = document.getElementsByClassName('toshow')
    for (let i = 0; i<elementosnewpass.length; i++)
    {
      const passhtml = elementosnewpass[i] as HTMLElement;
      passhtml.style.display = 'block';
    }
  }

  onWillDismiss(event: Event) {
    /*const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }*/
  }

}
