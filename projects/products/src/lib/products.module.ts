import { NgModule } from '@angular/core';
import { ProductsComponent } from './products.component';
import { ProductsItemComponent } from './components/products-item/products-item.component';
import { CommonModule } from '@angular/common';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StarRatingModule } from 'angular-star-rating';



@NgModule({
  declarations: [
    ProductsComponent,
    ProductsItemComponent
  ],
  imports: [
    CommonModule,
    NzButtonModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    StarRatingModule.forChild()
  ],
  exports: [
    ProductsComponent,
    ProductsItemComponent
  ]
})
export class ProductsModule { }
