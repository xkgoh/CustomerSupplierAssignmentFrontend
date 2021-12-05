import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { HttpClientModule } from '@angular/common/http';
import { CredentialsComponent } from './credentials/credentials.component';
import { ProductComponent } from './product/product.component';
import { ProductSalesComponent } from './product-sales/product-sales.component';

import { MonthlySalesComponent } from './monthly-sales/monthly-sales.component';

import { AgGridModule } from 'ag-grid-angular';
import { HighchartsChartModule } from 'highcharts-angular';


@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    DashboardComponent,
    CredentialsComponent,
    ProductComponent,
    ProductSalesComponent,
    MonthlySalesComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AgGridModule,
    HighchartsChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
