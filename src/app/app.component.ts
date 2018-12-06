import { Component } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular6-gui';

  companyName: string = 'Elyes COM';

  public ngOnInit()
  {
    $(document).ready(function(){
        console.log("jQuery OK!!");
    });
  }
}
