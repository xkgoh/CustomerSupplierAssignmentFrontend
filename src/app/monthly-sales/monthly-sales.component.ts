import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';

import { MonthlySalesService } from '../monthly-sales.service';
//import { ColDef } from 'ag-grid-community';
// import '@ag-grid-community/all-modules/dist/styles/ag-theme-alpine.css';

@Component({
  selector: 'app-monthly-sales',
  templateUrl: './monthly-sales.component.html',
  styleUrls: ['./monthly-sales.component.css']
})
export class MonthlySalesComponent implements OnInit {

  filterCountry: string = "";

  Highcharts: typeof Highcharts = Highcharts; // required
  chartConstructor: string = 'chart'; // optional string, defaults to 'chart'
  chartOptions: Highcharts.Options = {
    title: {
      text: 'Monthly sales per country'
    },
    xAxis: {
      type: 'datetime'
    },
    series: [
      {
      type: 'line',
      pointIntervalUnit: 'month',
    }    
  ]
    }; // required
   chartCallback: Highcharts.ChartCallbackFunction = function (chart) { } // optional function, defaults to null
   updateFlag: boolean = false; // optional boolean
   oneToOneFlag: boolean = true; // optional boolean, defaults to false
   runOutsideAngularFlag: boolean = false; // optional boolean, defaults to false

  constructor(private monthlySalesService: MonthlySalesService) { }

  ngOnInit(): void {
  }

  getMonthlySalesReport(): void {
    console.log("OBTAINING REPORT")
    var pointStart:Date = new Date("2020-01-01");
    var previousMonth = 0;
    var dataPoints: number[] = []

    this.monthlySalesService.getMonthlySalesReport(this.filterCountry)
    .subscribe(salesReport => {
      salesReport.sort((a, b) => new Date(a.monthAndYear).valueOf() - new Date(b.monthAndYear).valueOf())
      salesReport.forEach( (salesReportElement, index) => {

        if (index == 0) { //Get start date
          pointStart = new Date(salesReportElement.monthAndYear);
          previousMonth = parseInt(salesReportElement.monthAndYear.toString().split("-")[1]);          
        }
        else {
          //Populate zero values for subsequent months if no value
          if (( parseInt(salesReportElement.monthAndYear.toString().split("-")[1]) - previousMonth) == 0) {
            for (let i = 0; i < 11; i++) {
              dataPoints.push(0)
              console.log("push 0")
            }
          }
          else if (( parseInt(salesReportElement.monthAndYear.toString().split("-")[1]) - previousMonth) > 0) {
            for (let i = 0; i < ( parseInt(salesReportElement.monthAndYear.toString().split("-")[1]) - previousMonth -1); i++) {
              dataPoints.push(0)
              console.log("push 0")
            }
          }
          else {
            for (let i = 0; i < (previousMonth -  parseInt(salesReportElement.monthAndYear.toString().split("-")[1]) -1); i++) {
              dataPoints.push(0)
              console.log("push 0")
            }
          }
          previousMonth =  parseInt(salesReportElement.monthAndYear.toString().split("-")[1]);         
        }
        dataPoints.push(salesReportElement.salesAmount)      
    })

    this.chartOptions.series = [
      {
        data: dataPoints,
        type: 'line',
        pointIntervalUnit: 'month',
        pointStart: pointStart.valueOf()
      }    
    ]

    this.updateFlag = true
    })
  }
}