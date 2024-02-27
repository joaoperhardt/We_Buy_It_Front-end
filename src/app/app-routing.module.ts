import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './pages/home/header/header.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { ProductComponent } from './pages/product/product.component';
import { PrincipalTelaComponent } from './pages/principal-tela/principal-tela.component';
import { CadastroAnuncioComponent } from './pages/cadastro-anuncio/cadastro-anuncio.component';
import { TelaPesquisaComponent } from './pages/tela-pesquisa/tela-pesquisa.component';

const routes: Routes = [
  {path: 'home',  pathMatch: `full`, component: PrincipalTelaComponent},
  {path: '', pathMatch: `full`, component: PrincipalTelaComponent},
  {path: 'user', pathMatch: `full`, component: UserProfileComponent},
  {path: 't', pathMatch: `full`, component: ProductComponent},
  {path: 'anuncio', pathMatch: `full`, component: CadastroAnuncioComponent},
  {path: 'search', pathMatch: `full`, component: TelaPesquisaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
