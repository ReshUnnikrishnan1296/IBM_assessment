import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { componentFactoryName } from '@angular/compiler';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';

import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { Store } from '@ngrx/store';

import { HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {
  let component : AppComponent;
  let fixture : ComponentFixture<AppComponent>;
  let store: MockStore<{ items: [] }>;
  const initialState = { items: [] };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        InfiniteScrollModule,
        HttpClientModule 
      ],
      providers:[
        provideMockStore({ initialState }),
      ],
      declarations: [
        AppComponent,
        HomeComponent,
        HeaderComponent,
        ProductListComponent,
        ProductComponent
      ],
    }).compileComponents();
  });

  beforeEach(() => {
     fixture = TestBed.createComponent(AppComponent);
     component = fixture.componentInstance;
  })

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  // it(`should have as title coffee-site`, () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.componentInstance;
  //   expect(app.title).toEqual('coffee-site');
  // });

  // it('should render title', () => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.nativeElement as HTMLElement;
  //   expect(compiled.querySelector('.content span')?.textContent).toContain('angular-app app is running!');
  // });
});
