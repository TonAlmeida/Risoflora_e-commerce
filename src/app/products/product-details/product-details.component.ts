import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/cart.service';
import { NotificationService } from 'src/app/notification.service';
import { IcartProduct, IProduct } from 'src/app/products';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  qtd = 1;

  product: IProduct | undefined;

  constructor(
    private productsService: ProductsService,
    private router: ActivatedRoute,
    private notificationService: NotificationService,
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
    const routeParams = this.router.snapshot.paramMap;
    const productId = Number(routeParams.get("id"));
    this.product = this.productsService.getOne(productId);
  }

  addToCart() {
    this.notificationService.notification("o produto foi adicionado no carrinho");
    const product: IcartProduct = {
      ...this.product!,
      qtd: this.qtd
    }
    this.cartService.addToCart(product)
  }

}
