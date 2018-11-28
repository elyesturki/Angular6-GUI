import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpHeaderResponse, HttpParams } from '@angular/common/http';

import {CanActivate, ActivatedRouteSnapshot, Router, RouterStateSnapshot} from '@angular/router';

//import service ListProductsService
import  { ListProductsService } from '../../services/list-products.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

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
 

/*
_old params
var body = "titre=" + this.searchData.titre + "&idAlbum=" + this.searchData.idAlbum;
    // return this.http.post("http://localhost:4200/products", this.searchData)
    //return this.http.get('http://localhost:4200/products/' + 'titre/' + this.searchData.titre)
    //window.location.href = '/products/'+this.params.toString();
    //window.open("/products", "_blank");

*/

/*HttpParams demo*/
// https://www.tektutorialshub.com/how-to-pass-url-parameters-query-strings-angular/

/*
  // Trigger test // 
  // In View : <div #myDiv class="btn btn-primary" (click)="testFn()">Trigger</div>

  // In component :
  testFn() {
    console.log('fn OK4 !!!');
  }
  @ViewChild('myDiv') myDiv: ElementRef;
  triggerFalseClick() {
    // let el: HTMLElement = this.myDiv.nativeElement as HTMLElement;
    // el.click();
    // OU
    setTimeout(()=> {
      this.myDiv.nativeElement.click();
      this.triggerFalseClick();
    } , 1000)
    
  }
  
  // on fait appel à 
  //fin Trigger test this.triggerFalseClick() dans ngOnInit()
*/