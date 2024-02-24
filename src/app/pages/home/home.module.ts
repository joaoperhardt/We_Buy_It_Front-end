import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderModule } from './header/header.module';
import { CadastroAnuncioModule } from '../cadastro-anuncio/cadastro-anuncio.module';
import { CadastroUsuarioModule } from '../cadastro-usuario/cadastro-usuario.module';
import { CadastroLojaModule } from '../cadastro-loja/cadastro-loja.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    CadastroAnuncioModule,
    CadastroUsuarioModule
    CadastroLojaModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }