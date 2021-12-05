import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CredentialsService } from './credentials.service';
import { Product } from './model/product';
import { Supplier } from './model/supplier';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productUrl = 'http://localhost:8080/products';
  private supplierUrl = 'http://localhost:8080/suppliers'

  constructor(private http: HttpClient, private credentialsService: CredentialsService) { }

  getSuppliers(): Observable<Supplier[]> {
    var httpOptions = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json' ,
          'Authorization': 'Basic ' + btoa(`${this.credentialsService.getUsername()}:${this.credentialsService.getPassword()}`)
        }
      )
    };
    return this.http.get<Supplier[]>(this.supplierUrl,httpOptions)
  }

  createProduct(product: Product): Observable<Product> {
    var httpOptions = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json' ,
          'Authorization': 'Basic ' + btoa(`${this.credentialsService.getUsername()}:${this.credentialsService.getPassword()}`)
        }
      )
    };
    return this.http.post<Product>(this.productUrl, httpOptions)  
  }

  getProduct(id : number): Observable<Product> {
    var url = this.productUrl + "/" + id;
    var httpOptions = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json' ,
          'Authorization': 'Basic ' + btoa(`${this.credentialsService.getUsername()}:${this.credentialsService.getPassword()}`)
        }
      )
    };
    return this.http.get<Product>(url, httpOptions)
  }

  updateProduct(product: Product): Observable<Product> {
    var url = this.productUrl + "/" + product.id;
    var httpOptions = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json' ,
          'Authorization': 'Basic ' + btoa(`${this.credentialsService.getUsername()}:${this.credentialsService.getPassword()}`)
        }
      )
    };
    return this.http.put<Product>(url, product, httpOptions)
  }

}
