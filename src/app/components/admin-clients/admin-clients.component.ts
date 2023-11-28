import { RestService } from 'src/app/rest.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-clients',
  templateUrl: './admin-clients.component.html',
  styleUrls: ['./admin-clients.component.css']
})
export class AdminClientsComponent implements OnInit {

  public clients: any = [];

  constructor(private restService: RestService) { }

  ngOnInit(): void {
    this.getClients();
  }
  public getClients() {
    this.restService.getUsersAdmin()
      .subscribe({
        next: (res: any) => {
          this.clients = res
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
