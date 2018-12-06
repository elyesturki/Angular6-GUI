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

  constructor( private http: HttpClient, private router: Router, private listProducts: ListProductsService) {
    this.getlbumIdList()
  }

  ngOnInit() {
    
  }

  public getlbumIdList() {
    this.listProducts.getProducts('').subscribe((data) => {
        for (let i=0; i<data.length; i++) {
          if(this.albumIdList.indexOf(data[i].albumId) === -1 && data[i].albumId<11) {
            this.albumIdList.push(data[i].albumId);
          }
        };
        console.log("this.albumIdList: ",this.albumIdList);
    });
  }

  onSubmit() {
    //console.log("this.searchData1: ",this.searchData);
    //alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.searchData))

    if (!this.searchData.albumId) {
      this.isSelectedAlbum=false;
      return
    }

    this.params = new HttpParams()
    // .set('title', this.searchData.title)
    .set('albumId', this.searchData.albumId);
    var searchParams = this.params.toString();
    this.router.navigate( [ '/products', searchParams ] );
  }

}
