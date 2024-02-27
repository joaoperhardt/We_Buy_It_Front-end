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
import { LoginModule } from './pages/login/login.module';
import { CadastroUsuarioModule } from "./pages/cadastro-usuario/cadastro-usuario.module";
import { PaymentMethodModule } from "./pages/payment-method/payment-method.module";
import { CarrinhoDeComprasComponent } from './pages/carrinho-de-compras/carrinho-de-compras.component';
import { PrincipalTelaComponent } from './pages/principal-tela/principal-tela.component';
import { PrincipalTelaModule } from './pages/principal-tela/principal-tela.module';

registerLocaleData(en);

@NgModule({
  
    declarations: [
        AppComponent,

        CarrinhoDeComprasComponent,

        PrincipalTelaComponent

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
        PaymentMethodModule,
        PrincipalTelaModule,
        LoginModule
        
    ]

})
export class AppModule { }