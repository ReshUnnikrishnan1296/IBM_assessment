import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Store } from '@ngrx/store';

import { ProductListComponent } from './product-list.component';
import { ProductComponent } from 'src/app/product/product.component';
import { Product } from 'src/app/product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

describe('ProductListComponent', () => {
  let component: ProductListComponent;

  let store: MockStore<{ items: [] }>;
  const initialState = { items: [] };

  let Pcomponent: ProductComponent;
  let prod : Product;
  let fixture: ComponentFixture<ProductListComponent>;
  let expectedProductList = {
		"blend_name": "Veranda Solstice",
		"origin": "Boaco, Nicaragua",
		"variety": "Geisha",
		"notes": "crisp, big, fresh bread, golden raisin, mandarin",
		"intensifier": "juicy"
	};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[InfiniteScrollModule,
        HttpClientModule ],
      declarations: [ ProductListComponent ],
      providers: [
        provideMockStore({ initialState }),
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    store = TestBed.get(Store);
    // Pcomponent.product = expectedProductList;
    // prod = expectedProductList;
    // component.coffee = [prod];
    fixture.detectChanges();
    
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
