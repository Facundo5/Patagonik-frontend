import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesDashboardComponent } from './sales-dashboard/sales-dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { Component, ElementRef, ViewChild } from '@angular/core';




@NgModule({
  declarations: [
    SalesDashboardComponent,
    AdminComponent,
    AdminUserComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AdminComponent,
    SalesDashboardComponent,

  ]
})
export class DashboardModule { }
