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

export interface InfoCliente {

    run: string;
    nombreUsuario: string;
    esFrecuente: boolean;

}

export interface Cliente {

    run: string;
    nombre: string;
    appaterno: string;
    apmaterno: string;
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

export interface Funcionario {

    run: string;
    nombre: string;
    appaterno: string;
    apmaterno: string;
    genero: string;
    direccion: string;
    fechaNacimiento: any;
    telefono: string;
    correo: string;
    cargo: string;
    estado: string;
    idComuna: number;
    idRol: number;
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

export interface Edificio {

    direccion: string;
    estado: string;
    idComuna: number;
    nombre: string;

}

export interface Servicio {

    descripcion: string;
    estado: string;
    monto: number;
    
}

export interface CheckInResponse {

    idCheckIn: number;
    fecha: any;
    abono: number;
    runFuncionario: string;
    idReserva: number;

}

export interface CheckOutResponse {

    idCheckOut: number;
    fecha: any;
    multa: number;
    runFuncionario: string;
    idReserva: number;
    
}

export interface ClienteResponse {

    run: string;
    nombre: string;
    apPaterno: string;
    apMaterno: string;
    genero: string;
    direccion: string;
    fechaNacimiento: any;
    telefono: string;
    telefono2?: string;
    correoElectronico: string;
    idComuna: number;
    nombreUsuario: string;

}

export interface DepartamentoResponse {

    idDepartamento: number;
    numDepartamento: number;
    numHabitaciones: number;
    numBanios: number;
    estado: string;
    valor: number;
    imagen?: any;
    dividendo: number;
    contribucion: number;
    disponibilidad: string;
    idEdificio: number;
    runFuncionario: string;

}

export interface EdificioResponse {

    idEdificio: number;
    nombre: string;
    direccion: string;
    idComuna: number;
    estado: string;

}

export interface ObjetoResponse {

    sku: string;
    nombreObjeto: string;
    precio: number;
    cantidad: number;
    estado: string;
    idMarca: number;

}

export interface InventarioObjetoResponse {

    idInventario: number;
    objetos: ObjetoResponse[];

}

export interface InventarioResponse {

    idInventario: number;
    observacion: string;
    fechaInventario: any;
    estado: string;
    idDepartamento: number;

}

export interface MantenimientoResponse {

    idMantencion: number;
    descripcion: string;
    estado: string;
    fechaMantencion: any;
    costo: number;
    idDepartamento: number;

}

export interface ReservaDepartamentoResponse {

    idDepartamento: number;
    numeroDepartamento: number;
    numeroHabitaciones: number;
    numeroBanios: number;
    estado: string;
    valor: number;
    imagen: any;
    dividendo: number;
    contribucion: number,
    disponibilidad: string;
    idEdificio: number;
    runFuncionario: string;
    idReserva: number;

}

export interface ReservaResponse {

    runCliente: string;
    idReserva: number;
    cantDepartamento: number;
    fechaReserva: any;
    monto: number;
    estado: string;

}

export interface ReservaServicioResponse {

    idServicio: number;
    descripcion: string;
    estado: string;
    monto: number;
    idReserva: number;
    fechaInicio: any;
    horaInicio: string;
    fechaTermino: any;
    horaTermino: string;

}

export interface ServicioResponse {

    idServicio: number;
    descripcion: string;
    estado: string;
    monto: number;

}

export interface VehiculoResponse {

    idVehiculo: number;
    patente: string;
    annio: string;
    idModelo: number;
    idColor: number;
    nombreConductor: string;

}

export interface ActualizarCheckIn {

    idCheckin: number;
    fecha: any;
    abono: number;
    runFuncionario: string;
    idReserva: number;

}

export interface ActualizarCheckOut {

    idCheckout: number;
    fecha: any;
    multa: number;
    runFuncionario: string;
    idReserva: number;

}

export interface ActualizarCliente {

    nombre: string;
    appaterno: string;
    apmaterno: string;
    genero: string;
    direccion: string;
    fechaNacimiento: any;
    telefono: string;
    telefono_2: string;
    correo: string;
    esFrecuente: boolean;
    idComuna: number;

}

export interface ActualizarDepartamento {

    numDepto: number;
    numHabitaciones: number;
    numBanios: number;
    estado: string;
    valor: number;
    imagen: any;
    dividendo: number;
    contribucion: number;
    disponibilidad: string;
    runFuncionario: string;

}

export interface ActualizarEdificio {

    direccion: string;
    estado: string;
    id_comuna: number;
    nombre: string;

}

export interface ActualizarFuncionario {

    nombre: string;
    appaterno: string;
    apmaterno: string;
    genero: string;
    direccion: string;
    fechaNacimiento: any;
    telefono: string;
    correo: string;
    cargo: string;
    estado: string;
    idComuna: number;

}

export interface ActualizarInventario {

    idInventario: number;
    observacion: string;
    fechaInventario: any;
    estado: string;
    idDepartamento: number;

}

export interface ActualizarMantenimiento {

    idMantenimiento: number;
    descripcion: string;
    estado: string;
    fechaMantencion: any;
    costo: number;
    idDepartamento: number;

}

export interface ActualizarReserva {

    idReserva: number;
    fechaReserva: any;
    cantDeptos: number;
    monto: number;
    estado: string;

}

export interface ActualizarServicio {

    idServicio: number;
    descripcion: string;
    estado: string;
    monto: number;

}

export interface ActualizarUsuario {

    nombreUsuario: string;
    oldPassword: string;
    newPssword: string;

}

export interface ActualizarVehiculo {

    idVehiculo: number;
    patente: string;
    annio: string;
    idModelo: number;
    idColor: number;
    nombreConductor: string;

}

export interface Inventario {

    observacion: string;
    fechaInventario: any;
    estado: string;
    idDepartamento: number;

}

export interface Mantenimiento {

    descripcion: string;
    estado: string;
    fechaMantencion: any;
    costo: number;
    idDepartamento: number;

}

export interface ObjetoInventario {

    idInventario: number;
    sku: string;

}

export interface Reserva {

    cantDepartamento: number;
    fechaReserva: any;
    monto: number;
    estado: string;
    fechaCheckin: any;
    abono: number;
    runFuncionario: string;
    fechaCheckout: any;
    multa: number;
    runCliente: string;
    idDepartamento: number;

}

export interface ReservaServicio {

    idServicio: number;
    idReserva: number;
    fechaInicio: any;
    horaInicio: string;
    fechaTermino: any;
    horaTermino: string;

}

export interface ServicioTransporte {

    idReserva: number;
    idTransporte: number;

}

export interface Transporte {

    direccionDesde: string;
    direccionHasta: string;
    horaInicio: string;
    fechaInicio: any;
    monto: number;
    estado: string;
    idVehiculo: number;
    idReserva: number;

}

export interface Vehiculo {

    patente: string;
    annio: string;
    idModelo: number;
    idColor: number;
    nombreConductor: string;

}

export interface Departamento {

    numDepto: number;
    numHabitaciones: number;
    numBanios: number;
    estado: string;
    valor: number;
    imagen?: any;
    dividendo: number;
    contribucion: number;
    disponibilidad: string;
    idEdificio: number;
    runFuncionario: string;

}

export interface ServicioTransporte {

    direccionDesde: string;
    direccionHasta: string;
    horaInicio: string;
    fechaInicio: any;
    monto: number;
    estado: string;
    idVehiculo: number;
    idReserva: number;

}

export interface ReservaTransporteResponse {

    idTransporte: number;
    direccionDesde: string;
    direccionHasta: string;
    horaInicio: string;
    fechaInicio: any;
    monto: number;
    estado: string;
    idVehiculo: number;
    idReserva: number;

}

export interface FuncionarioResponse {

    run: string;
    nombre: string;
    apPaterno: string;
    apMaterno: string;
    genero: string;
    direccion: string;
    fechaNacimiento: any;
    telefono: string;
    correo: string;
    cargo: string;
    estado: string;
    nombreUsuario: string;
    idComuna: number;

}