export interface Componente {

    icon:string;
    name:string;
    redirectTo: string;
  
}

export interface JwtModel {

    token?: string;
    type?: string;
    nombreUsuario?: string;
    authorities?: string[];

}

export interface LoginUsuario {

    nombreUsuario: string;
    password: string;
}

export interface Cliente {

    run: string;
    nombre: string;
    apPaterno: string;
    apMaterno: string;
    genero: string;
    direccion: string;
    fechaNacimiento: any;
    telefono: string;
    telefono2?: string;
    correo: string;
    esFrecuente: boolean;
    idComuna: number;
    nombreUsuario: string;
    password: string;

}

export interface Region {

    idRegion: number,
    nombre: string

}

export interface Provincia {

    idProvincia: number,
    nombre: string,
    idRegion: number

}

export interface Comuna {

    idComuna: number,
    nombre: string,
    idProvincia: number
    
}