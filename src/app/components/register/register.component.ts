import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestService } from './../../rest.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm!: FormGroup;

  constructor(private restService: RestService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]
      ],
      password: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(6)]],
      password2: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(6)]],
    },{
      Validators:this.passwordIguales('password', 'password2')
    })
  }

  get emailInvalid() {
    return this.registerForm.get('email')?.invalid && this.registerForm.get('email')?.touched;
  }
  get passwordInvalid() {
    return this.registerForm.get('password')?.invalid && this.registerForm.get('password')?.touched;
  }
  get password2Invalid() {
    return this.registerForm.get('password2')?.invalid && this.registerForm.get('password2')?.touched;
  }
  passNoValid(){
    const pass1 = this.registerForm.get('password')?.value;
    const pass2= this.registerForm.get('password2')?.value;
    if (pass1 !== pass2){
      return true;
    }else {
      return false;
    }
  }
  passwordIguales(pass1Name: string, pass2Name:string){
    return (formGroup: FormGroup)=> {
      const pass1Control = formGroup.get(pass1Name);
      const pass2Control = formGroup.get(pass2Name);
      if(pass1Control?.value === pass2Control?.value){
        pass2Control?.setErrors(null);
      }
      else {
        pass2Control?.setErrors({noEsIgual:true})
      }
    }
  }


  public newUser() {

    this.passNoValid();

    if (this.registerForm.invalid) {
      return Object.values(this.registerForm.controls).forEach(control => {
        control.markAllAsTouched();
      })
    } else {
      this.restService.registerUser(this.registerForm.value)
        .subscribe({
          next: (data: any) => {
            console.log(data)
            Swal.fire({
              position: 'top-end',
              icon: 'warning',
              title: 'Se ha enviado un correo para confirmar su cuenta',
              showConfirmButton: false,
              timer: 1500
            })
            this.router.navigate(['/login'])
          }, error: (err) => {
            console.log(err)
            Swal.fire({
              icon: 'error',
              title: 'ERROR',
              text: err.error.msg
            })
          }
        })
    }
  }
}
