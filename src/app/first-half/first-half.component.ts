import { Component, OnInit, Output, EventEmitter, } from '@angular/core';
import {Employee} from "../employee";
import {SharingService} from "../sharing.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-first-half',
  templateUrl: './first-half.component.html',
  styleUrls: ['./first-half.component.css']
})
export class FirstHalfComponent implements OnInit {
  employeeModel=new Employee('','','','','',new Date("2020/10/05"));
  constructor(private router:Router,private sharing:SharingService) { }

  ngOnInit(): void {
    console.log(this.employeeModel);
  }
  continue(){
    this.sharing.setData(this.employeeModel);
    // this.router.navigate(["second"]);
    console.log(this.employeeModel);
  }
  // @Output() public firstEvent=new EventEmitter();
  // fireEvent(){
  //   this.firstEvent.emit(this.employeeModel);
  // }
}
