import { Component, ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { $ } from 'protractor';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
  @ViewChild(IonModal) modal: IonModal;

  message = '';
  respuesta: string;

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
      const elemhtml = elementosresp[i] as HTMLElement;
      elemhtml.style.display = 'none';
    }
    const elementosnewpass = document.getElementsByClassName('toshow')
    for (let i = 0; i<elementosnewpass.length; i++)
    {
      const elemhtml = elementosnewpass[i] as HTMLElement;
      elemhtml.style.display = 'block';
    }
  }

  onWillDismiss(event: Event) {
    /*const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }*/
  }
}
