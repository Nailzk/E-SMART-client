import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore, { FreeMode, Navigation, Pagination, SwiperOptions } from "swiper";

SwiperCore.use([FreeMode, Navigation]);

@Component({
  selector: 'lib-homepage-brands',
  templateUrl: './homepage-brands.component.html',
  styleUrls: ['./homepage-brands.component.scss'],
  encapsulation: ViewEncapsulation.Emulated,
})
export class HomepageBrandsComponent implements OnInit {
  public brands = [1, 2, 3, 4, 5, 6, 6, 7, 54, 545, 454, 54, 5, 45, 5];
  
  public swiperOptions: SwiperOptions = {
    slidesPerView: 'auto',
    spaceBetween: 100,
    width: 240,
    slideClass: 'slide-brand',
    navigation: true
  }
  
  constructor() {}

  ngOnInit(): void {}
}
