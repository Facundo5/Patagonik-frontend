import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/rest.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-verifypost',
  templateUrl: './verifypost.component.html',
  styleUrls: ['./verifypost.component.css']
})
export class VerifypostComponent implements OnInit {

  publications: any;

  constructor(private restService: RestService) { }

  ngOnInit(): void {
    this.getPublications();
  }

  public getPublications() {
    this.restService.getBrands()
      .subscribe({
        next: (res: any) => {
          this.publications = res
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
