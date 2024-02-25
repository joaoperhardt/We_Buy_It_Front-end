// visualizacao-loja.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VisualizacaoLojaComponent } from './visualizacao-loja.component';
import { HeaderModule } from "../home/header/header.module";
import { UserService } from 'src/app/backend/user.service';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [VisualizacaoLojaComponent],
    exports: [VisualizacaoLojaComponent],
    providers: [UserService],
    imports: [CommonModule, HeaderModule,
        CommonModule, 
        NzButtonModule, 
        NzFormModule, 
        NzSelectModule, 
        ReactiveFormsModule,
        HeaderModule,
        ]
})
export class VisualizacaoLojaModule {}


