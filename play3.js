/**
 * Vamos a definir una clase Pokemon.
 * Los Pokemon se pueden por:
 *    - Su identificador de Pokedex
 *    - Su nombre
 *    - Sus puntos de fuerza
 *    - De que tipo son (pueden ser de diversos tipos)
 *    
 *     - Definir un método "reforzar" que al invocarlo, DOBLA la fuerza del pokemon (lo podreis comprar si tras invocar el método su fuerza se ha doblado) 
 * 
 * Ejercicio: Definidme la clase Pokemon con estas carecterísticas e instanciadme dos objetos del tipo Pokemon tal que así:
 * 
 * - Instanciar un pokemon que se llama "Pikachu", su PokedexID es 666; y es del tipo ["eléctrico", "tierra"] y tiene 50 de fuerza.
 * 
 *  - Instanciar un pokemon que se llama "Bulbasur", su PokedexID es 2, es de tipo ["agua", "planta"] y su fuerza es 45.
 * 
 */

class Pokemon {
    constructor(id, nombre, tipo, fuerza) {
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.fuerza = fuerza;
    }

    reforzar() {
        this.fuerza = this.fuerza * 2;
    }
}

let pikachu = new Pokemon(666, "Pikachu", ["eléctrico", "tierra"], 50);

let bulbasaur = new Pokemon(1, "Bulbasur", ["agua", "planta"], 45);

console.log(pikachu);
console.log(bulbasaur);

// Probar el método "reforzar"
// console.log(bulbasaur);
// bulbasaur.reforzar();
// console.log(bulbasaur); // Su vida debe ser de 90
