import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderModule } from './header/header.module';
import { CadastroLojaModule } from "../cadastro-loja/cadastro-loja.module";



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
        CadastroLojaModule
    ]
})
export class HomeModule { }
