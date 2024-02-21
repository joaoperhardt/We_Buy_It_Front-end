import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderModule } from './header/header.module';
import { CadastroUsuarioModule } from "./cadastro-usuario/cadastro-usuario.module";
import { CadastroAnuncioModule } from '../cadastro-anuncio/cadastro-anuncio.module';


@NgModule({
  declarations: [
      HomeComponent
  ],
  exports: [
      HomeComponent
  ],
  imports: [
      CommonModule,
      HeaderModule,
      CadastroUsuarioModule,
      CadastroAnuncioModule,
  ]
})
export class HomeModule { }

