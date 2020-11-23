import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import {FormsModule} from '@angular/forms';
import { Test1Component } from './test1/test1.component';
import { CustomerlistComponent } from './customerlist/customerlist.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component'
import {EmployeeService} from './employee.service';
import {ReactiveFormsModule} from '@angular/forms';
import {LoginReactiveComponent} from './login-reactive/login-reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Test1Component,
    CustomerlistComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    LoginReactiveComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule 
   
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
