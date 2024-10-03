import {Validar} from './Validacion.js';
import { REGEX_NOMBRES, REGEX_EMAIL, REGEX_TELEFONO } from '../utils/Constantes.js';

export class Usuario{
    #id;
    #nombre;
    #apellido;
    #correo;
    #telefono;
    #reservas;

    constructor(id, nombre, apellido, correo, telefono){
        this.#id = id,
        this.#nombre = Validar.datoPersonal(nombre, REGEX_NOMBRES),
        this.#apellido = Validar.datoPersonal(apellido, REGEX_NOMBRES),
        this.#correo = Validar.email(correo, REGEX_EMAIL),
        this.#telefono = Validar.telefono(telefono,REGEX_TELEFONO)
        this.#reservas=[];
    }

    //Getters
    getId(){
        return this.#id;
    }
    getNombre(){
        return this.#nombre;
    }
    getApellido(){
        return this.#apellido;
    }
    getCorreo(){
        return this.#correo;
    }
    getTelefono(){
        return this.#telefono;
    }

    agregarReserva(nuevaReserva){
        try {
            this.#reservas.push(Validar.reserva(nuevaReserva));
        } catch (error) {
            console.error('No se pudo agregar la reserva', error);
        }
    }
}