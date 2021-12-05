import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductSales } from './model/productSales';
import { CredentialsService } from './credentials.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductSalesService {

  private productSalesUrl = 'http://localhost:8080/productSales';

  constructor(private http: HttpClient, private credentialsService: CredentialsService) { }

  getSalesReport(filterCountry: string): Observable<ProductSales[]> {
    const url = this.productSalesUrl + "?country=" + filterCountry
    var httpOptions = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json' ,
          'Authorization': 'Basic ' + btoa(`${this.credentialsService.getUsername()}:${this.credentialsService.getPassword()}`)
        }
      )
    };
    return this.http.get<ProductSales[]>(url, httpOptions)
  }
}
