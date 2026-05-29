/* Creo una promesa y la guardo en myPromise y nos devolverá un numero */
/* resolve => Todo sale bien
    reject=> algo falla */
const myPromise = new Promise<number>((resolve, reject) => {
   //Espera 2 segundos
    setTimeout(() => {
        //!Yoquieromidinero
        // si todo va bien, muestra resolve
        resolve(100);  
        // si algo falla, devuelve esto:
        reject("Mi amigo se perdio");
    }, 2000); // 2 segunso
});
// then se ejecuta cunado sale bien
myPromise.then(
    // este paramentor recibe el valor de resolve
    (myMoneyIsBack) => {
        console.log(`Tengo mi dinero ${myMoneyIsBack}`);
    }).catch(reason => { //captura erroes de la primise
        console.warn(reason);
    })
    // se ejecuta siempre, tenga exito o no
    .finally(() => {
        console.log('Pues a seguir con mi vida');
    });