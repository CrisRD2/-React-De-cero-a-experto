
/* Importo heroes con el renombre  heroes as misSuperHeroesFav*/
import { heroes, type Hero, Owner } from './data/heroes.data';

const getHeroById = (id: number): Hero | undefined => {

    const hero = heroes.find((hero) => {
        return hero.id === id;
    });

    /* if (!hero) {
        throw new Error("No existe este heroe con id ${id}");
        
    } */
    return hero;
};
/* console.log(getHeroById(3)); */

/* fin devulver el primero con el valor por el que buscas
filter devulve un arreglo */
/* export const getHeroesByOwner = (owner: Owner) => {
    const hero = heroes.filter((hero) =>
        hero.owner === owner)
    return hero; 
};*/
export const getHeroesByOwner = (owner: Owner) =>
    heroes.filter((hero)=> hero.owner ===owner);