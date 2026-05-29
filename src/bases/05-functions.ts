/* El ultimo string significa el valor de retorno */
function greet(name: string): string {
    return `Hola ${name}`;
}

/* Funcion flecha */
const greet2 = (name: string) => `Hola ${name}`;


const message = greet('Goku');
const message2 = greet2('Vegeta');

console.log(message, message2);

/* estructura de objeto, ablioga a contener lo de dentro
validar tipos */
interface User {
    uid: string;
    username: string;
    addNumber?: () => void;
}

/* Funcion que devuelve un objeto tipo User */
function getUser(): User {
    return {
        uid: 'ABC-123',
        username: 'El_Papi23',

    }
}
/* Funcion de flechas */
const getUser2 = () =>
({
    uid: 'g4t',
    username: 'La_Mamita32',
});

const user = getUser();
const user2 = getUser2();

console.log(user, user2);

const myNumbers: number[] = [1, 2, 3, 4, 5];

/* Imprime cada numero como objeto */
/* myNumbers.forEach(function(value)  {
    console.log({value});
});
 */
myNumbers.forEach((value) => {
    console.log(value);
});
/* Esto ejecuratia algo así 
(value, index, array) 
1 0 [1,2,3,4,5]
2 1 [1,2,3,4,5]
3 2 [1,2,3,4,5]
4 3 [1,2,3,4,5]
5 4 [1,2,3,4,5]*/
myNumbers.forEach(console.log);