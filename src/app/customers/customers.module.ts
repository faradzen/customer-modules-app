import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomersRoutingModule } from './customers-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';

@NgModule({
  declarations: [
    CustomerListComponent,
    CustomerDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CustomersRoutingModule
  ]
})
export class CustomersModule { }
