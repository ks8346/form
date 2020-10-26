import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FirstHalfComponent} from './first-half/first-half.component';
import {SecondHalfComponent} from './second-half/second-half.component';


const routes: Routes = [
  {
    path:"",component:FirstHalfComponent
  },
  {
    path:"second",component:SecondHalfComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routing=[FirstHalfComponent,SecondHalfComponent]
