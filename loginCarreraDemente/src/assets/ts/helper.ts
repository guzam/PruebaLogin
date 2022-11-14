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


export async function validarIngreso(user: objUsuario) {
  let result = await login(user);
   //validación ingreso login
if(result.result == 1 && result.token == "tokenPOOmBA01"){
  //ingreso permitido
  this.router.navigate(['jugadores']);
}else{
  presentAlert("Error!", "" , "Usuario o password incorrecto, por favor intente nuevamente.")
  //window.alert("Usuario o password incorrecto, por favor intente nuevamente.");
}
}

export async function login(usuario: objUsuario){

  var result : LoginResponse

  try {
    // const response: Response
    const response = await fetch('https://localhost:44362/api/Access/Login', {
      method: 'POST',
      //mode: 'cors',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        usuario:usuario.usuario,
        password:usuario.password
      }),
    });

    if (!response.ok) {throw new Error(`Error! status: ${response.status}`);}

    // const result: CreateUserResponse
    const result = (await response.json()) as LoginResponse;
    const json = JSON.stringify(result, null, 4);
    console.log('result is: ', json);
    return result;

  } catch (error) {
    if (error instanceof Error) {
      console.log('error message: ', error.message);
      result.message = error.message;
    } else {
      console.log('unexpected error: ', error);
      result.message = 'An unexpected error occurred';
    }
    result.result = -1;
    return result;
  }
}