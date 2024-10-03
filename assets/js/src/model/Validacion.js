export class Validar{
    static datoPersonal(nombre,regex){
        if(nombre === null || nombre===undefined) return "El campo nombre está vacío";
        if(!regex.test(nombre)) throw new Error('El nombre o apellido bdeben contener solo letras y espacios');
        return nombre;
    }

    static telefono(telefono, regex){
        if(!regex.test(telefono)) throw new Error('El número de teléfono no es válido');
        return telefono;
    }

    static email(email, regex){
        if(!regex.test(email)) throw new Error('El b email ingresado no es válido');
        return email;
    }
    static reserva(reserva){
        if(!(reserva instanceof Reserva)) throw new Error ('No es una instancia de la clase Reserva');
        return reserva;
    }
}