import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { ActionTypes } from './actions';
import { ProductsService } from '../services/products.service';

@Injectable()
export class ShopEffects {
  @Effect()
  loadCoffee$ = this.actions$.pipe(
    ofType(ActionTypes.LoadItems),
    mergeMap(({ payload: { page, limit } }) => {
      return this.productService.getAll(page, limit).pipe(
        map((coffee) => {
          return { type: ActionTypes.LoadSuccess, payload: coffee };
        }),
        catchError(() => EMPTY)
      );
    })
  );

  constructor(
    private actions$: Actions,
    private productService: ProductsService
  ) {}
}
