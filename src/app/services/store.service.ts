import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../shared/models/product.model";

const STORE_BASE_URL = 'https://fakestoreapi.com'

@Injectable()
export class StoreService {

  constructor(private http: HttpClient) {
  }

  getAllProducts(limit = 12, sort = 'asc', category?: string) {
    const requestUrl = category !== undefined
      ? `${STORE_BASE_URL}/products/category/${category}`
      : `${STORE_BASE_URL}/products`;

    const params = { sort, limit }
    return this.http.get<Product[]>(requestUrl, { params })
  }

  getAllCategories() {
    return this.http.get<string[]>(`${STORE_BASE_URL}/products/categories`)
  }
}
