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
      user: ['', [Validators.required, Validators.maxLength(15), Validators.minLength(5)]
      ],
      email: ['', [Validators.required, Validators.email]
      ],
      password: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(6)]],
      repassword: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(6)]],
    })
  }

  public newUser() {
    this.restService.post('http://localhost:3000/api/register', this.registerForm.value)
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
