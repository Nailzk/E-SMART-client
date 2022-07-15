import { Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { ImageService } from '@app/service';
import Swiper, { Navigation, SwiperOptions } from 'swiper';
import SwiperCore from 'swiper';

SwiperCore.use([Navigation]);

@Component({
  selector: 'lib-product-image-swiper',
  templateUrl: './product-image-swiper.component.html',
  styleUrls: ['./product-image-swiper.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ProductImageSwiperComponent implements OnInit {
  @Input() set photoIds(value: string[] | undefined) {
    if (value) {
      this._photoIds = value;
      this.generalPhotoId = value[0];
    }
  }

  public get photoIds(): string[] {
    return this._photoIds;
  }

  public generalPhotoId: string;

  private _photoIds: string[] = [];

  public swiperOptions: SwiperOptions = {
    slidesPerView: 'auto',
    spaceBetween: 25,
    slideClass: 'image-slide',
    navigation: true,
  };

  constructor(private readonly _imagesService: ImageService) {}

  ngOnInit(): void {}

  public generatePhotoUrl(id: string): string {
    return this._imagesService.generatePhotoUrlById(id);
  }

  public handleImageSelect(id: string): void {
    this.generalPhotoId = id;
  }
}
