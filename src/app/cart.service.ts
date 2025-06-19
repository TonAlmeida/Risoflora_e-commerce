import { Injectable } from '@angular/core';
import { IcartProduct } from './products';
import { BehaviorSubject } from 'rxjs';
import { NotificationService } from './notification.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private items = new BehaviorSubject<IcartProduct[]>(this.loadCart());
  cartItems$ = this.items.asObservable();

  constructor(
    private notificationService: NotificationService
  ) { }

  // load/update item from localStorage
  private loadCart(): IcartProduct[] {
    const data = localStorage.getItem('cart');
    return data ? JSON.parse(data) : [];
  }

  // save in localStorage and update items
  private updateLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(this.items.value));
    this.loadCart();
  }

  // get items
  getCart(): IcartProduct[] {
    return this.items.value;
  }

  // add item in cart or increase amout if alrady exist
  addToCart(product: IcartProduct) {
    let existProduct: IcartProduct | undefined = this.items.value.find(item => item.id === product.id);
    if(existProduct) {
      existProduct = {
        ...existProduct,
        qtd: existProduct.qtd += 1};
      this.items.next([...this.items.value]);
    } else {
      const newProduct = [...this.items.value, product];
      this.items.next(newProduct);
    }
    this.updateLocalStorage();
    this.notificationService.notification("O produto foi adicionado no carrinho")
  }

  // remove items by id
  removeCartItem(id: number) {
    const updated = this.items.value.filter(item => item.id !== id);
    this.items.next(updated);
    this.updateLocalStorage();
  }

  // clear items and localStorage
  clearCart() {
    this.items.next([]);
    localStorage.removeItem('cart');
  }

  // buy method
  buy() {
    alert("Parabéns! Você finalizou a sua compra.");
    this.clearCart();
  }
}
