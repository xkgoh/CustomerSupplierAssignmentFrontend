import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Customer } from './model/customer';

import { CredentialsService } from './credentials.service';

import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private customerUrl = `${environment.apiEndPoint}/customers`;

  constructor(
    private http: HttpClient, private credentialsService: CredentialsService) { }


  createCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.customerUrl, customer, this.getHttpOptions());
  }
    
  getCustomer(id: number): Observable<Customer> {
    const url = `${this.customerUrl}/${id}`;
    return this.http.get<Customer>(url, this.getHttpOptions());
  }

  updateCustomer(customer: Customer): Observable<Customer> {
    const url = `${this.customerUrl}/${customer.id}`;
    return this.http.put<Customer>(url, customer, this.getHttpOptions());
  }

  deleteCustomer(id: number): Observable<boolean> {
    const url = `${this.customerUrl}/${id}`;
    return this.http.delete<boolean>(url,  this.getHttpOptions());
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
