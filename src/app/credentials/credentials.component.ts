import { Component, OnInit } from '@angular/core';
import { CredentialsService } from '../credentials.service';

@Component({
  selector: 'app-credentials',
  templateUrl: './credentials.component.html',
  styleUrls: ['./credentials.component.css']
})
export class CredentialsComponent implements OnInit {

  constructor(public credentialsService:CredentialsService) { }

  ngOnInit(): void {
  }

}
