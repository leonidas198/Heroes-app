import { heroes } from "../data/heroes";




export const getHeroesByName = ( name = '' ) => {
    
    name = name.toLowerCase().trim(); /* el trim hace que no queden espacios ni atras ni adelante al escribir un valor de busqueda */
    if ( name.length === 0 ) return [];

    return heroes.filter(
        hero => hero.superhero.toLowerCase().includes( name )
    );
    

    
}
