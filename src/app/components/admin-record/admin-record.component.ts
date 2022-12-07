import { RestService } from 'src/app/rest.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-record',
  templateUrl: './admin-record.component.html',
  styleUrls: ['./admin-record.component.css']
})
export class AdminRecordComponent {

  public record: any = [];

  constructor(private restService : RestService){ }

  ngOnInit(): void{
    this.getSales();
  }

  public getSales(){
    //Traemos todas las ventas que se encuentren en la base de datos
    this.restService.get('http://localhost:3000/api/admin/viewproducts')
    .subscribe({
      //Si viene todo bien asignamos la respuesta a products
      next: (res: any) => {
        this.record = res
        console.log(this.record)
      }, error: (err) =>{
        console.log(err)
      Swal.fire({
        icon: 'error',
        title: 'ha ocurrido un error',
        text: 'Error al traer las ventas'
      })
      },
      complete: ()=> console.log('Completado')
    })
  }

}
