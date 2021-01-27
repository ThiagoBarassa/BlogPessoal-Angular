import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment.prod';
import { UsuarioLogin } from '../model/UsuarioLogin';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuarioLogin: UsuarioLogin = new UsuarioLogin()

  constructor(
    private router: Router,
    private authService: AuthService,
    private alertas: AlertasService
  ) { }

  ngOnInit(){
    window.scroll(0,0)
  }

  entrar(){
    this.authService.login(this.usuarioLogin).subscribe((respo:UsuarioLogin)=>{
      this.usuarioLogin = respo

      environment.token = this.usuarioLogin.token
      environment.nome = this.usuarioLogin.nome
      environment.id = this.usuarioLogin.id
      environment.foto = this.usuarioLogin.foto
      
      this.usuarioLogin.foto

      this.router.navigate(['/inicio'])
    }, erro =>{
      if(erro.status == 500){
        this.alertas.showAlertDanger('Usuario ou senha incorreta')
      }
    })
  }

}
