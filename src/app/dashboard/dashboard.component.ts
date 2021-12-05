import { Component, OnInit } from '@angular/core';
import { DASHBOARD_PAGES } from './dashboardpages';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  dashboardPages = DASHBOARD_PAGES

  constructor() { }

  ngOnInit(): void {
  }

}
