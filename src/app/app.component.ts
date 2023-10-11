import { Component } from '@angular/core';
import { Fillter } from './models/Fillter.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'man2';
  fillter:Fillter={} as Fillter;
  getDataFillter(data:Fillter){
    this.fillter=data;
  }
  clicked(){
    console.log(this.fillter);
  };
}
