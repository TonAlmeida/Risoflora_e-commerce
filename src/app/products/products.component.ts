import { Component, OnInit } from '@angular/core';
import { IcartProduct, IProduct } from '../products';
import { ProductsService } from '../products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products: IProduct[] | undefined;

  constructor(
    private productsService: ProductsService,
    private cartService: CartService,
    private router: ActivatedRoute,
    private Router: Router
  ) { }

  ngOnInit(): void {
    const products = this.productsService.getAll();
    this.router.queryParamMap.subscribe(params => {
      const description = params.get('description')?.toLowerCase();

      if(description) {
        this.products = products.filter(product => product.description.toLowerCase().includes(description));
        return;
      }

      this.products = products;
    })
  }

  addAndBuy(product: IProduct) {
    if(product) {
      const Product = {...product, qtd: 1};
      this.cartService.addToCart(Product);
    }
    this.Router.navigate(['cart']);
  }
}
