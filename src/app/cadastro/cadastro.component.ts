import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../model/Usuario';
import { AlertasService } from '../service/alertas.service';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  usuario: Usuario = new Usuario
  confirmSenha: string
  tipoUsario: string
  constructor(
    private authService: AuthService,
    private router: Router,
    private alertas: AlertasService
  ) { }

  ngOnInit(){
    window.scroll(0,0)
  }


  confirmarSenha(event: any){
    this.confirmSenha = event.target.value

  }

  tipoUser(event: any){
    this.tipoUsario = event.target.value
  }

  cadastrar(){
    this.usuario.tipo = this.tipoUsario

    if(this.usuario.senha != this.confirmSenha){
      this.alertas.showAlertDanger('A senhas estao incorretas')
    }else{
      this.authService.cadastrar(this.usuario).subscribe((resp: Usuario) =>{
        this.usuario = resp

        this.router.navigate(['/entrar'])

    this.alertas.showAlertSuccess('Usuário cadastrado com sucesso!')
      })
    }
  }
}
