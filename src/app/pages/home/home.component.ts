import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  itemsCols = 3;
  category = 'houses'

  constructor() { }

  ngOnInit(): void {
  }

  onColumnsCountChange(colsNumber: number) {
    this.itemsCols = colsNumber
  }

  onCategoryChange(category: string) {
    this.category = category;
  }
}
