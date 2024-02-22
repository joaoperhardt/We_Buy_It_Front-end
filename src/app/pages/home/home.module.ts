import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderModule } from './header/header.module';
import { CadastroAnuncioModule } from '../cadastro-anuncio/cadastro-anuncio.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    CadastroAnuncioModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
