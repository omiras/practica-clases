// Todos los pokemons inicialmente tienen un número determinado de puntos de vida. Para simplificar, diremos que todos tienen 100 puntos de vida al crearse


class Pokemon {
    constructor(id, nombre, tipo, fuerza) {
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.fuerza = fuerza;
        this.puntosVida = 100;
    }

    reforzar() {
        this.fuerza = this.fuerza * 2;
    }

    // El método golpear lo que hace es pegar a otro pokemon con una fuerza equivalente a propiedad "fuerza"
    golpear(pokemonAtacado) {
        // pokemonAtacado debe reducir sus puntos de vida en función de la fuerza el pokemon atacante
        // Recordad que la fuerza del pokemon que invoca "golpear" está en this.fuerza
        pokemonAtacado.puntosVida = pokemonAtacado.puntosVida - this.fuerza;
    }
}

let pikachu = new Pokemon(666, "Pikachu", ["eléctrico", "tierra"], 50);

let bulbasaur = new Pokemon(1, "Bulbasur", ["agua", "planta"], 45);

console.log(pikachu);
console.log(bulbasaur);

console.log("Pikachu ataca a bulbasur")
pikachu.golpear(bulbasaur);
console.log("Puntos de vida restantes de Bulbasur tras recibir el ataque");
console.log(bulbasaur.puntosVida); // 50

console.log("==============");
console.log("Bulbasur ataca a Pikachu");
bulbasaur.golpear(pikachu);
console.log("Puntos de vida restantes de Pikachu tras recibir el ataque");
console.log(pikachu.puntosVida); // 55
