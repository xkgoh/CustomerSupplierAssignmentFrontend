import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';
// import '@ag-grid-community/all-modules/dist/styles/ag-theme-alpine.css';

@Component({
  selector: 'app-monthly-sales',
  templateUrl: './monthly-sales.component.html',
  styleUrls: ['./monthly-sales.component.css']
})
export class MonthlySalesComponent implements OnInit {

   filterCountry: string = ""

//     columnDefs: ColDef[] = [
//     { field: 'make' },
//     { field: 'model' },
//     { field: 'monthAndYear' }
// ];

// rowData = [
//     { make: 'Toyota', model: 1000, monthAndYear: new Date("2021-01-01") },
//     { make: 'Ford', model: 5000, monthAndYear: new Date("2021-01-02") },
//     { make: 'Porsche', model: 20000, monthAndYear: new Date("2021-01-03") }
// ];

//   // columnDefs: ColDef[] = [
//   //   { field: 'country' },
//   //   { field: 'salesAmount'},
//   //   { field: 'monthAndYear'},
//   // ]

//   rowData = [
//     { make: 'Singapore', model: '500', price: new Date("2021-01-1") },
//     { make: 'China', model: '1000', price: new Date("2021-01-1") },
//     { make: 'Taiwan', model: '500', price: new Date("2021-01-1") }
// ];

  constructor() { }

  ngOnInit(): void {
  }

  getMonthlySalesReport(): void {

  }
}
