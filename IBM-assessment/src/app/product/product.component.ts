import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
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
  styleUrls: ['./product.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent implements OnInit {
  constructor(private store: Store<{ items: []}>) {}
  @Input() product: Product;

  ngOnInit() {}
}
