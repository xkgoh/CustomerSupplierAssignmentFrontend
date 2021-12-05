import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CredentialsService } from './credentials.service';
import { Product } from './model/product';
import { Supplier } from './model/supplier';
import { Observable } from 'rxjs';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productUrl = `${environment.apiEndPoint}/products`;
  private supplierUrl = `${environment.apiEndPoint}/suppliers`;

  constructor(private http: HttpClient, private credentialsService: CredentialsService) { }

  getSuppliers(): Observable<Supplier[]> {
    return this.http.get<Supplier[]>(this.supplierUrl, this.getHttpOptions());
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.productUrl, product,  this.getHttpOptions()); 
  }

  getProduct(id : number): Observable<Product> {
    const url = this.productUrl + "/" + id;
    return this.http.get<Product>(url, this.getHttpOptions());
  }

  updateProduct(product: Product): Observable<Product> {
    const url = this.productUrl + "/" + product.id;
    return this.http.put<Product>(url, product, this.getHttpOptions());
  }

  private getHttpOptions(): object {
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json' ,
        'Authorization': 'Basic ' + this.credentialsService.getToken()
      })
    }
  }

}
