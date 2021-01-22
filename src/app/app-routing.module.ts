import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';
import {InicioComponent} from './inicio/inicio.component';

const routes: Routes = [

  {path:'',redirectTo: 'entrar', pathMatch: 'full'},

  {path:'entrar', component:LoginComponent},
  {path:'cadastro', component:CadastroComponent},
  
  {path:'inicio',component:InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
