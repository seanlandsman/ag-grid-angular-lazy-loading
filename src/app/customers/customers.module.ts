import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AgGridModule} from '@ag-grid-community/angular';

import {CustomersRoutingModule} from './customers-routing.module';
import {CustomersComponent} from './customers.component';

@NgModule({
    declarations: [CustomersComponent],
    imports: [
        CommonModule,
        CustomersRoutingModule,
        AgGridModule.withComponents()
    ]
})
export class CustomersModule {

}
