import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ProductListComponent } from '../product-list/product-list.component';
import { ProductComponent } from '../product/product.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { Store } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';


import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let store: MockStore<{ items: [] }>;
  const initialState = { items: [] };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        InfiniteScrollModule,
        HttpClientModule 
      ],
      providers: [
        provideMockStore({ initialState }),
      ],
      declarations: [ HomeComponent,
      ProductListComponent,
      ProductComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
