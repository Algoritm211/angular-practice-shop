import {Component, EventEmitter, inject, OnDestroy, OnInit, Output} from '@angular/core';
import {StoreService} from "../../../../services/store.service";
import {Subject, takeUntil} from "rxjs";

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html',
  styles: [
  ]
})
export class FiltersComponent implements OnInit, OnDestroy {
  @Output() showCategory = new EventEmitter<string>()
  unsubscribe$ = new Subject<void>()
  storeService = inject(StoreService);
  categories: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.storeService.getAllCategories()
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((categories) => {
        this.categories = categories;
      })
  }

  onChangeCategory(category: string) {
    this.showCategory.emit(category)
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
