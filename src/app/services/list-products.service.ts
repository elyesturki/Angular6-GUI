import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

// Import External Interface
import { Products } from '../interfaces/products'; 

//import  httpClient
import { HttpClient } from '@angular/common/http';




@Injectable({
  providedIn: 'root'
})
export class ListProductsService {

  URL = 'https://jsonplaceholder.typicode.com/photos';
 
  constructor( private http: HttpClient) { }

  getProducts() : Observable<Products[]> {
    return this.http.get<Products[]>(this.URL);
  }

}
/*
getProducts() : Observable<Products[]> {
    return this.http.get<Products[]>(this.URL);
  }
  */
//.map(res=>res.json());
// products:any[];
// this.products = ["Angular", "VueJS", "ReactJS3"]
// getProducts() {
//     return this.products;
//   }