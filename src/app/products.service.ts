import { Injectable } from '@angular/core';
import { IProduct } from './products';
import { products } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  products: IProduct[] = products

  constructor() { }

  getAll() {
    return this.products;
  }
  
  getOne(id: number){
    return this.products.find(product => product.id === id);
  }
}
