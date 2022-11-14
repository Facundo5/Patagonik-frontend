import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { TiendaComponent } from './components/tienda/tienda.component';
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
import { ContactoComponent } from './components/contacto/contacto.component';
import { UserpurchasesComponent } from './components/userpurchases/userpurchases.component';
import { MenuprofileComponent } from './components/menuprofile/menuprofile.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule } from '@angular/common/http';

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
    UserprofileComponent,
    ContactoComponent,
    UserpurchasesComponent,
    MenuprofileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ErrorTailorModule.forRoot({
      errors: {
        useValue: {
          required: 'Este campo es requerido',
          minlength: ({ requiredLength, actualLength }) =>
                      `Se espereban ${requiredLength} caracteres,  pero enviaste ${actualLength}`,
          email: error => `Email invalido`
        }
      }
    })
  ],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule { }
