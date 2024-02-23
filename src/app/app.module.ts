import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeModule } from './pages/home/home.module';
import { CadastroLojaModule } from './pages/cadastro-loja/cadastro-loja.module';
import { AppRoutingModule } from './app-routing.module';
import { CadastroLojaComponent } from './pages/cadastro-loja/cadastro-loja.component';

registerLocaleData(en);

@NgModule({
    declarations: [
        AppComponent
    ],
    providers: [
        { provide: NZ_I18N, useValue: en_US }
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        BrowserAnimationsModule,
        HomeModule,
        AppRoutingModule,
        CadastroLojaModule
    ]
})
export class AppModule { }