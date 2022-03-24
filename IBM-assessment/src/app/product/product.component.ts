import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

export interface Product {
  blend_name: string,
  variety: string,
  intensifier: string,
  notes: string,
  origin: string
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  constructor(private store: Store<{ items: []; cart: [] }>) {}

  inCart = false;
  @Input() product: Product;

  ngOnInit() {}
}
