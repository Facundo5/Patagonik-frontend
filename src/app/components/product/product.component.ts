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

  constructor(private route:ActivatedRoute, private restService: RestService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( (paramMap: any) => {
      const {params} = paramMap

      this.loadData(params.id_shoes)
    })
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
  }

}
