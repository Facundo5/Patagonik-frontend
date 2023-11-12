import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
import { AccountrecoverycheckedComponent } from './components/accountrecoverychecked/accountrecoverychecked.component';
import { UserprofileComponent } from './components/userprofile/userprofile.component'
import { ContactoComponent } from './components/contacto/contacto.component';
import { UserpurchasesComponent } from './components/userpurchases/userpurchases.component';
import { MenuprofileComponent } from './components/menuprofile/menuprofile.component';
import { LoginComponent } from './components/login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AdminClientsComponent } from './components/admin-clients/admin-clients.component';
import { AdminAddProductsComponent } from './components/admin-add-products/admin-add-products.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { FaqComponent } from './components/faq/faq.component';
import { FinalizePurhcaseComponent } from './components/finalize-purhcase/finalize-purhcase.component';
import { TokenInterceptor } from './token-interceptor/token.interceptor';
import { AdminRecordComponent } from './components/admin-record/admin-record.component';
import { AdminRecordOnsiteComponent } from './components/admin-record-onsite/admin-record-onsite.component';
import {CookieService} from 'ngx-cookie-service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AdminUserComponent } from './components/dashboard/admin-user/admin-user.component';
import { ERROR401Component } from './components/error401/error401.component';
import { ERROR404Component } from './components/error404/error404.component';
import { VerificationOfPersonComponent } from './components/verification-of-person/verification-of-person.component';
import { VerifypostComponent } from './components/verifypost/verifypost.component';
import { AdminPublicationsComponent } from './components/admin-publications/admin-publications.component';
import { RouterModule } from '@angular/router';
import { AdminCardsComponent } from './components/admin/admin-cards/admin-cards.component';
import { DashboardAdminComponent } from './components/admin/dashboard-admin/dashboard-admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';



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
    MenuprofileComponent,
    AdminClientsComponent,
    AdminAddProductsComponent,
    AdminProductsComponent,
    FaqComponent,
    FinalizePurhcaseComponent,
    AdminRecordComponent,
    AdminRecordOnsiteComponent,
    DashboardComponent,
    AdminUserComponent,
    ERROR401Component,
    ERROR404Component,
    VerificationOfPersonComponent,
    VerifypostComponent,
    AdminPublicationsComponent,
    AdminCardsComponent,
    DashboardAdminComponent
  ],
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatTooltipModule  ],
  bootstrap: [AppComponent],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:TokenInterceptor,multi:true}, CookieService]
})
export class AppModule { }
