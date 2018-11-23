import { Component, OnInit } from '@angular/core';
import { Products } from '../../interfaces/products'; // Import External Interface

//import service ListProductsService
import  { ListProductsService } from '../../services/list-products.service';


@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  products: Products[];
  isLoading=true;

  public filters = [];


  constructor( public listProducts: ListProductsService ) { 
    this.getProductsList();
  }

  


  ngOnInit() {
    //console.log("filter: ",this.isFilter);
  }

  public getProductsList() {
    this.listProducts.getProducts().subscribe((data: Products[]) => {
      console.log("data: ",data);
      this.products = data;
       for (let i=0; i<data.length; i++) {
          if(this.filters.indexOf(data[i].albumId) === -1 && data[i].albumId<21) {
            this.filters.push(data[i].albumId);
          }
        }
      this.isLoading = false;
    });
  }

  public getProductsByAlbumId(filter) {
    console.log("filter: ",filter);
    //this.isLoading = true;
    this.listProducts.getProductsByAlbumId(filter).subscribe((data: Products[]) => {
      this.products = data;
      this.isLoading = false;
    });
  }


  public filterClicked(filter) {
    console.log("filter: ",filter);
  }

 

}

/*
product: Products;
prodtucts: Products[];

this.product= {
  albumId:1,
  id:1,
  title:"accusamus beatae ad cum similique qui sunt",
  url:"https://via.placeholder.com/600/92c952",
  thumbnailUrl:"https://via.placeholder.com/150/92c952"
}
++++++++++++++++++++
constructor( public listProducts: ListProductsService ) { 
    this.listProducts.getProducts().subscribe(data=>{
      this.products.push(data);
    });
  }
++++++++++++++++++++
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
@Output() selectedFilter: EventEmitter<any> = new EventEmitter();

public filterClicked(filter) {
    console.log("filter: ",filter);
    this.selectedFilter.emit(filter);
 }

 +++++++++++++++++
 for (let i=0; i<data.length; i++) {
        data[i].albumId= this.getRandomInt(1, 10);
        if(this.filters.indexOf(data[i].albumId) === -1) {
          this.filters.push(data[i].albumId);
        }
      }


random+++++++++++++++++++
 getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  console.log("filterTab: ",this.filters.sort((n1,n2) => n1 - n2));
    */