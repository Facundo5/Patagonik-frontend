import { Component } from '@angular/core';
import { RestService } from 'src/app/rest.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-cards',
  templateUrl: './admin-cards.component.html',
  styleUrls: ['./admin-cards.component.css']
})
export class AdminCardsComponent {
  public cards: any = [];
  
  constructor (private restService: RestService) {}

  ngOnInit(): void {
    this.getCards();
  }
  public getCards() {
    this.restService.get('http://localhost:3000/api/get-products-admin')
      .subscribe({
        next: (data: any) => {
          var str = (data[0].image)
          const url = str.split('#', 1)
          data[0].image = url
          this.cards = data
          console.log(this.cards)
          console.log
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
