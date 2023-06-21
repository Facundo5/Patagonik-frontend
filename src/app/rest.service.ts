import { CookieService } from 'ngx-cookie-service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  token="";
  constructor(private http: HttpClient, public router: Router, private cookies: CookieService) { }

  public get(url: string  | any){
    return this.http.get(url);
  }
  public delete(url: string  | any){
    return this.http.delete(url);
  }
  public post(url: string, body: any){
    return this.http.post(url, body);
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
