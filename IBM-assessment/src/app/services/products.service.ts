import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(private http: HttpClient) {}

  getAll(page, limit = 10) {
    return this.http.get(
      `https://random-data-api.com/api/coffee/random_coffee?page=${page}&size=${limit}`
    );
  }
}
