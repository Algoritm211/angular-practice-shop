import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {Product} from "../../shared/models/product.model";
import {StoreService} from "../../services/store.service";
import {Subject, takeUntil} from 'rxjs';

const ROWS_HEIGHT: Record<number, number> = { 1: 400, 3: 335, 4: 350 }

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit, OnDestroy {
  unsubscribe$ = new Subject<void>()
  itemsCols = 3;
  category: string | undefined;
  rowHeight = ROWS_HEIGHT[this.itemsCols];
  private count = 12
  sort = 'asc';
  products: Product[] = [];

  cartService = inject(CartService);
  storeService = inject(StoreService);

  constructor() { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.storeService.getAllProducts(this.count, this.sort, this.category)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((_products) => {
        this.products = _products;
      })
  }

  onItemsCountChange(newCount: number) {
    this.count = newCount;
    this.getProducts();
  }

  onSortChange(newSort: 'asc' | 'desc') {
    this.sort = newSort;
    this.getProducts();
  }

  onColumnsCountChange(colsNumber: number) {
    this.itemsCols = colsNumber
    this.rowHeight = ROWS_HEIGHT[colsNumber];
  }

  onCategoryChange(category: string) {
    this.category = category;
    this.getProducts();
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

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
