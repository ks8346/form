import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import {Employee} from '../employee'
import {SharingService} from '../sharing.service';
import {RegisterService} from '../register.service';
@Component({
  selector: 'app-second-half',
  templateUrl: './second-half.component.html',
  styleUrls: ['./second-half.component.css']
})
export class SecondHalfComponent implements OnInit {
  employeeModel:Employee;
  flag=false;
  // @Output() public secondEvent=new EventEmitter();
  constructor(private sharing:SharingService, private _register:RegisterService) { }
  // fireevent(){
  //   this.secondEvent.emit(this.employeeModel);
  // }

  ngOnInit(): void {
    this.employeeModel=this.sharing.getData();
    console.log(this.employeeModel);

  }
  onSubmit(){  
    this._register.register(this.employeeModel).subscribe(data=>console.log("succes",data),error=>console.error("error",error))
    console.log(this.employeeModel);
  }

}
