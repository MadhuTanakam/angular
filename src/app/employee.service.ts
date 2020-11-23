import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  public Employees=[
    {"EmployeeNo":1,"EmployeeName":"optum1","EmployeeAddress":"Hyderabad1"},
    {"EmployeeNo":2,"EmployeeName":"optum2","EmployeeAddress":"Hyderabad2"},
    {"EmployeeNo":3,"EmployeeName":"optum3","EmployeeAddress":"Hyderabad3"},
   
  ];
  constructor() { }

getEmployeeDetails()
{
  return this.Employees;
}
}
