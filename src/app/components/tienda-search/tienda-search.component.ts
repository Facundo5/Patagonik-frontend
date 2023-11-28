import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestService } from 'src/app/rest.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tienda-search',
  templateUrl: './tienda-search.component.html',
  styleUrls: ['./tienda-search.component.css']
})
export class TiendaSearchComponent {


  public cards: any = [];
  constructor(private restService: RestService, private route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.route.paramMap.subscribe((paramMap) => {
      const query = paramMap.get('query');
      console.log(query);
      this.getCards(query);
    });
  }


  public getCards(query: any) {
    console.log(query)
    this.restService.getSearchProducts(query)
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
