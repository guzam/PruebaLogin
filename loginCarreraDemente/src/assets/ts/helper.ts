import  { LoginResponse, objUsuario }  from '../../../src/assets/ts/interfaces';

export async function presentAlert(header: string = 'Alert', 
                            subHeader: string = 'Important message',
                            msj: string,
                            textButton: string = 'OK') {
  const alert = document.createElement('ion-alert');
  alert.header = header;
  alert.subHeader = subHeader;
  alert.message = msj;
  alert.buttons = [textButton];

  document.body.appendChild(alert);
  await alert.present();
}