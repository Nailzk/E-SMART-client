import { Component, OnInit, Injector } from '@angular/core';
import { ItemsComponent } from 'base-components';
import { IProduct, ProductsRepository } from 'communication';

@Component({
  selector: 'lib-homepage-products',
  templateUrl: './homepage-products.component.html',
  styleUrls: ['./homepage-products.component.scss']
})
export class HomepageProductsComponent extends ItemsComponent<IProduct> implements OnInit {

  constructor(
    protected _repository: ProductsRepository,
    protected _injector: Injector,
  ) { 
    super()
  }

  ngOnInit(): void {
    super.ngOnInit();
  }

}
