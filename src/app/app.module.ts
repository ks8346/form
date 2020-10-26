import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule, routing } from './app-routing.module';
import { AppComponent } from './app.component';
import {SharingService} from './sharing.service'

@NgModule({
  declarations: [
    AppComponent,
    routing
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [SharingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
