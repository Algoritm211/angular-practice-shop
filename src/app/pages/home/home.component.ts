import { Component, OnInit } from '@angular/core';

const ROWS_HEIGHT: Record<number, number> = { 1: 400, 3: 335, 4: 350 }

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  itemsCols = 3;
  category = 'houses'
  rowHeight = ROWS_HEIGHT[this.itemsCols];

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
}
