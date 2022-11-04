import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { LoginUsuario } from 'src/app/interfaces/interfaces';
import { TokenService } from 'src/app/services/token.service';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  usuario: LoginUsuario = {
    nombreUsuario: '',
    password: ''
  }

  nombreUser: string;
  isLogged = false;
  isLoginFail = false;
  roles: string[]=[];
  errorMsg = '';

  constructor(private usuarioService: UsuarioService,
              private tokenService: TokenService, 
              private alertController: AlertController,
              private navCtrl: NavController) { }

  ngOnInit() {
    if (this.tokenService.getToken()) {
      // comprobamos los valores del token
        console.log('Nombre: ' + this.tokenService.getUserName());
        console.log('Token: ' + this.tokenService.getToken());
        console.log('Roles: ' + this.tokenService.getAuthorities());
        this.nombreUser = this.tokenService.getUserName();
        this.isLogged = true;
        this.isLoginFail = false;
        this.roles = this.tokenService.getAuthorities();
      }
  }

  onLogin( fLogin: NgForm){

    this.usuarioService.login(this.usuario).subscribe(data =>{
      this.tokenService.setToken(data.token);
      this.tokenService.setUserName(data.nombreUsuario);
      this.tokenService.setAuthorities(data.authorities);

      this.isLogged=true;
      this.isLoginFail=false;
      this.roles=this.tokenService.getAuthorities();
      window.location.reload();
   
    }, (err:any) => {

      console.log(err);
      this.isLogged=false;
      this.isLoginFail=true;
      this.errorMsg=err.error.message;
      this.presentAlert();

    })

  }

  redirectInicio(){

    this.navCtrl.navigateRoot('inicio', {animated:true});

  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Fail en el login',
      message: this.errorMsg,
      buttons: ['Aceptar']
    });

    await alert.present();
  }

onLogout() {
  this.tokenService.logOut();
  window.location.reload();
}



}
