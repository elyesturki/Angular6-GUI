import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input('company') companyName: string;


  constructor() {
    console.log("#Footer OK !!!")
  }

  ngOnInit() {
  }

}
