import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Products } from '../../interfaces/products'; // Import External Interface
import { ActivatedRoute, Router } from '@angular/router';

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

  products: Products[];
  isLoading=true;

  public filters = [];
  public filtersStatus = [];

  public paramFilters = "";

  strParams;

  tabStrParams = [];
  tabIDParams = [];

  tabFinaId = [];
  constructor( public listProducts: ListProductsService, private route: ActivatedRoute, private router: Router ) { 
   
  }


  ngOnInit() {
    this.strParams = this.route.snapshot.params.params;
    console.log("strParams getURL: ",this.strParams);
    this.getProducts(this.strParams);
    this.getAlbumList(this.strParams);
    
  }

  public getProducts(paramFromURL) {
    this.isLoading = true;
    this.listProducts.getProducts(paramFromURL).subscribe((data: Products[]) => {
      this.products = data;
      this.isLoading = false;
    });
  }

  public getAlbumList(paramFromURL, id?) {
    this.tabIDParams=paramFromURL.split('&');

    if (id) {
      if (this.tabIDParams.indexOf("albumId="+id)===-1) {
        this.tabIDParams.push("albumId="+id)
      } else {
         for (let i=0; i<this.tabIDParams.length; i++) {
          if (this.tabIDParams[i]===("albumId="+id)) {
            this.tabIDParams.splice(i,1);  
          }
         }
      }
      this.strParams=this.tabIDParams.join('&');
      console.log("his.strParams final: ",this.strParams);
      this.getProducts(this.strParams);
    }
    //console.log("this.tabIDParams: ",this.tabIDParams)
    this.listProducts.getProducts('').subscribe((data: Products[]) => {
      for (let i=0; i<data.length; i++) {
        data[i].status=false;
        for (let j=0; j<this.tabIDParams.length ; j++ ) {
          if ("albumId="+data[i].albumId == this.tabIDParams[j]) {
           data[i].status=true; 
          }
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

}

/*


/////////////

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