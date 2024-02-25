import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderModule } from '../home/header/header.module';
import { TelaPesquisaComponent } from './tela-pesquisa.component';


@NgModule({
  declarations: [TelaPesquisaComponent],
 
  imports: [
  
  CommonModule, 
  NzButtonModule, 
  NzFormModule, 
  NzSelectModule, 
  ReactiveFormsModule,
  HeaderModule,
  ],
  exports:[TelaPesquisaComponent],
})
export class TelaPesquisaModule { }
