import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpHeaderResponse, HttpParams } from '@angular/common/http';

import {CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';

//import service ListProductsService
import  { ListProductsService } from '../../services/list-products.service';

@Component({
  selector: 'app-search-home',
  templateUrl: './search-home.component.html',
  styleUrls: ['./search-home.component.css']
})
export class SearchHomeComponent implements OnInit {

  albumIdList = [];

  public params;
  searchData: any = {};

  isSelectedAlbum=true;

  paramTab = [];


  /****/
  expanded = false;
  public showCheckboxes() {
    var checkboxes = document.getElementById("checkboxes");
    if (!this.expanded) {
      checkboxes.style.display = "block";
      this.expanded = true;
    } else {
      checkboxes.style.display = "none";
      this.expanded = false;
    }
  }


  constructor( private http: HttpClient, private router: Router, private listProducts: ListProductsService) {
    this.getlbumIdList()
  }

  ngOnInit() {
    
  }

  public getlbumIdList() {
    var count=0;
    this.listProducts.getProducts('').subscribe((data) => {
        for (let item in data) {
          if(this.albumIdList.indexOf(item) === -1 && count<11) {
            this.albumIdList.push(item);
          }
          count++;
        };
    });
  }


  onSubmit(event) {
    this.paramTab=[];
    var target = event.target;
    for (let i=0; i<target.length ; i++) {
      if (!!target[i].checked && target[i].value!='' && this.paramTab.indexOf("albumId="+target[i].value)===-1) {
        this.paramTab.push("albumId="+target[i].value);
      }
    }

    //console.log("this.searchData1: ",this.searchData);
    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.searchData))

    if (!this.paramTab.length) {
      this.isSelectedAlbum=false;
      return
    } 
    //this.params = new HttpParams()
    // .set('title', this.searchData.title)
    //.set('albumId', this.searchData.albumId);
    //var searchParams = this.params.toString();
    var searchParams = this.paramTab.join('&');
    this.router.navigate( [ '/products', searchParams ] );
  }

}
