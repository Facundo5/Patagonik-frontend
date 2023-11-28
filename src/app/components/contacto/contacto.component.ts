import Swal from 'sweetalert2';
import { RestService } from './../../rest.service';
import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  public contactForm!: FormGroup;


  constructor(private rs: RestService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required],[Validators.pattern('[^0-9]*')]],
      last: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required]],
    })
  }

  public newUser() {
    this.rs.postContactUs(this.contactForm.value)
      .subscribe({
        next: (data: any) => {
          console.log(data)
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Su formulario ha sido enviado con exito',
            showConfirmButton: false,
            timer: 2000
          })
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
  onInputChange() {
    const regex = new RegExp(/^[^0-9]+$/);
    if (!regex.test(this.contactForm.controls['name'].value)) {
      this.contactForm.controls['name'].setValue('');
    }
  }

}
