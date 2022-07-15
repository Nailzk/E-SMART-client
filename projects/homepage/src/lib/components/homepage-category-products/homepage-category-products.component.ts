import { Component, Injector, OnInit } from '@angular/core';
import { ItemsComponent } from 'base-components';
import { CategoriesRepository, ICategory } from 'communication';

@Component({
  selector: 'lib-homepage-category-products',
  templateUrl: './homepage-category-products.component.html',
  styleUrls: ['./homepage-category-products.component.scss'],
})
export class HomepageCategoryProductsComponent extends ItemsComponent<ICategory> implements OnInit {
  protected get defaultLimit(): number {
    return 4;
  }
  
  constructor(protected _repository: CategoriesRepository, protected _injector: Injector) {
    super();
  }
}
