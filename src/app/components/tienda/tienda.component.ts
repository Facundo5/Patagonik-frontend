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
  dataurl = [];
  sizes: any | undefined;
  brands: any | undefined;
  colours: any | undefined;

  constructor(private restService: RestService) { }

  ngOnInit(): void {
    this.getCards();
    this.getSizes();
    this.getBrands();
    this.getColours();
  }


  public getCards() {
    this.restService.get('http://localhost:3000/api/getproductscards')
      .subscribe({
        next: (data: any) => {
          var str = (data[0].dataurl)
          const url = str.split('#', 1)
          data[0].dataurl = url
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
    public getSizes() {
      this.restService.get('http://localhost:3000/api/getsizes')
        .subscribe({
          next: (res: any) => {
            this.sizes = res
          }, error: (err: any) => {
            console.log(err)
            Swal.fire({
              icon: 'error',
              title: 'ERROR',
              text: 'No pudimos cargar los talles, porfavor sigue intentando mas tarde'
            })
          },
          complete: () => console.log('completado')
        })
    }
    public getBrands() {
      this.restService.get('http://localhost:3000/api/getbrands')
        .subscribe({
          next: (res: any) => {
            this.brands = res
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
    public getColours() {
      this.restService.get('http://localhost:3000/api/getcolours')
        .subscribe({
          next: (res: any) => {
            this.colours = res
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
