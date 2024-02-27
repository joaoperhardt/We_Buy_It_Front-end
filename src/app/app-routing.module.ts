import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './pages/home/header/header.component';
import { UserProfileComponent } from './pages/user-profile/user-profile.component';
import { ProductComponent } from './pages/product/product.component';
import { PrincipalTelaComponent } from './pages/principal-tela/principal-tela.component';

const routes: Routes = [
  {path: 'home',  pathMatch: `full`, component: PrincipalTelaComponent},
  {path: '', pathMatch: `full`, component: PrincipalTelaComponent},
  {path: 'user', pathMatch: `full`, component: UserProfileComponent},
  {path: 't', pathMatch: `full`, component: ProductComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
