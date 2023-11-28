import { RestService } from './../../rest.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public restService: RestService, public router: Router) { }

  ngOnInit(): void {
  }

  search(event: KeyboardEvent): void {
    if (event.key === "Enter") {
      const parametro: HTMLInputElement | null = document.getElementById("product") as HTMLInputElement;

      if (parametro !== null) {
        const query = parametro.value;
        this.router.navigate(['/tienda/query/',query]);
      } else {
        console.error("Elemento no encontrado");
      }
    }
  }
}
