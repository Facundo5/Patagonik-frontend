import { RestService } from './../rest.service';
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private restService: RestService
  ) {}

  intercept(req: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const tokenizeReq = req.clone({
      setHeaders: {
        Authorization: `Bearer ${this.restService.getToken()}`
      }
    })
    return next.handle(tokenizeReq);
  }
}
