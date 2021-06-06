import { Component, OnInit } from '@angular/core';
import { Product } from '../product-list/product';

@Component({
  selector: 'mymine-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  totalWishlist: number = 0;
  listOfWishBook: Product[] = [];
  userName: String = "Feby Bun Bun";

  constructor() { }

  ngOnInit(): void {
  }

  addWishlistChart(item: Product) {
    console.log(item);
    this.totalWishlist = this.totalWishlist + 1;
    this.listOfWishBook.push(item);
  }

}
