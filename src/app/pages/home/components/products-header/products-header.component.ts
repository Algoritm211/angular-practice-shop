import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: './products-header.component.html',
  styles: [
  ]
})
export class ProductsHeaderComponent implements OnInit {
  @Output() columnsCountChange = new EventEmitter<number>()
  @Output() sortChange = new EventEmitter<'asc' | 'desc'>()
  @Output() itemsCountChange = new EventEmitter<number>()

  sort = 'asc'
  showItemsCount = 12

  constructor() { }

  ngOnInit(): void {
  }

  onSortChange(newSort: 'asc' | 'desc') {
    this.sort = newSort;
    this.sortChange.emit(newSort);
  }

  onShowItemsChange(newCount: number) {
    this.showItemsCount = newCount;
    this.itemsCountChange.emit(newCount);
  }

  onItemsLayoutUpdated(colsNum: number) {
    this.columnsCountChange.emit(colsNum)
  }
}
