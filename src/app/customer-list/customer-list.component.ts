import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  selectedCustomer:any;

  customerers:Customer[] =[
    {
      "customerNo": 1,
      "name": "Mark Vought",
      "address": "123 Main St",
      "city": "Springfield",
      "country": "USA"
    },
    {
      "customerNo": 2,
      "name": "John Smith",
      "address": "456 Elm St",
      "city": "London",
      "country": "UK"
    },
    {
      "customerNo": 3,
      "name": "Merry Ann",
      "address": "789 Oak St",
      "city": "New York",
      "country": "USA"
    },
    {
      "customerNo": 4,
      "name": "Rajesh Khatri",
      "address": "321 Pine St",
      "city": "Mumbai",
      "country": "India"
    },
    {
      "customerNo": 5,
      "name": "Rahul Raj",
      "address": "654 Birch St",
      "city": "Delhi",
      "country": "India"
    },
    {
      "customerNo": 6,
      "name": "Emily Wong",
      "address": "987 Cedar St",
      "city": "Toronto",
      "country": "Canada"
    },
    {
      "customerNo": 7,
      "name": "Hans Müller",
      "address": "741 Maple St",
      "city": "Berlin",
      "country": "Germany"
    },
    {
      "customerNo": 8,
      "name": "Sophie Dupont",
      "address": "852 Willow St",
      "city": "Paris",
      "country": "France"
    },
    {
      "customerNo": 9,
      "name": "Luca Rossi",
      "address": "963 Cherry St",
      "city": "Rome",
      "country": "Italy"
    },
    {
      "customerNo": 10,
      "name": "Javier García",
      "address": "159 Poplar St",
      "city": "Madrid",
      "country": "Spain"
    }
  ]
  
  

}
