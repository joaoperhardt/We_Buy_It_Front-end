import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/backend/user.service';
import { __param } from 'tslib';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.scss']
})
export class CadastroUsuarioComponent {
  public formGroup: any;
  public id: string = `0`;
  public constructor(
    private formBuilder: FormBuilder,
    
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router
    ) {
    this.formGroup = this.formBuilder.group({
      name: ['', Validators.required],
      birthDate: ['', Validators.required],
      cep: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  public submit() {
    if (!this.formGroup.valid) {
      alert('Invalido');
      return;
    }
  
    this.userService.postcadastrousuario(this.formGroup.value).subscribe((result: any) => {
      this.router.navigate([``]);
    });
    
  }
}


