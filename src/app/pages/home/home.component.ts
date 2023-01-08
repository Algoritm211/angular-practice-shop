import {Component, inject, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {Product} from "../../shared/models/product.model";
import {MatSnackBarRef} from "@angular/material/snack-bar";

const ROWS_HEIGHT: Record<number, number> = { 1: 400, 3: 335, 4: 350 }

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  itemsCols = 3;
  category = 'houses'
  rowHeight = ROWS_HEIGHT[this.itemsCols];

  cartService = inject(CartService);

  constructor() { }

  ngOnInit(): void {
  }

  onColumnsCountChange(colsNumber: number) {
    this.itemsCols = colsNumber
    this.rowHeight = ROWS_HEIGHT[colsNumber];
  }

  onCategoryChange(category: string) {
    this.category = category;
  }

  onAddToCart(product: Product) {
    this.cartService.addToCart({
      id: product.id,
      image: product.image,
      name: product.title,
      price: product.price,
      quantity: 1,
    })
  }
}
