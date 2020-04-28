import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IProduct } from './product';

@Component({
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  pageTitle: string = 'Product Detail';
  product: IProduct;

  constructor (private route: ActivatedRoute) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`
    this.product = {
      'productId': id,
      'productName': 'Leaf Rake',
      'productCode': 'GDN-001',
      'releaseDate': 'March 19, 2019',
      'description': 'just a good old leaf rake',
      'price': 19.95,
      'starRating': 3.2,
      'imageUrl': 'assets/images/leaf_rake.png' 
    }
  }

}
