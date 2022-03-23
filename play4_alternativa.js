class Pokemon {
    constructor(id, nombre, tipo, fuerza, puntosVida = 100) {
        this.id = id;
        this.nombre = nombre;
        this.tipo = tipo;
        this.fuerza = fuerza;
        this.puntosVida = puntosVida;
    }

    reforzar() {
        this.fuerza = this.fuerza * 2;
    }
}

let pikachu = new Pokemon(666, "Pikachu", ["eléctrico", "tierra"], 50);

let bulbasaur = new Pokemon(1, "Bulbasur", ["agua", "planta"], 45, 150);

console.log(pikachu);
console.log(bulbasaur);