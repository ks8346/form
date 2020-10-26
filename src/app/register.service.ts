import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import {Employee} from "./employee";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  _url="http://localhost:8080/api/create";
  constructor(private _http:HttpClient) { }
  register(emp:Employee){
    return this._http.post(this._url,emp);
  }
}
