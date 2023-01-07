import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-box[fullWidthMode]',
  templateUrl: './product-box.component.html',
  styles: [
  ]
})
export class ProductBoxComponent implements OnInit {
  @Input() fullWidthMode = false;
  constructor() { }

  ngOnInit(): void {
  }

}
