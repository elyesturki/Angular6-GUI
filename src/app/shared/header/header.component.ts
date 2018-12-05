import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
   
  @Input('company') companyName: string;
  
  nameValue: string;

  @Output() nameChange: EventEmitter<any> = new EventEmitter();

  changeName(val){
    this.name = val;
  }

  @Input() 
  get name() {
    return this.nameValue;
  }
  
  set name(val) {
    this.nameValue = val;
    this.nameChange.emit(this.nameValue);
  }

  constructor() {

  }

  ngOnInit() {

   // this.companyName = this.varName;

    $(document).ready(function(){

      $('.burger').click(function(){
        $('header').toggleClass('clicked');
      });

      $('nav ul li').click(function(){
        $('nav ul li').removeClass('selected');
        $('nav ul li').addClass('notselected');
        $(this).toggleClass('selected');
        $(this).removeClass('notselected');
      });
      /***/
      /*$(window).scroll(function() {
        if ($(this).scrollTop() > 80) {
          $('#header').addClass('header-scrolled');
        } else {
          $('#header').removeClass('header-scrolled');
        }
       });*/
    }); 
  } //end ngOnInit

}

/*
  
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    '(window:scroll)': 'onScroll($event)'
  }

  isScrolled = false;
  currPos: Number = 0;
  startPos: Number = 0;
  changePos: Number = 100;


  onScroll(evt) {
    this.currPos = (window.pageYOffset || evt.target.scrollTop) - (evt.target.clientTop || 0);
    if(this.currPos >= this.changePos ) {
        this.isScrolled = true;
    } else {
        this.isScrolled = false;
    }
  }
*/