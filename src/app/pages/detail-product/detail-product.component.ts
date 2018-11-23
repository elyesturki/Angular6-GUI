import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
// Import External Interface
import { Products } from '../../interfaces/products';

//import service ListProductsService
import  { ListProductsService } from '../../services/list-products.service';

import {Location} from '@angular/common';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {
/*
  @Input() public albumId: number;
  @Input() public id: number;
  @Input() public title:string;
  @Input() public url:string;
  @Input() public thumbnailUrl:string;*/

  product = {};
  isLoading=true;

  constructor(private route: ActivatedRoute,
              private location: Location,
              public listProducts: ListProductsService
              ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.getProductDetails(id);
  };

  getProductDetails(id) {
    console.log("id: ",id);
    this.listProducts.getProduct(id).subscribe(data => {
        console.log(data);
        this.product = data;
        this.isLoading = false;
    });
  };

  goBack(): void {
    this.location.back();
  };

}

/*
var x = this.paramURL.split("_",2);
    this.id = x[1];
    console.log("id: ",this.id);
    this.heroService.getHero(heroId).subscribe((hero: Hero) => {
      this.hero = hero;
    });
*/