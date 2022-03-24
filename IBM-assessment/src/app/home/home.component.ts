import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { GetItems } from '../store/actions';
import { Product } from '../product/product.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private store: Store<{ items: Product[] }>) {
    store.pipe(select('shop')).subscribe(data => (this.items = data.items));
    console.log("Home component");
    console.log(this.items);
  }

  items: Product[] = [];
  banners = [];

  ngOnInit() {
    this.store.dispatch(new GetItems({page: 1, limit: 10}));
  }
}
