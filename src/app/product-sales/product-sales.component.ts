import { Component, OnInit } from '@angular/core';
import { ProductSalesService } from '../product-sales.service';
import { ProductSales } from '../model/productSales';

@Component({
  selector: 'app-product-sales',
  templateUrl: './product-sales.component.html',
  styleUrls: ['./product-sales.component.css']
})
export class ProductSalesComponent implements OnInit {

  filterCountry: string = "";
  salesTable: ProductSales[] = [];

  constructor(private productSalesService: ProductSalesService) { }

  ngOnInit(): void {
  }

  getProductSalesReport(): void {
    this.productSalesService.getSalesReport(this.filterCountry)
    .subscribe(salesTable => this.salesTable = salesTable);
  }

}
