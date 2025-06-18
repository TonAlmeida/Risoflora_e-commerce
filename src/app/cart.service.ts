import { Injectable } from '@angular/core';
import { IcartProduct, IProduct } from './products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: IcartProduct[] = []

  constructor() { }

  getCart(){
    this.items = JSON.parse(localStorage.getItem('cart') || '[]');
    return this.items;
  }

  addToCart(product: IcartProduct){
    this.items.push(product);
    localStorage.setItem("cart", JSON.stringify(this.items));
  }

  clearCart() {
    this.items = [];
    localStorage.clear();
  }

  removeCartItem(id: number) {
    this.items = this.items.filter(item => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(this.items));
  }

}
