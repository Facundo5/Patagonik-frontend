import { Component } from '@angular/core';
import { RestService } from 'src/app/rest.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-record-onsite',
  templateUrl: './admin-record-onsite.component.html',
  styleUrls: ['./admin-record-onsite.component.css']
})
export class AdminRecordOnsiteComponent {

  public records: any = [];

  constructor(private restService: RestService) { }

  ngOnInit(): void {
    this.getSales();
  }

  public getSales() {
    //Traemos todas las ventas que se encuentren en la base de datos
    this.restService.get('http://localhost:3000/api/admin/salesonsite')
      .subscribe({
        //Si viene todo bien asignamos la respuesta a products
        next: (res: any) => {
          this.records = res
        }, error: (err) => {
          console.log(err)
          Swal.fire({
            icon: 'error',
            title: 'ha ocurrido un error',
            text: 'Error al traer las ventas'
          })
        },
      })
  }

}
