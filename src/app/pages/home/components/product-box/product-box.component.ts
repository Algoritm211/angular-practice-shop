import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../../../shared/models/product.model";

@Component({
  selector: 'app-product-box[fullWidthMode]',
  templateUrl: './product-box.component.html',
  styles: [
  ]
})
export class ProductBoxComponent implements OnInit {
  @Input() fullWidthMode = false;
  product: Product = {
    id: '1',
    title: 'Rolls-Royce',
    price: 350,
    category: 'cars',
    description: 'Amazing car',
    image: 'https://via.placeholder.com/150',
  }

  @Output() addToCart = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onAddToCart() {
    this.addToCart.emit(this.product)
  }

}
