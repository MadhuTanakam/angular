import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  public Employees=[
    {"EmployeeNo":1,"EmployeeName":"optum1","EmployeeAddress":"Hyderabad1"},
    {"EmployeeNo":2,"EmployeeName":"optum2","EmployeeAddress":"Hyderabad2"},
    {"EmployeeNo":3,"EmployeeName":"optum3","EmployeeAddress":"Hyderabad3"},
   
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
