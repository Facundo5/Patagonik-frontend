import { CookieService } from 'ngx-cookie-service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestService } from '../../rest.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup;
  currentDate = new Date();

  constructor(private formBuilder: FormBuilder, private restService: RestService, private router: Router, private cookies: CookieService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['',
        [Validators.required, Validators.email]
      ],
      password: ['',
        [Validators.required]
      ]
    });

  }
  get emailInvalid() {
    return this.loginForm.get('email')?.invalid && this.loginForm.get('email')?.touched;
  }
  get passwordInvalid() {
    return this.loginForm.get('password')?.invalid && this.loginForm.get('password')?.touched;
  }

  public loginUser() {
    if (this.loginForm.invalid) {
      return Object.values(this.loginForm.controls).forEach(control => {
        control.markAllAsTouched();
      })
    } else {
      console.log(this.loginForm.value)
      this.restService.loginUser(this.loginForm.value)
        .subscribe({
          next: (data: any) => {
            console.log(data)
            this.cookies.set("token", data.token);
            this.router.navigate(['/tienda'])
            this.loginForm.reset() 
          }, error: (err) => {
            console.log(err)
            Swal.fire({
              icon: 'error',
              title: 'ha ocurrido un error',
              text: err.error.msg
            })
            this.loginForm.reset() 
          },
          
        })
    }
  }
};
