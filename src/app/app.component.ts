import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  myStr = 'Ala ma kota';
  tag = 0;

  butt1click()
  {
    //window.alert('OK!');
    if(this.tag == 0)
    {
      this.tag =1;
      this.myStr = 'Ala nie ma kota';
    }
    else
    {
      this.tag =0;
      this.myStr = 'Ala ma kota';
    }    
  }
}