import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { MainToolbarComponent } from './main-toolbar/main-toolbar.component';
import { FormToolbarComponent } from './form-toolbar/form-toolbar.component';



import { SqlOrderFormComponent } from './sql-order-form/sql-order-form.component';
import { CsvOrderFormComponent } from './csv-order-form/csv-order-form.component';
import { SharepointOrderFormComponent } from './sharepoint-order-form/sharepoint-order-form.component';
import { CustomOrderFormComponent } from './custom-order-form/custom-order-form.component';
import { BusinessPartFormComponent } from './business-part-form/business-part-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MDBBootstrapModule} from 'angular-bootstrap-md';


@NgModule({
  declarations: [
    AppComponent,
    MainToolbarComponent,
    FormToolbarComponent,

    routingComponents,
    SqlOrderFormComponent,
    CsvOrderFormComponent,
    SharepointOrderFormComponent,
    CustomOrderFormComponent,
    BusinessPartFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
