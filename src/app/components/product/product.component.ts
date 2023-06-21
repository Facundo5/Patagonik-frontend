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

  constructor(private route:ActivatedRoute, private restService: RestService,public formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( (paramMap: any) => {
      const {params} = paramMap
      this.loadData(params.id_shoes)
      
    })
    this.formPurchase = this.formBuilder.group({
      quantity: [ '1', [Validators.required]],
    });
  }

  loadData(id_shoes:string) {
    this.restService.get(`http://localhost:3000/api/getproduct/${id_shoes}`)
    .subscribe({
      next: (res: any) => {
        this.response = res
        console.log(this.response)

    }, error: (err) => {
      console.log(err)
      Swal.fire({
        icon: 'error',
        title: 'ha ocurrido un error',
        text: 'Error al mostrar el producto'
      })
    },
      complete: () => console.log('completado')
    })
  };
  purchaseMp() {
    const fd = new FormData;
    fd.append('quantity', this.response.quantity)
    console.log( fd.get('quantity') );
    console.log(this.formPurchase.value.quantity)
    const product = {
      id_size: this.response.id_size,
      id_shoes: this.response.id_shoes,
      price_product: this.response.price,
      title_product: this.response.title,
      image_product:  this.response.dataurl[0],
      quantity_purchase: this.formPurchase.value.quantity
    }
    //Pasamos toda la informacion en un formData
    this.restService.post('http://localhost:3000/api/payment', product)
    .subscribe({
      next: (res: any) => {
        console.log(res)
        window.location.href = res
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
