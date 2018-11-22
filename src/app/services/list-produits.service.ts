import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListProduitsService {
 // let URL : String = "https://jsonplaceholder.typicode.com/photos";
  
  data : Observable<Array<number>>;
  constructor() {
    
  }

  getProducts() {
    this.data = new Observable(observer=>{

      setTimeout(()=>{
        observer.next('Angular2');
      }, 1000);

      setTimeout(()=>{
        observer.next('Angular4');
      }, 2000)

      setTimeout(()=>{
        observer.next('Angular5');
      }, 3000)

      setTimeout(()=>{
        observer.next('Angular6');
      }, 4000)

    });
    return this.data;
  }


}
// products:any[];
// this.products = ["Angular", "VueJS", "ReactJS3"]
// getProducts() {
//     return this.products;
//   }