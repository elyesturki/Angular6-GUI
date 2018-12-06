import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
    
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