import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductComponent } from './components/product/product.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { AccountrecoveryComponent } from './components/accountrecovery/accountrecovery.component';
import { ReactiveFormsModule } from '@angular/forms'
import { ErrorTailorModule } from '@ngneat/error-tailor';
import { AccountrecoverycheckedComponent } from './components/accountrecoverychecked/accountrecoverychecked.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component'

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    TiendaComponent,
    LoginComponent,
    RegisterComponent,
    PageNotFoundComponent,
    ProductComponent,
    NosotrosComponent,
    CarritoComponent,
    AccountrecoveryComponent,
    AccountrecoverycheckedComponent,
    UserprofileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ErrorTailorModule.forRoot({
      errors: {
        useValue: {
          required: 'Este campo es requerido',
          minlength: ({ requiredLength, actualLength }) =>
                      `Se esperaban ${requiredLength} pero solo ingresaste ${actualLength}`,
          invalidAddress: error => `El formato del correo no es el correcto`
        }
      }
    })
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule { }
