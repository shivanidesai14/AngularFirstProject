import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddrestoComponent } from './user/addresto/addresto.component';
import { ListrestoComponent } from "./user/listresto/listresto.component";

const routes: Routes = [
  {path : 'list' , component : ListrestoComponent },
  {path : '' , redirectTo : '/list' , pathMatch : 'full' },
  {path : 'addresto', component : AddrestoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
