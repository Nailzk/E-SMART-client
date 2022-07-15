import { ModuleWithProviders, NgModule } from '@angular/core';
import {
  AuthRepository,
  BasketItemsRepository,
  BrandsRepository,
  CategoriesRepository,
  CommentsRepository,
  FavoritesRepository,
  ProductsRepository,
  UsersRepository,
} from './repositories';

@NgModule({})
export class RepositoriesModule {
  static forRoot(): ModuleWithProviders<RepositoriesModule> {
    return {
      ngModule: RepositoriesModule,
      providers: [
        ProductsRepository,
        UsersRepository,
        AuthRepository,
        BrandsRepository,
        CommentsRepository,
        CategoriesRepository,
        FavoritesRepository,
        BasketItemsRepository
      ],
    };
  }
}
