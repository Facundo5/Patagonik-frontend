import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/rest.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tienda',
  templateUrl: './tienda.component.html',
  styleUrls: ['./tienda.component.css']
})
export class TiendaComponent implements OnInit {

  public cards: any = [];
  sizes: any | undefined;
  brands: any | undefined;
  colours: any | undefined;

  constructor(private restService: RestService) { }

  ngOnInit(): void {
    this.getCards();
  }

  public getCards() {
    this.restService.getTienda()
      .subscribe({
        next: (data: any) => {
          this.cards = data
      }, error: (err) => {
        console.log(err)
        Swal.fire({
          icon: 'error',
          title: 'ha ocurrido un error',
          text: 'El servidor no responde, vuelve a intentarlo nuevamente mas tarde'
        })
      },
        complete: () => console.log('completado')
      })
    }
}
