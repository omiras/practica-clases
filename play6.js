/**
 * Estamos en un mondo de fantasía en el que existen diferentes tipos de personajes y roles. Guerreros, clérigos, bardos, etc.
 * 
 * https://carmensminiaturepainting.blogspot.com/2011/03/elf-sniper-and-d-classes.html
 * 
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Classes#subclases_con_extends
 * 
 */

/**
 * 1) Crea una clase Personaje.
 * Dicha clase tiene las siguientes características (vamos a simplificarlo)
 * 
 *  - Nombre
 *  - Raza
 *  - Puntos de vida
 *  - Características (objeto) 
 *  - experiencia (inicialmente vale 0 puntos para todos los PJ)
 * 
 *  Además todos los personajes cuando empiezan sus aventuras tienen 0 puntos de experiencia. Guarda también este dato como propiedad de la clase.
 */

/*
* "Características" es una variable de tipo Caracteristica, que se compone de :
     - Fuerza
     - Agilidad
     - Resistencia
     - Inteligencia
*/

class Personaje {
    constructor(nombre, raza, puntoVida, caracteristicas) {
        this.nombre = nombre;
        this.raza = raza;
        this.vida = puntoVida;
        this.caracteristicas = caracteristicas;
        this.experiencia = 0;
    }

    puñetazo() {
        console.log(`${this.nombre} pega un puñetazo y produce ${this.caracteristicas.fuerza} puntos de daño.`)
    }
}

let caracteristicas = {
    fuerza: 12,
    agilidad: 15,
    resistencia: 9,
    inteligencia: 17
}
let personaje = new Personaje('Arod', 'Elfo', 150, caracteristicas)
//personaje.puñetazo();

// Introducir la subclas de Guerrero. Los Guerreros cuando los creamos sufren de las siguientes modificaciones
// +1 a su fuerza base
// -1 a su inteligencia base
// ataque especial que es ataque 'mamporro'. Mamporro causa el valor de su fuerza * 2 de daño.

class Guerrero extends Personaje {
    constructor(nombre, raza, vida, caracteristicas) {
        // invocar el constructor de la clase padre

        caracteristicas.fuerza++;
        caracteristicas.inteligencia--;

        super(nombre, raza, vida, caracteristicas)
    }

    mamporro() {
        console.log(`${this.nombre} pega un mamporro con fuerza ${this.caracteristicas.fuerza * 2}`);
    }
}

let guerrero = new Guerrero("He-man", "Humano", 200, {
    fuerza: 18,
    agilidad: 10,
    resistencia: 9,
    inteligencia: 17
});

console.log(guerrero);

guerrero.puñetazo();
guerrero.mamporro();

// Implementadme la subclase 'Clérigo".
/** Es un Personaje curandero que tiene las siguientes características:
 *    - Por el hecho de ser Clérigo, en el momento de instanciarlo, hay que restar 1 punto de fuerza y sumar un punto de inteligencia en el constructor. 
 * 
 *    - Posee un método de nombre 'curar'. Si se usa sin parámetros, se cura a si mismo tantos puntos de vida como el valor de su inteligencia. Si se invoca sobre otro personaje, le cura a él dichos puntos de vida. 
 * 
 * Nota: para simplificar, vamos a pensar que un personaje se puede curar por encima de sus puntos de vida
 * 
 *      curar(personaje) 
 */
class Clerigo extends Personaje {
    constructor(nombre, raza, vida, caracteristicas) {
        // invocar el constructor de la clase padre

        caracteristicas.fuerza--;
        caracteristicas.inteligencia++

        super(nombre, raza, vida, caracteristicas)
    }

    curar(personaje) {
        if (personaje) {
            // tengo que curar al personaje
            personaje.vida = personaje.vida + this.caracteristicas.inteligencia;
        }

        else {
            // me tengo curar a mi mismo/a
            this.vida += this.caracteristicas.inteligencia;
        }
    }

}


let sona = new Clerigo("Sona", "Humano", 150, {
    fuerza: 9,
    agilidad: 14,
    resistencia: 9,
    inteligencia: 21
}); // tras crearla, su fuerza debería ser 8 y su inteligencia 22

console.log("Sona:", sona.vida)
console.log("He-man:", guerrero.vida)

sona.curar() // Invoca curar sin parámetros, se cura a si misma sus puntos de inteligencia. Sus puntos de vida deberían quedar en 172.

// Cómo compruebo si un parámetro tiene un valor??

sona.curar(guerrero) // Los puntos de vida del guerrero deberían quedar en 222

console.log("Sona:", sona.vida)
console.log("He-man:", guerrero.vida)

// puedo ejecutar esto?
// sona.mamporro();

// Respuesta: NO! Los Clerigo no tienen un método llamado 'mamporro'.