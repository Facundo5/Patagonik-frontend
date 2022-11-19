import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {RestService} from './../../rest.service';

interface HtmlInputEvent extends Event {
  target: HTMLInputElement & EventTarget
}
@Component({
  selector: 'app-admin-add-products',
  templateUrl: './admin-add-products.component.html',
  styleUrls: ['./admin-add-products.component.css']
})
export class AdminAddProductsComponent implements OnInit {

  brands: any | undefined;
  categorys: any | undefined;
  sizes: any | undefined;
  colours: any |  undefined;
  photoSelected: String | ArrayBuffer | null | undefined;
  public preview: string | undefined;
  public images: File | undefined;

  constructor(public RestService: RestService, private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

}
