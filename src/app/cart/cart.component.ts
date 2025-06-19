import { Component, OnDestroy, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { IcartProduct } from '../products';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy {

  total: number = 0;
  cartItems: IcartProduct[] = [];
  private subcriptions = new Subscription();

  constructor(
    public cartService: CartService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const sub = this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
      this.calcTotal();
    });

    this.subcriptions.add(sub);
  }

  ngOnDestroy(): void {
    this.subcriptions.unsubscribe();
  }

  calcTotal(){
    this.cartItems.map(item => {
      this.total += (item.price * item.qtd)
    })
  }
}
