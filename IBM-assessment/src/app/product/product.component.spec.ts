import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductComponent } from './product.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

describe('ProductComponent', () => {
  let component: ProductComponent;
  let fixture: ComponentFixture<ProductComponent>;
  let store: MockStore<{ items: [] }>;
  const initialState = { items: [] };
  let expectedCf = {
		"id": 965,
		"uid": "aafadffb-c6b7-4e00-8917-a1433819d5a4",
		"blend_name": "Veranda Solstice",
		"origin": "Boaco, Nicaragua",
		"variety": "Geisha",
		"notes": "crisp, big, fresh bread, golden raisin, mandarin",
		"intensifier": "juicy"
	}

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductComponent ],
      providers: [
        provideMockStore({ initialState }),
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductComponent);
    component = fixture.componentInstance;
    component.product = expectedCf;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
