import {inject, Injectable} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {BehaviorSubject} from "rxjs";
import {Cart, CartItem} from "../shared/models/cart.model";

@Injectable()
export class CartService {
  private _cart = new BehaviorSubject<Cart>({items: []})
  cart$ = this._cart.asObservable();
  private snackBar: MatSnackBar = inject(MatSnackBar);

  constructor() {}

  addToCart(newItem: CartItem) {
    const items = [...this._cart.value.items];
    const itemInCart = items.find(item => item.id === newItem.id);

    if (itemInCart) {
      itemInCart.quantity += 1;
      this.snackBar.open(
        'Quantity of this item was increased',
        'Ok',
        {duration: 3000})
      return;
    }

    items.push(newItem);
    this._cart.next({items});
    this.snackBar.open(
      'New Item was added to cart',
      'Ok',
      {duration: 3000})
  }

  removeItem(itemToRemove: CartItem) {
    const items = [...this._cart.value.items];
    const itemInCart = items.find(item => item.id === itemToRemove.id)!;

    if (itemInCart.quantity === 1) {
      this.removeElementFromCart(itemToRemove.id);
      return;
    }

    itemInCart.quantity -= 1;
    this.snackBar.open(
      'Quantity of this item was decreased',
      'Ok',
      {duration: 3000})
  }

  clearCart() {
    this._cart.next({items: []});
    this.snackBar.open('Now cart is cleared', 'Ok', {duration: 3000})
  }

  removeElementFromCart(id: string) {
    const newItems = this._cart.value.items.filter(elem => elem.id !== id);
    this._cart.next({ items: newItems });
    this.snackBar.open('Item was removed', 'Ok', {duration: 3000})
  }

  get itemsQuantity() {
    return this._cart.value.items
      .map(item => item.quantity)
      .reduce((acc, current) => acc + current, 0);
  }

  get cartTotalPrice() {
    return this._cart.value.items.map((item) => item.price * item.quantity)
      .reduce((acc, current) => acc + current,0)
  }
}
