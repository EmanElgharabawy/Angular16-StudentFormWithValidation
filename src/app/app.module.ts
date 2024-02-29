import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';
import { BindignComponent } from './bindign/bindign.component';
import { FormsModule, NgForm } from '@angular/forms';
import { SliderComponent } from './slider/slider.component';
import { StudentComponent } from './student/student.component';

@NgModule({
  declarations: [
    AppComponent,
    TwowaybindingComponent,
    BindignComponent,
    SliderComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
