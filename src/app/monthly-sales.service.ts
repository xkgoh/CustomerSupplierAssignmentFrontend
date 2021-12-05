import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CredentialsService } from './credentials.service';

import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { MonthlySales } from './model/monthlySales';

@Injectable({
  providedIn: 'root'
})
export class MonthlySalesService {

  private monthlySalesUrl = `${environment.apiEndPoint}/monthlySales?country=`;

  constructor(
    private http: HttpClient, private credentialsService: CredentialsService) { }


  getMonthlySalesReport(filterCountry: string): Observable<MonthlySales[]> {
    const url = this.monthlySalesUrl + filterCountry;
    return this.http.get<MonthlySales[]>(url, this.getHttpOptions());
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
