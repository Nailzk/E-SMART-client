import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import SwiperCore, { Pagination } from "swiper";

SwiperCore.use([Pagination]);

@Component({
  selector: 'lib-homepage-slider',
  templateUrl: './homepage-slider.component.html',
  styleUrls: ['./homepage-slider.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class HomepageSliderComponent implements OnInit {
  public readonly effect = 'scrollx';
  constructor() { }

  ngOnInit(): void {
  }

}
