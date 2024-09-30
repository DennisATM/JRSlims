class Usuario{
    #id;
    #nombre;
    #apellido;
    #correo;
    #telefono;

    constructor(id, nombre, apellido, correo, telefono){
        this.#id = id,
        this.#nombre = nombre,
        this.#apellido = apellido,
        this.#correo = correo,
        this.#telefono = telefono
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
}

class Reserva{
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

class Menu{
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

const crearUsuario = (id,nombre,apellido,correo,telefono)=>{
    let existe = arrayUsuarios.find(usuario => usuario.getId() === id);
    if(existe == null){
        arrayUsuarios.push(new Usuario(id,nombre,apellido,correo,telefono));
        pintarListadoUsuarios(arrayUsuarios);
        alert('Usuario registrado con éxito..');
    }else{
        alert('El id ya se encuentra registrado');
    }
}

const pintarListadoUsuarios = (usuarios)=>{
    listadoUsuarios.innerHTML="";
    listadoUsuarios.innerHTML= `<div class="table-responsive">
                                  <table class="table table-sm table-primary">
                                    <thead>
                                        <tr>
                                            <th>Nombre</td>
                                            <th>Apellido</td>
                                            <th>Correo</td>
                                            <th>Teléfono</td>
                                        </tr>
                                    </thead>
                                    <tbody id="tablaUsuarios">
                                    </tbody>
                                  </table>
                                </div>`

    usuarios.forEach(usuario => {
        tablaUsuarios.innerHTML += `<tr>
                                        <td>${usuario.getNombre()}</td>
                                        <td>${usuario.getApellido()}</td>
                                        <td>${usuario.getCorreo()}</td>
                                        <td>${usuario.getTelefono()}</td>
                                    </tr>`
    });
}

const borrarFormulario = ()=>{
    formRegistro.reset()
}

const formRegistro = document.getElementById('formRegistro');
const listadoUsuarios = document.getElementById('listadoUsuarios');

let arrayUsuarios=[];

listadoUsuarios.innerHTML='<p class="text-danger">No existen Usuarios Registrados</p>'

formRegistro.addEventListener('submit',function(e){
    e.preventDefault();

    let id=document.querySelector('#idUsuario').value;
    let nombre=document.querySelector('#nombreUsuario').value;
    let apellido=document.querySelector('#apellidoUsuario').value;
    let correo=document.querySelector('#correoUsuario').value;
    let telefono=document.querySelector('#telefonoUsuario').value;
    
    crearUsuario(id,nombre,apellido,correo,telefono);
    borrarFormulario();
})