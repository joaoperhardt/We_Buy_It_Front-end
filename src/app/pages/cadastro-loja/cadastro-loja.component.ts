import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from 'src/app/backend/user.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { NzUploadChangeParam, NzUploadFile } from 'ng-zorro-antd/upload';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadComponent, NzUploadModule } from 'ng-zorro-antd/upload';
import { STRING_TYPE } from '@angular/compiler';


@Component({
  selector: 'app-cadastro-loja',
  templateUrl: './cadastro-loja.component.html',
  styleUrls: ['./cadastro-loja.component.scss']
})
export class CadastroLojaComponent {
    public formGroup: any;
    public id: string = '0';
    public constructor(
      private formBuilder: FormBuilder,
      private userService: UserService,
      private activadeRoute: ActivatedRoute,
      private router: Router,
      private msg: NzMessageService
    ){
      this.formGroup = this.formBuilder.group({
        Name: ['', Validators.required,],
      Description: ['', Validators.required,],
      Cep: ['', Validators.required,],
      State: ['', Validators.required,],
      City: ['', Validators.required,],
      District: ['', Validators.required,],
      Street: ['', Validators.required,],
      Number: ['', Validators.required,],
      Complement: ['', Validators.required,],
      Phone: ['', Validators.required,],
      Cpf: ['', Validators.required,],
      Cnpj: ['', Validators.required,],
      Password: ['', Validators.required,]
      })
    
    }
    public submit() {
    console.log(this.formGroup.value);
  
      if (!this.formGroup.valid) {
        alert('Preencha Corretamente');
        return;
      }
  
  
      this.userService.post(this.formGroup.value).subscribe((result: any) => {
        this.router.navigate([``]);
      });
      
    }
  
    handleChange(info: NzUploadChangeParam): void {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        this.msg.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        this.msg.error(`${info.file.name} file upload failed.`);
      }
      this.formGroup.get('file').setValue(info.file.response.data.path);    
    }
}
