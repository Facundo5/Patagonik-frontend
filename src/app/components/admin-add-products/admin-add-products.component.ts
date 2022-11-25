import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { RestService } from './../../rest.service';
import Swal from 'sweetalert2';

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget
}
@Component({
  selector: 'app-admin-add-products',
  templateUrl: './admin-add-products.component.html',
  styleUrls: ['./admin-add-products.component.css']
})
export class AdminAddProductsComponent implements OnInit {

  brands: any | undefined;
  sizes: any | undefined;
  colours: any | undefined;
  photoSelected: String | ArrayBuffer | null | undefined;
  public preview: string | undefined;
  public images: File | undefined;
  public formShoes!: FormGroup;

  constructor(public RestService: RestService, private sanitizer: DomSanitizer, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.getSizes();
    this.getBrands();
    this.getColours();
    this.formShoes = this.formBuilder.group({
      price: ['', [Validators.required]],
      statuse: ['', [Validators.required]],
      size: [null, [Validators.required]],
      brand: [null, [Validators.required]],
      colour: [null, [Validators.required]],
      stock: ['', Validators.required],
      name: ['', Validators.required],
      model: ['', [Validators.required]],
      image: ['', [Validators.required]]
    })
  }
  //Funcion para agregar una zapatilla
  public addShoes() {
    const fd = new FormData;
    fd.append('price', this.formShoes.value.price)
    fd.append('statuse', this.formShoes.value.statuse)
    fd.append('size', this.formShoes.value.size)
    fd.append('brand', this.formShoes.value.brand)
    fd.append('stock', this.formShoes.value.stock)
    fd.append('name', this.formShoes.value.name)
    fd.append('model', this.formShoes.value.model)
    fd.append('colour', this.formShoes.value.colour)
    for (var i = 0; i < this.urls.length; i++) { 
      fd.append("image", this.urls[i]);
    }
    console.log(this.urls)
    console.log(fd)
    //Pasamos toda la informacion en un formData
    this.RestService.post('http://localhost:3000/api/admin/addproduct', fd)
    .subscribe({
      next: (res: any) => {
        Swal.fire({
          icon: 'error',
          title: 'success',
          text: 'Producto agregado con exito'
        })
      }, error: (err: any) => {
        console.log(err)
        Swal.fire({
          icon: 'error',
          title: 'ERROR',
          text: 'Error del servidor o de su sesion'
        })
      },
      complete: () => console.log('completado')
    })
  }
  urls: string[] = [];
  onselect(event: any) {
    if (event.target.files?.[0]) {
      for (let i = 0; i < event.target.files.length; i++) {
        var reader = new FileReader();
        reader.readAsDataURL(event.target.files[i]);
        reader.onload = (events: any) => {
          this.urls.push(events.target.result);
          console.log(this.urls)
        }
      }
    }
  }
  public getSizes() {
    this.RestService.get('http://localhost:3000/api/getsizes')
      .subscribe({
        next: (res: any) => {
          this.sizes = res
        }, error: (err: any) => {
          console.log(err)
          Swal.fire({
            icon: 'error',
            title: 'ERROR',
            text: 'Error del servidor o de su sesion'
          })
        },
        complete: () => console.log('completado')
      })
  }
  public getBrands() {
    this.RestService.get('http://localhost:3000/api/getbrands')
      .subscribe({
        next: (res: any) => {
          this.brands = res
        }, error: (err: any) => {
          console.log(err)
          Swal.fire({
            icon: 'error',
            title: 'ERROR',
            text: 'Error del servidor o de su sesion'
          })
        },
        complete: () => console.log('completado')
      })
  }
  public getColours() {
    this.RestService.get('http://localhost:3000/api/getcolours')
      .subscribe({
        next: (res: any) => {
          this.colours = res
        }, error: (err: any) => {
          console.log(err)
          Swal.fire({
            icon: 'error',
            title: 'ERROR',
            text: 'Error del servidor o de su sesion'
          })
        },
        complete: () => console.log('completado')
      })
  }

}
