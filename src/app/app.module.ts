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
import { CadastroUsuarioModule } from "./pages/cadastro-usuario/cadastro-usuario.module";
import { PaymentMethodModule } from "./pages/payment-method/payment-method.module";
import { CarrinhoDeComprasComponent } from './pages/carrinho-de-compras/carrinho-de-compras.component';


registerLocaleData(en);

@NgModule({
    declarations: [
        AppComponent,
        CarrinhoDeComprasComponent
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
        CadastroUsuarioModule,
        PaymentMethodModule
    ]
})
export class AppModule { }