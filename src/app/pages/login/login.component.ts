import { Component, Inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { BackendService } from 'src/app/backend/backend.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public loginForm:any;
  public constructor(
    private LoginService: BackendService,
    @Inject(Router) private router: Router,
    private formBuilder: FormBuilder
  ){
    this.loginForm=this.formBuilder.group({
      email:['', Validators.required],
      password:['', Validators.required],

    })
  }

  public submit() {
    if(!this.loginForm.valid){
      alert("Login Inválido! :(")
      return
    }
    this.LoginService.login(this.loginForm.value).subscribe((result:any)=>{
      console.log(result)
      this.router.navigate([`user`])
    }, err => {
      alert("Login Inválido! :(")
      console.log(err)
    })
  }
}
