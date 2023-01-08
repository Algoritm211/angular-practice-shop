import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {Cart, CartItem} from "../../shared/models/cart.model";
import {CartService} from "../../services/cart.service";
import {Subject, takeUntil} from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styles: [
  ]
})
export class CartComponent implements OnInit, OnDestroy {
  cartService = inject(CartService);
  unsubscribe$ = new Subject<void>()
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
    this.cartService.cart$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((_cart) => {
      this.cart = _cart;
      this.dataSource = _cart.items;
    })
  }

  addItemQuantity(item: CartItem) {
    this.cartService.addToCart(item);
  }

  decreaseItemQuantity(item: CartItem) {
    this.cartService.removeItem(item)
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
