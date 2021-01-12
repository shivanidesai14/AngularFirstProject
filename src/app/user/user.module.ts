import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListrestoComponent } from './listresto/listresto.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { UpdaterestoComponent } from './updateresto/updateresto.component';
import { AddrestoComponent } from './addresto/addresto.component';



@NgModule({
  declarations: [ListrestoComponent, SignupComponent, LoginComponent, UpdaterestoComponent, AddrestoComponent],
  imports: [
    CommonModule
  ],
  exports : [
    ListrestoComponent,
    LoginComponent,
    SignupComponent,
    UpdaterestoComponent,
    AddrestoComponent
  ]
})
export class UserModule { }
