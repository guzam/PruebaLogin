
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