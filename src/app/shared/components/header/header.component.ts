import {Component, inject, Input, OnInit} from '@angular/core';
import {Cart, CartItem} from "../../models/cart.model";
import {CartService} from "../../../services/cart.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {
  cartService = inject(CartService)

  constructor() { }

  ngOnInit(): void {
  }
}
