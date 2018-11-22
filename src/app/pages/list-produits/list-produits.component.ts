import { Component, OnInit } from '@angular/core';
import { Products } from '../../interfaces/products'; // Import External Interface

//import service ListProduitsService
import  { ListProduitsService } from '../../services/list-produits.service';


@Component({
  selector: 'app-list-produits',
  templateUrl: './list-produits.component.html',
  styleUrls: ['./list-produits.component.css']
})
export class ListProduitsComponent implements OnInit {

  products: any[] = [];

  constructor( public listProducts: ListProduitsService ) { 
    this.listProducts.getProducts().subscribe(data=>{
      this.products.push(data);
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
constructor( public listProducts: ListProduitsService ) { 
    this.listProducts.getProducts().subscribe(data=>{
      this.products.push(data);
    });
  }
++++++++++++++++++++
    */