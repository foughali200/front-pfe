import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AuthenticationRoutingModule } from './authentication-routing.module';

@NgModule({
 
  declarations: [
  ],
  imports: [
 
  
    CommonModule, 
    AuthenticationRoutingModule
    
  ],
 
 
})
export class AuthenticationModule {
  constructor() { }
}
