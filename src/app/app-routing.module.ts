import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RequestFormComponent } from './request-form/request-form.component';
import { OrdersListComponent } from './orders-list/orders-list.component';
import { SqlOrderFormComponent } from './sql-order-form/sql-order-form.component';
import { CsvOrderFormComponent } from './csv-order-form/csv-order-form.component';
import { SharepointOrderFormComponent } from './sharepoint-order-form/sharepoint-order-form.component';
import { CustomOrderFormComponent } from './custom-order-form/custom-order-form.component';


const routes: Routes = [
  {path: 'form', component: RequestFormComponent,
    children: [
                {path: 'sql-order', component: SqlOrderFormComponent},
                {path: 'csv-order', component: CsvOrderFormComponent},
                {path: 'sharepoint-order', component: SharepointOrderFormComponent},
                {path: 'custom-order', component: CustomOrderFormComponent}
              ]
  },
  {path: 'orders', component: OrdersListComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [OrdersListComponent, RequestFormComponent]
