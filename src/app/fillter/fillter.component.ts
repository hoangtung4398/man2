import { Component, Output,EventEmitter } from '@angular/core';
import { GetAllEmployeeService } from '../get-all-employee.service';
import { Employee } from '../models/Employee.model';
import { Fillter } from '../models/Fillter.model';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-fillter',
  templateUrl: './fillter.component.html',
  styleUrls: ['./fillter.component.css']
})
export class FillterComponent {
  dataEmployee: Employee[] = [];
  arrDepartment: string[] = [];
  listCompany: string[] = [];
  fillter: Fillter = {
    department: '',
    name: '',
    listCompany: []
  }
  @Output() fillterData = new EventEmitter<Fillter>();
  fillerForm = new FormGroup({
    department: new FormControl(this.fillter.department),
    name: new FormControl(this.fillter.name),
    listCompany: new FormControl(this.fillter.listCompany)
  });


  constructor(private getallEmployee: GetAllEmployeeService) {
    this.getallEmployee.getAllEmployee().subscribe(data => {
      this.dataEmployee = data
      this.dataEmployee.forEach(element => {
        if (this.arrDepartment.indexOf(element.department) == -1) {
          this.arrDepartment.push(element.department)
        }
      });
      this.dataEmployee.forEach(element => {
        if (this.listCompany.indexOf(element.nameCompany) == -1) {
          this.listCompany.push(element.nameCompany)
        }
      });
    })
  }
  toggleAdd(e: any) {
    if (e.target.checked) {
      this.fillter.listCompany.push(e.target.labels[0].textContent)
    }
    if (e.target.checked == false) {
      const index = this.fillter.listCompany.indexOf(e.target.labels[0].textContent);
      if (index !== -1) {
        this.fillter.listCompany.splice(index, 1);
      }
    }
  }
  submitform() {
    
    this.fillterData.emit(this.fillter)
  } 
}
