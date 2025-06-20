import { Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { CartService } from '../cart.service';
import { IcartProduct } from '../products';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit, OnDestroy, OnChanges {

  total: number = 0;
  cartItems: IcartProduct[] = [];
  private subcriptions = new Subscription();

  constructor(
    public cartService: CartService,
  ) { }

  ngOnInit(): void {
    const sub = this.cartService.cartItems$.subscribe(items => {
      this.cartItems = items;
      this.total = this.cartService.calcTotal();
    });

    this.subcriptions.add(sub);
  }

  ngOnChanges(changes: SimpleChanges): void {
    // this.total = this.cartService.calcTotal();
    console.log('mudou aqui')
  }

  ngOnDestroy(): void {
    this.subcriptions.unsubscribe();
  }
}
