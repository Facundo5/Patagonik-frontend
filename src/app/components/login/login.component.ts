import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RestService } from '../../rest.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm!: FormGroup;
  currentDate = new Date();

  constructor(private formBuilder: FormBuilder, private restService: RestService) { }

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
  public loginUser(loginForm = Array) {
    this.restService.post('http://localhost:3000/api/login', this.loginForm.value)
      .subscribe((data: any) => {
        console.log(data)
      })
  }
}
