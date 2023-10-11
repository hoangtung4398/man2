import { Component } from '@angular/core';
import { GetAllEmployeeService } from '../get-all-employee.service';
import { Employee } from '../models/Employee.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  idSelected: number = 1;
  dataEmployee: Employee[] = [];



  constructor(private getallEmployee:GetAllEmployeeService) {
    this.getallEmployee.getAllEmployee().subscribe(data => this.dataEmployee = data)
    
  }
    isSelected(id: number) {
    this.idSelected = id;
    console.log(this.idSelected);
    
  }
}
