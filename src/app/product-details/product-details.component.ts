import { Component, OnInit, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import {ActivatedRoute} from '@angular/router';

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
  product = {}
  productId = 0
  constructor(private store: Store<{ items: []}>, private route:ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.productId = +params['id'];
    });
    this.store.pipe(select('shop')).subscribe(data => (this.product = data.items.find(item => item.id === this.productId)));
  }
  
  ngOnInit() {
    
  }

}
