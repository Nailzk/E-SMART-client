import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { StarRatingModule } from 'angular-star-rating';
import { NzAvatarModule } from 'ng-zorro-antd/avatar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCommentModule } from 'ng-zorro-antd/comment';
import { NzTabsModule } from 'ng-zorro-antd/tabs';
import { TimeagoModule } from 'ngx-timeago';
import { SwiperModule } from 'swiper/angular';
import { ProductImageSwiperComponent } from './components/product-image-swiper/product-image-swiper.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsItemComponent } from './components/products-item/products-item.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { CommentsModule } from '../../../comments/src/lib/comments.module';
import { ProductsListComponent } from './components/products-list/products-list.component';

@NgModule({
  declarations: [
    ProductsComponent,
    ProductsItemComponent,
    ProductComponent,
    ProductImageSwiperComponent,
    ProductsListComponent,
  ],
  imports: [
    CommonModule,
    NzButtonModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    ProductsRoutingModule,
    NzTabsModule,
    SwiperModule,
    NzCommentModule,
    NzAvatarModule,
    TimeagoModule,
    CommentsModule,
    StarRatingModule.forChild(),
  ],
  exports: [ProductsComponent, ProductsItemComponent,ProductsListComponent],
})
export class ProductsModule {}
