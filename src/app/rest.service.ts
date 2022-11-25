import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient, public router: Router) { }

  public get(url: string  | any){
    return this.http.get(url);
  }
  public post(url: string, body: any){
    return this.http.post(url, body);
  }
  loggedIn() {
    return !!localStorage.getItem('token');
  }
  getToken() {
    return localStorage.getItem('token')
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
  }
}
