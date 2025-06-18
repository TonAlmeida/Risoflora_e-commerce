import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { IcartProduct } from '../products';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: IcartProduct[] = [];

  total: number = 0;

  constructor(
    public cartService: CartService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getCart();
    this.calcTotal();
  }

  calcTotal(){
    this.total = this.cartItems.reduce((prev, current) => prev + (current.price * current.qtd), 0)
  }

  removeCartItem(id: number){
    this.cartItems = this.cartItems.filter(item => item.id !== id);
    this.cartService.removeCartItem(id);
    this.calcTotal();
  }

  buy(){
    alert("Parabéns você finalizou a sua compra!");
    this.cartService.clearCart();
    this.router.navigate(["products"]);
  }

}
