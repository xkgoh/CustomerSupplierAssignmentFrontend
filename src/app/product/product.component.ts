import { Component, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { Supplier } from '../model/supplier';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: Product = {
    id: 0,
    productName: "",
    unitPrice: 0.0,
    packageName: "",
    discontinued: false,
    supplierId: 0
  }

  suppliers: Supplier[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {

  }

  getSuppliers(): void {
    this.productService.getSuppliers()
    .subscribe(suppliers => this.suppliers = suppliers);

  }

  onCreateProduct(): void {
    this.productService.createProduct(this.product)
    .subscribe(product => this.product = product);
  }

  onGetProduct(): void {
    this.productService.getProduct(this.product.id)
    .subscribe(product => this.product = product);
  }

  onUpdateProduct(): void {
    this.productService.updateProduct(this.product)
    .subscribe(product => this.product = product);
  }
}
