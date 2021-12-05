import { Component, OnInit } from '@angular/core';
import { Customer } from '../model/customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  customer: Customer = {
    id: 0,
    firstName: "",
    lastName: "",
    city: "",
    country: "",
    phone: ""
  };

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
  }

  onCreateCustomer(): void {
    this.customerService.createCustomer(this.customer)
    .subscribe(customer => this.customer = customer);
  }

  onGetCustomer(): void {
    this.customerService.getCustomer(this.customer.id)
    .subscribe(customer => this.customer = customer);
  }

  onUpdateCustomer(): void {
    this.customerService.updateCustomer(this.customer)
    .subscribe(customer => this.customer = customer);
  }

  onDeleteCustomer(): void {
    this.customerService.deleteCustomer(this.customer.id)
    .subscribe(booleanResult => this.customer.firstName = booleanResult.toString());
  }

}
