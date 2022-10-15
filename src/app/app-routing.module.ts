import { ProductComponent } from './components/product/product.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { TiendaComponent } from './components/tienda/tienda.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { CarritoComponent } from './components/carrito/carrito.component';

const routes: Routes = [
  {
    path:'', redirectTo:'tienda', pathMatch: 'full'
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
    path: 'product', component: ProductComponent
  },
  {
    path: 'tienda/product', redirectTo: 'product', pathMatch: 'full'
  },
  {
    path: "nosotros", component: NosotrosComponent
  },
  {
    path: "carrito", component: CarritoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
