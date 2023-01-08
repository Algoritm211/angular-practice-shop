import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from "../../../../shared/models/product.model";

@Component({
  selector: 'app-product-box[fullWidthMode][product]',
  templateUrl: './product-box.component.html',
  styles: [
  ]
})
export class ProductBoxComponent implements OnInit {
  @Input() fullWidthMode = false;
  @Input() product!: Product

  @Output() addToCart = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  onAddToCart() {
    this.addToCart.emit(this.product)
  }

}
