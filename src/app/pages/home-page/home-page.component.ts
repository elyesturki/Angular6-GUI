import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpHeaderResponse } from '@angular/common/http';
 


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {


  searchData: any = {};

  constructor( private http: HttpClient ) { 
    console.log("#HomePage OK !!!")
  }

  ngOnInit() {
    console.log(this.myDiv)
  }

  onSubmit() {
    
    console.log("this.searchData: ",this.searchData);
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.searchData))
    
    /*var body = "titre=" + this.searchData.titre + "&idAlbum=" + this.searchData.idAlbum;*/
    // return this.http.post("http://localhost:4200/products", this.searchData)
  }

}
 

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