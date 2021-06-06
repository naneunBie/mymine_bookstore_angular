import { Component, OnInit, Output, EventEmitter, Input, SimpleChanges } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'mymine-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  @Input() myName: String = '';
  @Output() myWishlist = new EventEmitter<Product>();

  listOfProduct: Product[] = [new Product()];

  constructor() { }

  ngOnInit(): void {

    this.listOfProduct = [
      { id: "1", title: "The dead Returns", author: "Akiyoshi Rikako", markLove: false },
      { id: "2", title: "The life-changing magic of tidying up", author: "Marie Kondo", markLove: false },
      { id: "3", title: "The dead Returns", author: "Akiyoshi Rikako", markLove: false },
      { id: "4", title: "The life-changing magic of tidying up", author: "Marie Kondo", markLove: false },
      { id: "5", title: "The dead Returns", author: "Akiyoshi Rikako", markLove: false },
      { id: "6", title: "The life-changing magic of tidying up", author: "Marie Kondo", markLove: false }
    ];
  }


  addMyWishlist(product: Product) {
    this.myWishlist.emit(product);
    this.showMessage(product.title);
  }

  showMessage(title: String) {
    window.alert('The book ' + title + ' has been add to my WISHLIST!');
  }


}
