import { RestService } from 'src/app/rest.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  public products: any = [];

  constructor(private restService: RestService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  public getProducts() {
    //Traemos todos los productos que se encuentren en la base de datos
    this.restService.get('http://localhost:3000/api/admin/viewproducts')
      .subscribe({
        //Si viene todo bien asignamos la respuesta a products
        next: (res: any) => {
          this.products = res
          console.log(this.products)
        }, error: (err) => {
          console.log(err)
          Swal.fire({
            icon: 'error',
            title: 'ha ocurrido un error',
            text: 'Error al traer los productos'
          })
        },
        complete: () => console.log('completado')
      })
  }

  public delProduct(id_product: string) {
    Swal.fire({
      title: 'Estas seguro?',
      text: "No vas a poder revertir esta eliminacion!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Eliminar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.restService.delete(`http://localhost:3000/api/admin/delproduct/${id_product}`)
          .subscribe({
            //Si viene todo bien asignamos la respuesta a products
            next: (res: any) => {
              Swal.fire(
                'Eliminado!',
                'El producto fue eliminado con exito.',
                'success'
              )
            }, error: (err) => {
              console.log(err)
              Swal.fire({
                icon: 'error',
                title: 'ha ocurrido un error',
                text: 'Error al traer los productos'
              })
            },
            complete: () => console.log('completado')
          })

      }
    })
  }
}
