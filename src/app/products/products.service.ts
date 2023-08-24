import { Injectable } from '@angular/core';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private products: Product[] = [
    new Product(
      1,
      'T-shirt',
      'T-shirt en coton',
      15,
      'https://assets.laboutiqueofficielle.com/w_1100,q_auto,f_auto/media/products/2022/07/08/boss_327919_50475284_999_20220728T143651_01.jpg'
    ),
    new Product(
      2,
      'Chaussures',
      'Chaussures de sport',
      50,
      'https://i.pinimg.com/236x/f3/09/f0/f309f0eec3c087a16e3dbbd4d003b12e.jpg'
    ),
  ];

  getProducts() {
    return this.products.slice();
  }
}
