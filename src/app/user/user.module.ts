import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListrestoComponent } from './listresto/listresto.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { UpdaterestoComponent } from './updateresto/updateresto.component';
import { AddrestoComponent } from './addresto/addresto.component';
import { ReactiveFormsModule } from "@angular/forms";



@NgModule({
  declarations: [ListrestoComponent, SignupComponent, LoginComponent, UpdaterestoComponent, AddrestoComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports : [
    ListrestoComponent,
    LoginComponent,
    SignupComponent,
    UpdaterestoComponent,
    AddrestoComponent,
    ReactiveFormsModule
  ]
})
export class UserModule { }
