import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthenticationRoutingModule} from './authentication-routing.module';
import {LoginComponent} from './pages/login/login.component';
import {MatCardModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    MatCardModule
  ],
  declarations: [
    LoginComponent
  ]
})
export class AuthenticationModule { }
