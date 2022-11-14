
export interface preguntaResponse {
  pregunta: string;
  respuesta: objRespuestasList[];
}
  
export interface objRespuestasList {
  id: number;
  posibleRespuesta: string;
  esLaCorrecta: boolean;
}

export interface objPregunta {
  nroPregunta: number;
}


export interface LoginResponse {
  result: number;
  message: string;
  token: string;
};
  
export interface objUsuario {
  usuario: string;
  password: string;
}