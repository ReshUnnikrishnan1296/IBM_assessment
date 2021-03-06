import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';

import { LoadItems, GetItems } from '../store/actions';
import { Product } from '../product/product.component';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class ProductListComponent implements OnInit {
  constructor(
    private productService: ProductsService,
    private store: Store<{ items: [] }>
  ) {}

  @Input() coffee: Product[] = [];
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
