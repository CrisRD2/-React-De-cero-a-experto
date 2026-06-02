import type { GiphyRandomResponse, Gif } from './data/giphy.response';
const API_KEY = '2jBKzOVKQ349ePSg5FPnSgbTeRWIOESi';

// mostramos la img
const createImageInsideDown = (url: string) => {
    const imgElement = document.createElement('img');
    imgElement.src = url;
    //insertamos la img en el body
    document.body.append(imgElement);
};

// async significa que puede esperar operaciones lentas
const getRandomGifUrl = async (): Promise<string> => {

    // Peticion a la url
    const response = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`);
    // Convierte el JSON recibido en un objeto JavaScript.
    const { data }: GiphyRandomResponse = await response.json();
    return data.images.original.url;
};
// llamo a la funcion, y con el then recibe el valor que devuelve la promesa y se lo pasa automáticamente a la función que le indiques.
getRandomGifUrl().then(createImageInsideDown);
