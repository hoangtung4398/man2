import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from './models/Employee.model';

@Injectable({
  providedIn: 'root'
})
export class GetAllEmployeeService {


  constructor(private httpClient: HttpClient) { };
  getAllEmployee(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>("https://localhost:7037/WeatherForecast/user")
  }
}
