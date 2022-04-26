import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular12';
  data = "Data Value Interpolation";

  getInterpolationValue(){
    return "This is return value from Interpolation function!";
  }

}
