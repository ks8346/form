import { Injectable } from '@angular/core';
import {Employee} from './employee'
@Injectable({
  providedIn: 'root'
})
export class SharingService {
  private data:Employee =new Employee('','','','','',new Date("2020/10/05"));;

    setData(data:Employee){
        this.data.email = data.email;
        this.data.first=data.first;
        this.data.last=data.last;
        this.data.contact=data.contact;
        this.data.interests="";
        this.data.joining=new Date("2020-10-05");
    }

    getData():Employee{
        return this.data;
    }
  constructor() { }
}
