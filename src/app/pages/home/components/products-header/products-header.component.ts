import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styles: [
  ]
})
export class ProductsHeaderComponent implements OnInit {
  @Output() columnsCountChange = new EventEmitter<number>()
  sort = 'asc'
  showItemsCount = 12

  constructor() { }

  ngOnInit(): void {
  }

  onSortChange(newSort: 'asc' | 'desc') {
    this.sort = newSort;
  }

  onShowItemsChange(newCount: number) {
    this.showItemsCount = newCount;
  }

  onItemsLayoutUpdated(colsNum: number) {
    this.columnsCountChange.emit(colsNum)
  }
}
