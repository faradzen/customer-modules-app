import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomersRoutingModule } from './customers-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [CustomerListComponent],
  imports: [
    CommonModule,
    SharedModule,
    CustomersRoutingModule
  ]
})
export class CustomersModule { }
