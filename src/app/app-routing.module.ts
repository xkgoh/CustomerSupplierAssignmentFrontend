import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomerComponent } from './customer/customer.component';
import { ProductComponent } from './product/product.component';
import { ProductSalesComponent } from './product-sales/product-sales.component';
import { MonthlySalesComponent } from './monthly-sales/monthly-sales.component';

const routes1: Routes = [
  { path: 'customer', component: CustomerComponent },
  { path: 'product', component: ProductComponent },
  { path: 'productSales', component: ProductSalesComponent },
  { path: 'monthlySales', component: MonthlySalesComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes1)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
