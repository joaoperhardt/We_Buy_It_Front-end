import { Component } from '@angular/core';
import { BackendService } from 'src/app/backend/backend.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload'; 
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent {
  public id: string = `1`;
  public formGroup: any;
  public profileImg: any;
  
  constructor(
    private backendService: BackendService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private msg: NzMessageService
  ) {
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      cep: ['', Validators.required],
      email: ['', Validators.required],
    })
    this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
      this.initUpdate();
    })

    this.profileImg = "./assets/images/imagem (1).png";
  }

  public initUpdate() {
    this.backendService.getByIdUser(this.id).subscribe((result: any) => {
      this.formGroup.patchValue(result);
      this.profileImg=result.file;
    })
  }

  public submit() {
    if (!this.formGroup.valid) {
      alert("Inválido");
      return;
    }
    this.backendService.update({
      id: this.id,
      ...this.formGroup.value
    }
    ).subscribe((result: any) => {
      console.log(result)
      this.router.navigate([`user`]);
    })
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
