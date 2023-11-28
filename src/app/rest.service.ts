import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  private baseUrl = "http://localhost:3000/api/"

  private getTiendaUrl = this.baseUrl+"get-products"
  private getProductUrl = this.baseUrl+"get-product/"
  private postProductUrl = this.baseUrl+"admin/addproduct"
  private getProductsAdminTableUrl = this.baseUrl+"admin/viewproducts"
  //Publicaciones en revision, esperando por aprobacion o denegacion por administrador.
  private getProductsInReviewUrl = this.baseUrl+"get-products-admin"
  private getProductInReviewUrl = this.baseUrl+"get-product/"
  private delProductInReviewUrl = this.baseUrl+"del-product-admin"
  private acceptProductInReviewUrl = this.baseUrl+"accept-product-admin"
  //Tablas admin dashboard
  private delProductAdminUrl = this.baseUrl+"delete-product-dashboard-administration"
  private getProductsDeletedUrl = this.baseUrl+"get-deleted-products"
  private getAdminSalesUrl = this.baseUrl+"admin/sales"
  private getClientsAdminUrl = this.baseUrl+"admin/users"
  //Contacto 
  private postContactUsUrl = this.baseUrl+"contactus"
  //Autenticacion usuario
  private postRegisterUrl = this.baseUrl+"register"
  private postLoginUrl = this.baseUrl+"login"
  //Pagos
  private postPaymentUrl = this.baseUrl+"payment"
  // 
  private getBrandsUrl = this.baseUrl+"getbrands"
  // Buscador 
  private getSearchProductUrl = this.baseUrl+"search/query/"

  token="";
  constructor(private http: HttpClient, public router: Router, private cookies: CookieService) { }


  //Productos existentes en la pantalla de inicio de tienda
  public getTienda() {
    return this.http.get(this.getTiendaUrl);
  }
  //Ver producto particular.
  public getProduct(idProduct: number) {
    const urlWithParams = `${this.getProductUrl}${idProduct}`;
    return this.http.get(urlWithParams)
  }
  public getProductsInReview() {
    return this.http.get(this.getProductsInReviewUrl)
  }
  public getUsersAdmin() {
    return this.http.get(this.getClientsAdminUrl)
  }
  public getProductsTable () {
    return this.http.get(this.getProductsAdminTableUrl)
  }
  public delProductTable (id_product: number) {
    return this.http.put(this.delProductAdminUrl, id_product)
  }
  public getProductInReview (product: number) {
    const urlWithParams = `${this.getProductInReviewUrl}${product}`;
    return this.http.get(urlWithParams)
  }
  public delProductInReview (product: number, id_user: number, razon: string) {
    return this.http.put(this.delProductInReviewUrl, { product, id_user, razon })
  }
  public acceptProductInReview (product: number, id_user: number) {
    return this.http.put(this.acceptProductInReviewUrl, { product, id_user})
  }
  public postContactUs (data : any) {
    return this.http.post(this.postContactUsUrl, data)
  }
  public getSales() {
    return this.http.get(this.getAdminSalesUrl)
  }
  public getProductsDeleted() {
    return this.http.get(this.getProductsDeletedUrl)
  }
  //Crear un producto
  public createProduct(body: any) {
    return this.http.post(this.postProductUrl, body);
  }
  public loginUser (data: any) {
    return this.http.post(this.postLoginUrl, data)
  }
  public registerUser (data: any) {
    return this.http.post(this.postRegisterUrl, data)
  }
  public postPayment(data: any) {
    return this.http.post(this.postPaymentUrl, data)
  }
  public getBrands ( ){
    return this.http.get(this.getBrandsUrl)
  }
  public getSearchProducts (query: any) {
      const urlWithParams = `${this.getSearchProductUrl}${query}`;
      return this.http.get(urlWithParams)
    }

  loggedIn() {
    return !!this.cookies.get("token");
  }
  getToken() {
    return this.cookies.get("token")
  }
  logout() {
    this.token="";
    this.cookies.set("token", this.token)
    this.router.navigate(['/login'])
    window.location.reload
  }
  decodeToken(token: string): any {
    const decodedToken = jwt_decode(token);
    return decodedToken;
  }
}
