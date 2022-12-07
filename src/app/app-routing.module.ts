import { UserprofileComponent } from './components/userprofile/userprofile.component';
import { AccountrecoverycheckedComponent } from './components/accountrecoverychecked/accountrecoverychecked.component';
import { AccountrecoveryComponent } from './components/accountrecovery/accountrecovery.component';
import { ProductComponent } from './components/product/product.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { FaqComponent } from './components/faq/faq.component';
import { AdminProductsComponent } from './components/admin-products/admin-products.component';
import { AdminAddProductsComponent } from './components/admin-add-products/admin-add-products.component';
import { AdminClientsComponent } from './components/admin-clients/admin-clients.component';
import { FinalizePurhcaseComponent } from './components/finalize-purhcase/finalize-purhcase.component';
import { AdminRecordComponent } from './components/admin-record/admin-record.component';



const routes: Routes = [
  {
    path: '', redirectTo:'tienda', pathMatch: 'full'
  },
  {
    path:'tienda', component: TiendaComponent
  },
  {
    path:'login', component: LoginComponent
  },
  {
    path:'login/register', redirectTo:'register', pathMatch: 'full'
  },
  {
    path:'register/login', redirectTo:'login', pathMatch: 'full'
  },
  {
    path:'register', component: RegisterComponent
  },
  {
    path: 'product/:id_shoes', component: ProductComponent
  },
  {
    path: 'tienda/product', redirectTo: 'product', pathMatch: 'full'
  },
  {
    path: "nosotros", component: NosotrosComponent
  },
  {
    path: "carrito", component: CarritoComponent
  },
  {
    path: 'recoveryaccount', component: AccountrecoveryComponent
  },
  {
  path: 'login/recoveryaccount', redirectTo: 'recoveryaccount', pathMatch: 'full'
  },
  {
  path: 'recoveryaccountchecked', component: AccountrecoverycheckedComponent
  }, {
    path: 'userprofile', component: UserprofileComponent
  },
  {
    path: "contacto", component: ContactoComponent
  },
  {
    path: 'faq', component: FaqComponent
  },
  {
    path: 'admin-p', component: AdminProductsComponent
  },
  {
    path: 'admin-add', component: AdminAddProductsComponent
  },
  {
    path: 'admin-c', component: AdminClientsComponent
  },
  {
    path: 'admin-r', component: AdminRecordComponent
  },
  {
    path: 'finalize', component: FinalizePurhcaseComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
