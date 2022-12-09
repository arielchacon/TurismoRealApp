import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Componente, InfoCliente } from './interfaces/interfaces';
import { DataService } from './services/data.service';
import { TokenService } from './services/token.service';
import { UsuarioService } from './services/usuario.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit{

  isLogged = false;
  isAdmin = false;
  isCliente = false;
  isEmpleado = false;
  infoCliente: InfoCliente;
 
  componentes: Observable<Componente[]>;
  
  constructor(private dataService: DataService, private tokenService: TokenService, private usuarioService: UsuarioService, private router: Router) {}
  
  ngOnInit(): void {

    if (this.tokenService.getToken()) {
      this.isLogged = true;
      
      if (this.tokenService.getAuthorities().indexOf('ROLE_ADMIN') !== -1) {
       this.isAdmin = true;
       this.componentes=this.dataService.getMenuAdminOpts();
      } else if (this.tokenService.getAuthorities().indexOf('ROLE_CUSTOMER') !== -1){
        this.isCliente = true;
        this.componentes=this.dataService.getMenuClientOpts();
        this.usuarioService.buscarInfoCliente(this.tokenService.getUserName()).subscribe(data => {
          this.infoCliente = data;
          this.usuarioService.guardarRut(this.infoCliente.run);
        });
      } else if (this.tokenService.getAuthorities().indexOf('ROLE_EMPLOYEE') !== -1){
        this.isEmpleado = true;
        this.componentes=this.dataService.getMenuEmployeeOpts();
      }

    } else {
      this.isLogged = false;
      this.componentes=this.dataService.getMenuFirstOpts();
    }
  }

  logOut() {
    this.tokenService.logOut();
    this.router.navigate(['']);
    window.location.reload();
  }

}
