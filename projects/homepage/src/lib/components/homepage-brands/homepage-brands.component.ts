import { Component, Injector, OnInit, ViewEncapsulation } from '@angular/core';
import { ImageService } from '@app/service';
import { ItemsComponent } from 'base-components';
import { BrandsRepository, IBrand, IPaginationResponse } from 'communication';
import SwiperCore, { FreeMode, Navigation, SwiperOptions } from 'swiper';

SwiperCore.use([FreeMode, Navigation]);

@Component({
  selector: 'lib-homepage-brands',
  templateUrl: './homepage-brands.component.html',
  styleUrls: ['./homepage-brands.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class HomepageBrandsComponent extends ItemsComponent<IBrand> implements OnInit {
  public swiperOptions: SwiperOptions = {
    slidesPerView: 'auto',
    spaceBetween: 100,
    width: 240,
    slideClass: 'slide-brand',
    navigation: true,
  };

  constructor(
    protected _repository: BrandsRepository,
    protected _injector: Injector,
    private readonly _imagesService: ImageService,
  ) {
    super();
    this.autoLoadConfig = { ...this.autoLoadConfig, onInit: true };
  }

  ngOnInit(): void {
    super.ngOnInit();
  }
  protected handleResponse(res: IPaginationResponse<IBrand>): void {
    super.handleResponse(res);

    const data = this.items.map((val: IBrand) => ({
      ...val,
      photoUrl: this._imagesService.generatePhotoUrlById(val.photoId),
    }));

    this.builder.replaceItems(data);
  }
}
