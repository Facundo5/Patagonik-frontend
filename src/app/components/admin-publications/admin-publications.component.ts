import { Component } from '@angular/core';
import { RestService } from './../../rest.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';


interface Publicacion {
  id: number;
  titulo: string;
  descripcion: string;
  imagenes: string[];
}
@Component({
  selector: 'app-admin-publications',
  templateUrl: './admin-publications.component.html',
  styleUrls: ['./admin-publications.component.css']
})
export class AdminPublicationsComponent {

  constructor(private route: ActivatedRoute, private restService: RestService) { }
  public response: any;
  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap: any) => {
      const { params } = paramMap
      this.loadData(params.product)
    })
  }

  loadData(product: string) {
    this.restService.get(`http://localhost:3000/api/get-product/${product}`)
      .subscribe({
        next: (data) => {
          this.response = data
        }, error: (err) => {
          Swal.fire({
            icon: 'error',
            title: 'ha ocurrido un error',
            text: 'Error al mostrar el producto'
          })
        },
      })
  };

  alertPreDelete(product: number, id_user: number) {

    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Rechazarás la publicación. Por favor, ingresa una razón.',
      icon: 'warning',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off'
      },
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, estoy seguro'
    }).then((result) => {
      if (result.isConfirmed) {
        const razon = result.value
        Swal.fire(
          'Eliminado',
          'La razón fue enviada al usuario',
          'warning'
        );

        // Envia la solicitud HTTP al backend
        this.restService.put('http://localhost:3000/api/del-product-admin', { product, id_user, razon}).subscribe({
          next: (data) => {
            // Maneja la respuesta si es necesario
          },
          error: (err) => {
            // Maneja el error si es necesario
          }
        });
      }
    });
  }
  aceptPublication(product: number, id_user: number) {
    Swal.fire({
      title: 'Estas seguro?',
      text: "Si aceptas este producto estara visible para todos",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si estoy seguro!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.restService.put('http://localhost:3000/api/accept-product-admin', { product, id_user }).subscribe({
          next: (data) => {
            // Maneja la respuesta si es necesario
          },
          error: (err) => {
            // Maneja el error si es necesario
          }
        });
        Swal.fire(
          'Publicado',
          'Se envio una notificacion al usuario',
          'success'
        )
      }
      
    })
  }
}