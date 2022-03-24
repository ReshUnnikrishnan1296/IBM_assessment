import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { LoadItems, GetItems } from '../store/actions';
import { Product } from '../product/product.component';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  constructor(
    private fruitService: ProductsService,
    private store: Store<{ items: []; cart: [] }>
  ) {}

  @Input() fruits: Product[] = [];
  throttle = 50;
  scrollDistance = 0.2;
  limit = 10;
  page = 1;

  onScrollEnd() {
    this.page += 1;

    if (this.page <= 5) {
      this.store.dispatch(new GetItems({ page: this.page, limit: this.limit }));
    }
  }

  ngOnInit() {}
}
