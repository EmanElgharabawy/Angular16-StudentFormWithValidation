import { Component } from '@angular/core';

@Component({
  selector: 'app-twowaybinding',
  templateUrl: './twowaybinding.component.html',
  styleUrls: ['./twowaybinding.component.css']
})
export class TwowaybindingComponent {
  inputname:string ="";
  changename(value : string)
  {
   this.inputname = value;
  }
  inputage:string  ="";
  changeage(value: string)
  {
    
    this.inputage=value;
  }

  courses:string = "";
}
