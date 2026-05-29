const characterNames = ['Goku', 'Vegeta', 'Trunks'];
/* Dejo los huecos sin ocupar en memoria, y saco el trunks */
const [, , p3] = characterNames;
console.log({ p3 })

/* Con as const, hacemos que no se pueda modificar 
si siempre va ser la primera posicion es string y la segunda de numeros*/
const returnsArrayFn = () => {
    return ['ABC', 123] as const;
};

/* Deestructuracion del array */
const [letters, numbers] = returnsArrayFn();
console.log(letters, numbers);

/* Crea una función llamada useState. Debe cumplir con los siguientes requisitos:

Requisitos
La función debe llamarse useState.

Debe retornar un arreglo con dos elementos:

#1 - Un string (el valor inicial).

#2 - Una función anónima de flecha que:

Recibe un string.
Imprime ese string en consola.  */

const useState = (value: string) => {
    return [value, (newValue: string) => { console.log(newValue) }

    ] as const;
}

const [name, setName] = useState('Goku');
console.log(name);
setName('Vegeta');