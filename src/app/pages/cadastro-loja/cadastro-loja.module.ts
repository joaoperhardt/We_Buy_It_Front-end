import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CadastroLojaComponent } from './cadastro-loja.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderModule } from '../home/header/header.module';



@NgModule({
  declarations: [
    CadastroLojaComponent
  ],
  exports: [CadastroLojaComponent],
  imports: [
    CommonModule, NzButtonModule, NzFormModule, NzSelectModule, ReactiveFormsModule,
    HeaderModule
]
})
export class CadastroLojaModule { }
