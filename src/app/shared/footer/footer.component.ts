import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  @Input('company') companyName: string;

  /////out put/////////////
  @Output() notifyParent: EventEmitter<any> = new EventEmitter();

  vEmail: string = "elyes@test.com"

  sendMail(mail) {
    //this.vEmail=mail;
   console.log("notifyParent:", this.notifyParent)
    this.notifyParent.emit(mail);
  }

  //////////////////


  constructor() {
    console.log("#Footer OK !!!")
  }

  ngOnInit() {
  }

}
