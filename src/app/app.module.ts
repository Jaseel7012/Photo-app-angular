import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PhotoViewComponent } from './photo-view/photo-view.component';
import {HttpClientModule} from '@angular/common/http'
const myroute:Routes=[{
  path:'',
  'component':PhotoViewComponent

}
  

]


@NgModule({
  declarations: [
    AppComponent,
    PhotoViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(myroute),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
