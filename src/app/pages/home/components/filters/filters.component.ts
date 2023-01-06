import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styles: [
  ]
})
export class FiltersComponent implements OnInit {
  @Output() showCategory = new EventEmitter<string>()
  categories = ['cars', 'houses']
  constructor() { }

  ngOnInit(): void {
  }

  onChangeCategory(category: string) {
    this.showCategory.emit(category)
  }
}
