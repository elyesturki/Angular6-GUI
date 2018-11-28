import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Products } from '../../interfaces/products'; // Import External Interface

import { ActivatedRoute } from '@angular/router';

//import service ListProductsService
import  { ListProductsService } from '../../services/list-products.service';

//import pipe
import { FilterTitlePipe } from '../../pipes/filter-title.pipe';


@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})
export class ListProductsComponent implements OnInit {

  /**/
  isChecked=false;
  /**/

  products: Products[];
  isLoading=true;

  public filters = [];
  public filtersStatus = [];

  public selectedFilters = [];
  public paramFilters = "";

  searchParams: string;

  searchParamsFilter = [];

  constructor( public listProducts: ListProductsService, private route: ActivatedRoute ) { 
   
  }


  ngOnInit() {
    this.searchParams = this.route.snapshot.params.params;
    console.log("searchParams: ",this.searchParams);

    this.searchParamsFilter = this.searchParams.split('=');
    console.log("searchParamsFilter: ",this.searchParamsFilter);
    if (this.searchParamsFilter[1]) {
      this.getAlbumList(this.searchParamsFilter[1])
      this.getProductsByAlbumId(this.searchParamsFilter[1]);
    }
  }

  public getAlbumList(idParams) {
    var filtersTab = this.filters
    this.listProducts.getProducts('').subscribe((data: Products[]) => {
      console.log("data: ", data, idParams);
        for (let i=0; i<data.length; i++) {
          data[i].status=false;
          if (data[i].albumId == idParams) {
             data[i].status=true; 
          }
          if(this.filters.indexOf(data[i].albumId) === -1 && data[i].albumId<11) {
            this.filters.push(data[i].albumId);
            this.filtersStatus.push({
              'albId':data[i].albumId,
              'status': data[i].status
            });
          }
        };
      this.isLoading = false;
    });
  }

  public getProductsList(params) {
    this.listProducts.getProducts(params).subscribe((data: Products[]) => {
      console.log("data: ",data);
      this.products = data;
      this.isLoading = false;
    });
  }

  public getProductsByAlbumId(filter) {
    console.log("filter3: ",filter)
    if (filter==undefined) {
      filter=1;
    }
    // change stat of item
    for (var i=0; i<this.filters.length; i++) {
        if (this.filters[i].name === filter) {
          this.filters[i].status = !this.filters[i].status;
        }
    }

    this.isLoading = true;
    if (this.selectedFilters.indexOf("albumId="+filter)===-1) {
      this.selectedFilters.push("albumId="+filter)
    } else {
      for (let i=0; i<this.selectedFilters.length; i++) {
        if (this.selectedFilters[i]===("albumId="+filter)) {
          this.selectedFilters.splice(i,1);  
        }
      }
    };
    if (!this.selectedFilters.length) {
      this.getProductsList('');
    }
    //create this string to add url param (albumId=1&albumId=2&albumId=3&albumId=4)
    this.paramFilters = this.selectedFilters.join('&');
    console.log("paramFilters: ",this.paramFilters);
    this.listProducts.getProductsByAlbumId(this.paramFilters).subscribe((data: Products[]) => {
      this.products = data;
      this.isLoading = false;
    });
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

 /*
checkbox:
https://stackblitz.com/edit/angular-abelrm

 */