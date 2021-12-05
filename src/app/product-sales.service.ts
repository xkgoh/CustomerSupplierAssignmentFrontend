import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductSales } from './model/productSales';
import { CredentialsService } from './credentials.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductSalesService {

  private productSalesUrl = `${environment.apiEndPoint}/productSales?country=`;

  constructor(private http: HttpClient, private credentialsService: CredentialsService) { }

  getSalesReport(filterCountry: string): Observable<ProductSales[]> {
    const url = this.productSalesUrl + filterCountry;
    return this.http.get<ProductSales[]>(url, this.getHttpOptions());
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
