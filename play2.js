// Vamos a crear una clase tipo Gato; que nos va a servir de "plantilla" para crear objetos del TIPO Gato

// Los gatos tienen nombre y edad

class Gato {

    // Método/Función especial que se va a encargar de construir el nuevo gato
    constructor(nombre, edad) {
        this.nombre = nombre; // El objeto que voy a crear, debe contener una propiedad que se llama 'nombre' y el valor de lo que pasan por parámetro
        this.edad = edad;
    }

    // Métodos que quieras para tu Gato
    maullar() {
        console.log("Miau!")
    }
}

// Crear un gato que se llama "Berto" y tiene 10 años

// Instanciar/crear un objeto de la clase Gato
let gato1 = new Gato("Berto", 10);
console.log(gato1);

// Puedo instanciar un segundo gato, con parámetros diferentes
let gato2 = new Gato("Pere", 7);
console.log(gato2);
gato2.maullar();
