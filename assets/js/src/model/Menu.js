export class Menu{
    #nombre;
    #ingredientes;
    #precio;
    #tiempo;
    constructor(nombre, ingredientes, precio, tiempo){
        this.#nombre = nombre
        this.#ingredientes = ingredientes
        this.#precio = precio
        this.#tiempo = tiempo
    }

}