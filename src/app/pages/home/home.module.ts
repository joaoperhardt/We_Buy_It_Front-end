import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';




@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule
  ],
  exports: [
    HomeComponent
  ]

})
export class HomeModule { }
