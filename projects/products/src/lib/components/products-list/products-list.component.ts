import { Component, Injector, Input, OnInit } from '@angular/core';
import { ItemsComponent } from 'base-components';
import { ICategory, IProduct, ProductsRepository } from 'communication';
import { SwiperOptions } from 'swiper';

@Component({
  selector: 'lib-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent extends ItemsComponent<IProduct> implements OnInit {
  @Input() set category(val: ICategory | undefined) {
    if (val) this.loadData(val);
  }

  public swiperOptions: SwiperOptions = {
    slidesPerView: 'auto',
    spaceBetween: 100,
    slideClass: 'slide-brand',
    navigation: true,
  };

  constructor(protected _repository: ProductsRepository, protected _injector: Injector) {
    super();
  }

  protected loadData(category: ICategory): void {
    super.loadData({
      s: JSON.stringify({ categoryId: category?.id }),
      join: ['favorites', 'basketItems'],
    });
  }
}
