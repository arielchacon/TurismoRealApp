export interface Componente {

    icon:string;
    name:string;
    redirectTo: string;
  
}

export interface Usuario {

    idUsuario: number;
    nombreUsuario: string;
    estado: string;
    rol: string;

}

export interface Cliente {

    run: string;
    nombre: string;
    apPaterno: string;
    apMaterno: string;
    genero: string;
    direccion: string;
    fechaNacimiento: Date;
    telefono: string;
    telefono2?: string;
    correo: string;
    esFrecuente: boolean;
    idComuna: number;
    nombreUsuario: string;
    password: string;

}