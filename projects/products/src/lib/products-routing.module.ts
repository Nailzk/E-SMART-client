import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './components/product/product.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: ':id', component: ProductComponent },
      { path: '**', pathMatch: 'full', redirectTo: '/home' },
    ]),
  ],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
