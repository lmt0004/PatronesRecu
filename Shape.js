// Singleton
class Forma {
    constructor(tamaño, color) {
        if (new.target === Forma) {
            throw new Error("La clase Forma no puede ser instanciada directamente.");
        }
        this.tamaño = tamaño;
        this.color = color;
    }

    dibujar() {
        console.log(`Forma con tamaño: ${this.tamaño} y color: ${this.color}`);
    }
}

// Fábrica
class Circulo extends Forma {
    constructor(tamaño, color) {
        super(tamaño, color);
    }

    dibujar() {
        console.log(`Dibujando un círculo con tamaño: ${this.tamaño}`);
    }
}

class Cuadrado extends Forma {
    constructor(tamaño, color) {
        super(tamaño, color);
    }

    dibujar() {
        console.log(`Dibujando un cuadrado con tamaño: ${this.tamaño}`);
    }
}

// Decorador
class Decorador extends Forma {
    constructor(forma) {
        super();
        this._forma = forma;
    }

    dibujar() {
        this._forma.dibujar();
    }
}

class DecoradorTamaño extends Decorador {
    constructor(forma, nuevoTamaño) {
        super(forma);
        this.tamaño = nuevoTamaño;
    }

    dibujar() {
        console.log(`Forma decorada con nuevo tamaño: ${this.tamaño}`);
        super.dibujar();
    }
}

class DecoradorColor extends Decorador {
    constructor(forma, nuevoColor) {
        super(forma);
        this.color = nuevoColor;
    }

    dibujar() {
        console.log(`Forma decorada con nuevo color: ${this.color}`);
        super.dibujar();
    }
}

// Principal
const circulo = new Circulo(10, "rojo");
const cuadrado = new Cuadrado(15, "azul");

console.log(circulo);
console.log(cuadrado);

const circuloDecorado = new DecoradorTamaño(new Circulo(8, "verde"), 12);
const cuadradoDecorado = new DecoradorColor(new Cuadrado(12, "amarillo"), "naranja");

console.log(circuloDecorado);
console.log(cuadradoDecorado);

console.log("Formas originales:");
circulo.dibujar();
cuadrado.dibujar();

console.log("Formas decoradas:");
circuloDecorado.dibujar();
cuadradoDecorado.dibujar();
