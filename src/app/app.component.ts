import { Component, ViewChild } from '@angular/core';
import { FirstHalfComponent } from './first-half/first-half.component';
import {SecondHalfComponent} from './second-half/second-half.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'form';
  public message="";
  // employeeModel=new Employee('','','','','',new Date("2020/10/05"));
  @ViewChild(FirstHalfComponent) first:FirstHalfComponent;
  @ViewChild(SecondHalfComponent) second:SecondHalfComponent;

  constructor(router: Router){
    let subs=null;
    
    
  }
  
}
