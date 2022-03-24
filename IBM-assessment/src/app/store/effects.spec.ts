import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { ReplaySubject } from 'rxjs';

import { ShopEffects } from './effects';
import * as DataActions from './actions';

import { HttpClient, HttpHandler } from '@angular/common/http';

describe('My Effects', () => {
  let effects: ShopEffects;
  let actions: ReplaySubject<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        // any modules needed
      ],
      providers: [
        ShopEffects,
        HttpClient,
        HttpHandler,
        provideMockActions(() => actions),
        // other providers
      ],
    });

    effects = TestBed.get(ShopEffects);
  });

  it('should work', () => {
    actions = new ReplaySubject(1);
    actions.next(new DataActions.GetItems({page: 1, limit: 10}));

    effects.loadCoffee$.subscribe(result => {
      expect(result).toEqual('');
    });
  });
});