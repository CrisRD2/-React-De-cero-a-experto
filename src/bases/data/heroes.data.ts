export interface Hero {
    id: number,
    name: string,
    owner: Owner;
}
/* Crear type cuando tenga valores especificos */
// type Owner = 'DC' | 'Marvel';

/* Cuando necesito saber la posicion */
export enum Owner{
    DC = 'DC', //0
    Marvel = 'Marvel', //1
}
/* Export para poder usarlo en otro lado */
export const heroes: Hero[] = [
    {
        id: 1,
        name: 'Batman',
        owner: Owner.DC,
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: Owner.Marvel,
    },
    {
        id: 3,
        name: 'Superman',
        owner: Owner.DC,
    },
    {
        id: 4,
        name: 'Flash',
        owner: Owner.DC,
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: Owner.Marvel,
    },
    {
        id: 3,
        name: 'Green Lanter',
        owner: Owner.DC
    }
];



export default heroes;



