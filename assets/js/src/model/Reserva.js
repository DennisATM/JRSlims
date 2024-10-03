export class Reserva{
    #id;
    #idUsuario;
    #comensales;
    #fecha;
    #hora;
    #telefono;
    #correo;

    constructor(id, idUsuario, comensales, fecha, hora, telefono, correo){
        this.#id=id
        this.#idUsuario = idUsuario
        this.#comensales = comensales
        this.#fecha = fecha
        this.#hora = hora
        this.#telefono = telefono
        this.#correo = correo
    }
}