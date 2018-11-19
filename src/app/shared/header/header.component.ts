import { Component, OnInit } from '@angular/core';
// import { HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  // tslint:disable-next-line:use-host-property-decorator
  host: {
    '(window:scroll)': 'onScroll($event)'
  }
})
export class HeaderComponent implements OnInit {
  isScrolled = false;
  currPos: Number = 0;
  startPos: Number = 0;
  changePos: Number = 100;
  constructor() {

  }

  ngOnInit() {
    console.log('ngOnInit32');
  }

  onScroll(evt) {
    this.currPos = (window.pageYOffset || evt.target.scrollTop) - (evt.target.clientTop || 0);
    if(this.currPos >= this.changePos ) {
        this.isScrolled = true;
    } else {
        this.isScrolled = false;
    }
}

}

// Header scroll class
// $(window).scroll(function() {
//   if ($(this).scrollTop() > 100) {
//       $('#header').addClass('header-scrolled');
//   } else {
//       $('#header').removeClass('header-scrolled');
//   }
// });
