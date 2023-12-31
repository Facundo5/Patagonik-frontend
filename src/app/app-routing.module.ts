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
import { AdminRecordOnsiteComponent } from './components/admin-record-onsite/admin-record-onsite.component';
import { CheckloginGuard } from './guards/checklogin.guard';
import { PermissionsGuard } from './../app/guards/permissions.guard';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { VerificationOfPersonComponent } from './components/verification-of-person/verification-of-person.component';
import { VerifypostComponent } from './components/verifypost/verifypost.component';
import { AdminPublicationsComponent } from './components/admin-publications/admin-publications.component';
import { AdminCardsComponent } from './components/admin/admin-cards/admin-cards.component';
import { DashboardAdminComponent } from './components/admin/dashboard-admin/dashboard-admin.component';
import { SalesDashboardComponent } from './components/dashboard/sales-dashboard/sales-dashboard.component';
import { AdminComponent } from './components/dashboard/admin/admin.component';
import { TiendaSearchComponent } from './components/tienda-search/tienda-search.component';




const routes: Routes = [
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
    path: 'product/:product', component: ProductComponent
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
    path: 'admin-add', component: AdminAddProductsComponent,
    canActivate: [CheckloginGuard, PermissionsGuard], data: { expectedRole: 'admin' }
  },
  {
    path: 'admin-c', component: AdminClientsComponent
  },
  {
    path: 'admin-ro', component: AdminRecordComponent
  },
  {
    path: 'admin-rp', component: AdminRecordOnsiteComponent
  },
  {
    path: 'finalize', component: FinalizePurhcaseComponent
  },
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: 'person-Auth', component: VerificationOfPersonComponent
  },
  {
    path: 'publications-checker', component: VerifypostComponent,
    canActivate: [CheckloginGuard, PermissionsGuard], data: { expectedRole: 'admin' }
  },
  {
    path: 'admin-publication/:product', component: AdminPublicationsComponent
  },
  {
    path: 'admin-publications', component: AdminCardsComponent
  },
  {
    path: 'admin/dashboard', component: DashboardAdminComponent
  },
  {
    path: 'admin/dashboard-admin', component: SalesDashboardComponent
  },
  {
    path: 'admin/admin', component: AdminComponent
  },
  {
    path:'tienda/query/:query', component: TiendaSearchComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
