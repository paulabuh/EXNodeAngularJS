import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AcessoComponent } from './acesso/acesso.component';
import { ReservasComponent } from './reservas/reservas.component';


const routes: Routes = [
  { path: '', component: AcessoComponent },
  { path: 'reservas', component: ReservasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
