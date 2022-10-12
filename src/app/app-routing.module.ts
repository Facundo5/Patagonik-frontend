import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TiendaComponent } from './components/tienda/tienda.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';

const routes: Routes = [
  {path: "", component: TiendaComponent},
  {path: "nosotros", component: NosotrosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
