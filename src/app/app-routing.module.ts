import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registro-cliente',
    loadChildren: () => import('./pages/registro-cliente/registro-cliente.module').then( m => m.RegistroClientePageModule)
  },
  {
    path: 'loading',
    loadChildren: () => import('./pages/loading/loading.module').then( m => m.LoadingPageModule)
  },
  {
    path: 'edificios',
    loadChildren: () => import('./pages/edificios/edificios.module').then( m => m.EdificiosPageModule)
  },
  {
    path: 'servicios',
    loadChildren: () => import('./pages/servicios/servicios.module').then( m => m.ServiciosPageModule)
  },
  {
    path: 'registro-reserva',
    loadChildren: () => import('./pages/registro-reserva/registro-reserva.module').then( m => m.RegistroReservaPageModule)
  },
  {
    path: 'reservas',
    loadChildren: () => import('./pages/reservas/reservas.module').then( m => m.ReservasPageModule)
  },
  {
    path: 'cliente',
    loadChildren: () => import('./pages/cliente/cliente.module').then( m => m.ClientePageModule)
  },
  {
    path: 'ver-edificios',
    loadChildren: () => import('./pages/ver-edificios/ver-edificios.module').then( m => m.VerEdificiosPageModule)
  },
  {
    path: 'ver-servicios',
    loadChildren: () => import('./pages/ver-servicios/ver-servicios.module').then( m => m.VerServiciosPageModule)
  },
  {
    path: 'ver-usuarios-cliente',
    loadChildren: () => import('./pages/ver-usuarios-cliente/ver-usuarios-cliente.module').then( m => m.VerUsuariosClientePageModule)
  },
  {
    path: 'ver-usuarios-funcionario',
    loadChildren: () => import('./pages/ver-usuarios-funcionario/ver-usuarios-funcionario.module').then( m => m.VerUsuariosFuncionarioPageModule)
  },
  {
    path: 'registro-funcionario',
    loadChildren: () => import('./pages/registro-funcionario/registro-funcionario.module').then( m => m.RegistroFuncionarioPageModule)
  },
  {
    path: 'registro-departamento',
    loadChildren: () => import('./pages/registro-departamento/registro-departamento.module').then( m => m.RegistroDepartamentoPageModule)
  },
  {
    path: 'registro-mantencion',
    loadChildren: () => import('./pages/registro-mantencion/registro-mantencion.module').then( m => m.RegistroMantencionPageModule)
  },
  {
    path: 'agregar-objeto',
    loadChildren: () => import('./pages/agregar-objeto/agregar-objeto.module').then( m => m.AgregarObjetoPageModule)
  },
  {
    path: 'registro-inventario',
    loadChildren: () => import('./pages/registro-inventario/registro-inventario.module').then( m => m.RegistroInventarioPageModule)
  },
  {
    path: 'cambiar-checkin',
    loadChildren: () => import('./pages/cambiar-checkin/cambiar-checkin.module').then( m => m.CambiarCheckinPageModule)
  },
  {
    path: 'cambiar-checkout',
    loadChildren: () => import('./pages/cambiar-checkout/cambiar-checkout.module').then( m => m.CambiarCheckoutPageModule)
  },
  {
    path: 'funcionario',
    loadChildren: () => import('./pages/funcionario/funcionario.module').then( m => m.FuncionarioPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
