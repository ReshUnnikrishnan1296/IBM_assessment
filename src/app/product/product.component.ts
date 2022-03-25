import { Component, Input, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { SetProductId } from '../store/actions';
import { map } from 'rxjs/operators';

export interface Product {
  id: number,
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
  constructor(private store: Store<{ items: []}>, private router: Router) {}
  @Input() product: Product;

  ngOnInit() {}

  buttonClick = () => {
    this.store.dispatch(new SetProductId({ id: this.product.id }));
    // console.log('state', this.store.select(appState => appState.items));
    // this.store.pipe(map(state => console.log(state)));
    this.router.navigateByUrl(`/product_details/${this.product.id}`);
  }
}
