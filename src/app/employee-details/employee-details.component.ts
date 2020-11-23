import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  public Employees=[];
   
  constructor(private employeeService:EmployeeService) { }

  ngOnInit(): void {
    this.Employees=this.employeeService.getEmployeeDetails();
  }

}
