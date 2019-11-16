import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductVariant } from '../domain';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private http: HttpClient
  ) { }

  getProductVariantProductId(productId) {
    return this.http.get<ProductVariant[]>(
      `${environment.baseUrl}/productVariants`,
      {params: {
        _expand: 'product',
        _embed: 'productVariantImages',
        productId
      }}
      );
  }
}
