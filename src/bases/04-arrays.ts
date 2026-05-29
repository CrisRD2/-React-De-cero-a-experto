/* El array solo puede contener tipo number */
const myArray: number[] = [1,2,3,4,5,6];
/* Copiamos myArray de forma independiente */
const myArray2 = [...myArray];

/* Si hubieramos hecho 
 const myArray2 = myArray;
 Al modificar miArray2 modificaramos ambos
*/

/* Agregamos numeros al array */
myArray.push(10);
myArray2.push(11);

console.log(myArray,myArray2);

