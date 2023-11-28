import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { RestService } from '../../rest.service';
import Swal from 'sweetalert2';

interface Image {
  url: string;
  file: File;
}
@Component({
  selector: 'app-admin-add-products',
  templateUrl: './admin-add-products.component.html',
  styleUrls: ['./admin-add-products.component.css'],
  template: `
  <div id="colourContainer"></div>
`
})
export class AdminAddProductsComponent implements OnInit {

  selectedImages: Image[] = [];
  colours: any | undefined;
  photoSelected: String | ArrayBuffer | null | undefined;
  public preview: string | undefined;
  public images: File | undefined;
  public formShoes!: FormGroup;
  priceInput: HTMLElement | null = null; // Inicializamos la propiedad con un valor por defecto
  discountInput: HTMLElement | null = null; // Inicializamos la propiedad con un valor por 
  finalAmountInput: HTMLElement | null = null; // Inicializamos la propiedad con un valor por defecto




  constructor(public RestService: RestService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.priceInput = document.getElementById('price') as HTMLElement; // Asignamos un valor en el ngOnInit()
    this.priceInput.addEventListener('input', (event) => {

      setTimeout(() => {
        const price = (event.target as HTMLInputElement).value;
        const priceParse = parseInt(price)
        if (priceParse > 0) {
          const addIva = document.getElementById("iva")!;
          const addComision = document.getElementById("comision")!;
          const addTotalAmount = document.getElementById("totalAmount")!;
          const iva = priceParse * 0.08;
          const comision = priceParse * 0.10;
          const ivastring = iva.toString();
          const comisionstring = comision.toString()
          addIva.innerHTML = "$" + ivastring;
          addComision.innerHTML = "$" + comisionstring;
          const finalamount = (priceParse - (iva + comision));
          addTotalAmount.innerHTML = "$" + finalamount;
          console.log(finalamount)
        }
      }, 1000)
    });
    this.formShoes = this.formBuilder.group({
      price: ['', [Validators.required]],
      status: ['', [Validators.required]],
      stock: ['', Validators.required],
      title: ['', Validators.required],
      image: ['', [Validators.required]],
      description: ['', [Validators.required]],
      category: ['', [Validators.required]]
    })

  }
  get titleInvalid() {
    return this.formShoes.get('title')?.invalid && this.formShoes.get('title')?.touched;
  }
  get stockInvalid() {
    return this.formShoes.get('stock')?.invalid && this.formShoes.get('stock')?.touched;
  }
  get imageInvalid() {
    return this.formShoes.get('image')?.invalid && this.formShoes.get('image')?.touched;
  }
  get statusInvalid() {
    return this.formShoes.get('status')?.invalid && this.formShoes.get('status')?.touched;
  }
  get priceInvalid() {
    return this.formShoes.get('price')?.invalid && this.formShoes.get('price')?.touched;
  }
  get descriptionInvalid() {
    return this.formShoes.get('description')?.invalid && this.formShoes.get('description')?.touched;
  }
  onFileSelect(event: any): void {
    const files = event.target.files;
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.selectedImages.push({ url: e.target.result, file });
      };
      reader.readAsDataURL(file);
    }
  }

  public addShoes() {


    if (this.formShoes.invalid) {
      console.log('toyaqui')
      console.log(Object.values(this.formShoes.controls))
      return Object.values(this.formShoes.controls).forEach(control => {
        control.markAllAsTouched();
      })
    } else {
      const token = this.RestService.getToken()
      const datatoken = this.RestService.decodeToken(token)
      const fd = new FormData();
      fd.append('price', this.formShoes.value.price)
      fd.append('status', this.formShoes.value.status)
      fd.append('stock', this.formShoes.value.stock)
      fd.append('title', this.formShoes.value.title)
      fd.append('description', this.formShoes.value.description)
      fd.append('category', this.formShoes.value.category)
      fd.append('id', datatoken.id)
      for (let i = 0; i < this.selectedImages.length; i++) {
        fd.append('images', this.selectedImages[i].file);
        console.log(this.selectedImages)
      }
      console.log(datatoken.id)
      //Funcion para agregar una zapatilla
      //Pasamos toda la informacion en un formData
      this.RestService.createProduct(fd)
        .subscribe({
          next: (res: any) => {
            Swal.fire({
              icon: 'info',
              title: 'En revision',
              text: 'Su publicacion esta siendo revisada, se le avisara por correo cuando se haya actualizado el estado.',
              confirmButtonText: 'Lo entiendo!',
              confirmButtonColor: '#3085d6',
              allowOutsideClick: false,
              allowEscapeKey: false
            }).then((result) => {
              if (result.isConfirmed) {
                window.location.reload();
              }
            })
          }, error: (err: any) => {
            console.log(err)
            Swal.fire({
              icon: 'error',
              title: 'ERROR',
              text: 'Error del servidor o de su sesion'
            })
          },
        })
    }
  }
  // createColourDivs() {
  //   const colourContainer = document.getElementById('colourContainer');
  //   let selectedColour: string | null = null;
  //   let lastSelectedColourDiv: HTMLDivElement | null = null;

  //   this.colours.forEach((colour: { codeColour: string }) => {
  //     const colourDiv = document.createElement('div');
  //     colourDiv.classList.add('round');
  //     colourDiv.style.backgroundColor = '#' + colour.codeColour;
  //     colourDiv.style.width = '50px';
  //     colourDiv.style.height = '50px';
  //     colourDiv.style.margin = '5px';
  //     colourDiv.style.borderRadius = '50px';
  //     colourDiv.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
  //     colourContainer!.appendChild(colourDiv);
  //     colourContainer!.style.display = 'flex';

  //     colourDiv.addEventListener('click', () => {
  //       const clickedColour = colour.codeColour;
  //       console.log(clickedColour)

  //       if (selectedColour === clickedColour) {
  //         return;
  //       }

  //       if (lastSelectedColourDiv) {
  //         lastSelectedColourDiv.style.border = '';
  //         lastSelectedColourDiv.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.5)';
  //       }

  //       colourDiv.style.border = 'black solid 2px';
  //       colourDiv.style.boxShadow = '0 0 20px rgba(0, 0, 0, 20)';
  //       selectedColour = clickedColour;
  //       lastSelectedColourDiv = colourDiv;
  //     });
  //   });
  // }
}



