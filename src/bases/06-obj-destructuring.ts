/* Destructuring es JS/TS es una forma de sacar datos
de un objeto o array y guardarlos en variables */

/* Creo un objeto llamado person */
const person = {
    name: 'Tony',
    age: 45,
    key: 'Ironman'
}

/* destructuro lo que ponga entre {} del onjeto persona  
y ademans renombro el name
equivalente -> 
const ironmanName = person.name;
const age = person.age;
const key = person.key;*/
const { name: ironmanName, age, key } = person;
console.log({ ironmanName, age, key })

/* Defino el tipo del objeto */
interface Hero {
    name: string;
    age: number;
    key: string;
    rank?: string;
}

/* Recibo el objeto Hero por partes y lo destructuo */
const useContext = ({ key, name, age, rank }: Hero) => {
    /* el return crea un nuevo objeto con estructura diferente */
    return {
        keyname: key,
        user: {
            name,
            age,
        },
        rank: rank
    };
}
/* Llamada a la funcion */
const { rank, keyname, user, } 
= useContext(person);
const { name } = user;
console.log({ rank, keyname, name });
