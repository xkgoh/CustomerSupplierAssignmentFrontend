import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Customer } from './model/customer';

import { CredentialsService } from './credentials.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private customerUrl = 'http://localhost:8080/customers'

  constructor(
    private http: HttpClient, private credentialsService: CredentialsService) { }


  createCustomer(customer: Customer): Observable<Customer> {
    var httpOptions = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json' ,
          'Authorization': 'Basic ' + btoa(`${this.credentialsService.getUsername()}:${this.credentialsService.getPassword()}`)
        }
      )
    };
    return this.http.post<Customer>(this.customerUrl, customer, httpOptions);
  }
    
  getCustomer(id: number): Observable<Customer> {
    const url = `${this.customerUrl}/${id}`;
    var httpOptions = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json' ,
          'Authorization': 'Basic ' + btoa(`${this.credentialsService.getUsername()}:${this.credentialsService.getPassword()}`)
        }
      )
    };
    return this.http.get<Customer>(url,httpOptions)
    // var customer: Customer = {
    //   id: 1,
    //   firstName: "tt",
    //   lastName: "gg",
    //   city: "sg",
    //   country: "sg",
    //   phone: "99"
    // }
    // return of(customer)
  }

  updateCustomer(customer: Customer): Observable<Customer> {
    const url = `${this.customerUrl}/${customer.id}`;
    var httpOptions = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json' ,
          'Authorization': 'Basic ' + btoa(`${this.credentialsService.getUsername()}:${this.credentialsService.getPassword()}`)
        }
      )
    };
    return this.http.put<Customer>(url, customer, httpOptions)
  }

  deleteCustomer(id: number): Observable<boolean> {
    const url = `${this.customerUrl}/${id}`;
    var httpOptions = {
      headers: new HttpHeaders(
        {
          'Content-Type': 'application/json' ,
          'Authorization': 'Basic ' + btoa(`${this.credentialsService.getUsername()}:${this.credentialsService.getPassword()}`)
        }
      )
    };
    return this.http.delete<boolean>(url, httpOptions)
  }
}
