import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import { 
    BasicService,
    UserService
    } from './service.index';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    BasicService,
    UserService
]
  
})
export class IndexModule { }
