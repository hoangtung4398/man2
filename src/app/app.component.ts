import { Component } from '@angular/core';
import { Fillter } from './models/Fillter.model';
import { Employee } from './models/Employee.model';
import { GetAllEmployeeService } from './get-all-employee.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'man2';
  selectedCompany: string[] = [];
  data: Employee[] = [];
  fillter:Fillter={} as Fillter;
  constructor(private getallEmployee: GetAllEmployeeService) {
    this.getallEmployee.getAllEmployee().subscribe(data => {
      this.data = data
    })
  }
  getDataFillter(data:Fillter){
    this.fillter=data;
  }
  clicked(){
    console.log(this.fillter);
  };
  toggleAdd(e:any){
    if (e.target.checked) {
      console.log(e.target.labels[0])
      this.selectedCompany.push(e.target.labels[0].textContent)
    }
    if (e.target.checked == false) {
      const index = this.selectedCompany.indexOf(e.target.labels[0].textContent);
      if (index !== -1) {
        this.selectedCompany.splice(index, 1);
      }
    }
  }
}
