import { Injectable } from '@angular/core';

// import { map, take } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
//import map from rxjs
import { Observable, of, throwError } from 'rxjs';
// Import External Interface
import { Products } from '../interfaces/products'; 
//import  httpClient
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { catchError, tap, map } from 'rxjs/operators';


const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'})
  };

@Injectable({
  providedIn: 'root'
})
export class ListProductsService {

  URL = 'https://jsonplaceholder.typicode.com/photos';

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }

  constructor( private http: HttpClient) { }

  public getProducts() : Observable<any> {
    //return this.http.get<Products[]>(this.URL)  
    return this.http.get(this.URL, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  };

  public getProduct(id: string): Observable<any> {
    return this.http.get(`${this.URL}/${id}`).pipe(
      map(this.extractData),
      catchError(this.handleError));
  };

  public getProductsByAlbumId(albumId) {
    return this.http.get(`${this.URL}?albumId=${albumId}`)
      .map(response => {
        return response;
      });
  }

}
/*

.map(res => res.json())
    .subscribe(
      data=> console.log("data ser: ",data),
      err=> console.log("err serv: ",err),
      ()=> console.log('Random Quote Complete')
      );

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