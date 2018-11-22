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

  constructor( public listProducts: ListProductsService ) { 
    this.listProducts.getProducts().subscribe((data: Products[]) => {
        this.products = data;
    });
  }

  ngOnInit() {
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
    */