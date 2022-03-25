import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';

export interface Product {
  blend_name: string,
  variety: string,
  intensifier: string,
  notes: string,
  origin: string
}

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  constructor(private store: Store<{ items: []}>) {}
  @Input() product: Product;

  ngOnInit() {
  }

}
