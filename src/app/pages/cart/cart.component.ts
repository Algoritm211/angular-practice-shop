import { Component, OnInit } from '@angular/core';
import {Cart, CartItem} from "../../shared/models/cart.model";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styles: [
  ]
})
export class CartComponent implements OnInit {
  cart: Cart = {
    items: [
      {
        id: '1',
        name: 'Shoes',
        image: 'https://via.placeholder.com/150',
        quantity: 5,
        price: 150,
      },
      {
        id: '2',
        name: 'T-shirt',
        image: 'https://via.placeholder.com/150',
        quantity: 5,
        price: 150,
      },
    ]
  }

  dataSource: Array<CartItem> = [];

  displayedColumns: string[] = [
    'image',
    'name',
    'price',
    'quantity',
    'total',
    'action'
  ];

  constructor() { }

  ngOnInit(): void {
    this.dataSource = this.cart.items;
  }


  getTotalPrice() {
    return this.cart.items.map((item) => item.price * item.quantity)
      .reduce((acc, current) => acc + current,0)
  }

}
