import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import {Router} from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router:Router) {}
  @ViewChild(IonModal) modal: IonModal;


  message = '';
  respuesta: string;

  gotodado() {
    this.router.navigateByUrl('/dado');
  }

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
