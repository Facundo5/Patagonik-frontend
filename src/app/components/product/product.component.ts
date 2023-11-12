import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RestService } from './../../rest.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  public response: any;
  public link: any;
  public formPurchase!: FormGroup;

  constructor(private route: ActivatedRoute, private restService: RestService, public formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: any) => {
      const { params } = paramMap
      this.loadData(params.product)

    })
    this.formPurchase = this.formBuilder.group({
      quantity: ['1', [Validators.required]],
    });
  }

  loadData(product: string) {
    this.restService.get(`http://localhost:3000/api/get-product/${product}`)
      .subscribe({
        next: (res: any) => {
          const imagenes = res.image
          function agregarTransformacion(imagenes: any) {
            if (imagenes) {
              const partes = imagenes.split('/upload/');
              const parteBase = partes[0] + '/upload/c_fill,w_600,h_600/';
              const parteImagen = partes[1];
              return parteBase + parteImagen;
            }
            return imagenes; // Si la URL es vacía, devolverla sin modificaciones
          }

          // Aplicar la transformación a cada URL en el array
          const urlsTransformadas = imagenes.map(agregarTransformacion);

          // Volver a insertar las URLs modificadas en un nuevo objeto o array
          // Dependiendo de la estructura del objeto donde quieras guardar las URLs
          // Aquí se insertan de nuevo en un array
          const objetoModificado = [...urlsTransformadas];

          console.log(objetoModificado); // Esto mostrará el objeto con las URLs modificadas
          res.image = objetoModificado
          this.response = res
          console.log(this.response)

        }, error: (err) => {
          Swal.fire({
            icon: 'error',
            title: 'ha ocurrido un error',
            text: 'Error al mostrar el producto'
          })
        },
      })
  };
  purchaseMp() {
    const fd = new FormData;
    fd.append('quantity', this.response.quantity)
    const product = {
      id_size: this.response.id_size,
      id_shoes: this.response.id_shoes,
      price_product: this.response.price,
      title_product: this.response.title,
      image_product: this.response.dataurl[0],
      quantity_purchase: this.formPurchase.value.quantity
    }
    //Pasamos toda la informacion en un formData
    this.restService.post('http://localhost:3000/api/payment', product)
      .subscribe({
        next: (res: any) => {
          window.location.href = res
        }, error: (err: any) => {
          Swal.fire({
            icon: 'error',
            title: 'ERROR',
            text: 'Error del servidor o de su sesion'
          })
        },
      })
  }
}
