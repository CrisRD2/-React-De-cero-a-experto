import type { GiphyRandomResponse, Gif } from './data/giphy.response';
const API_KEY = '2jBKzOVKQ349ePSg5FPnSgbTeRWIOESi';

const myRequest = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=&rating=g`);
// mostramos la img
const createImageInsideDown = (url: string) => {
    const imgElement = document.createElement('img');
    imgElement.src = url;
    document.body.append(imgElement);
};

// Peticion a giphy
myRequest
    .then((response) => response.json())
    .then(({ data }: GiphyRandomResponse) => {
        const imgUrl = data.images.original.url;
        createImageInsideDown(imgUrl);

    })
    .catch((err) => console.log(err));