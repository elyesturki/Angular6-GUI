import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor()  {
    this.headerScroll();
  }

  ngOnInit() {

  }

  headerScroll() {
    console.log("document.body.scrollTop: ", document.body.scrollTop);
    document.getElementById("header").addClass = "header-scrolled";
    if (document.body.scrollTop > 100) {
     // document.getElementById("header").addClass = "header-scrolled";
  } else {
     // document.getElementById("header").removeClass = "header-scrolled";
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
