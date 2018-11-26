import { Component, OnInit } from '@angular/core';
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
  }

  onSubmit() {
    
    console.log("this.searchData: ",this.searchData);
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.searchData))
    
    /*var body = "titre=" + this.searchData.titre + "&idAlbum=" + this.searchData.idAlbum;*/
    // return this.http.post("http://localhost:4200/products", this.searchData)
  }

}
