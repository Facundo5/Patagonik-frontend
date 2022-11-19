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

  constructor(private formBuilder: FormBuilder, private restService: RestService, private router: Router) { }

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
  public loginUser() {
    console.log(this.loginForm.value)
    this.restService.post('http://localhost:3000/api/login', this.loginForm.value)
      .subscribe({
        next: (data: any) => {
          console.log(data)
          localStorage.setItem('token', data.token);
          this.router.navigate(['/tienda'])
        }, error: (err) => {
          console.log(err)
          Swal.fire({
            icon: 'error',
            title: 'ha ocurrido un error',
            text: 'Usuario o contraseña incorrecta'
          })
        },
        complete: () => console.log('completado')
      })
  }
}
