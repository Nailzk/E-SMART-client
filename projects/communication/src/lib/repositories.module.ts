import { ModuleWithProviders, NgModule } from '@angular/core';
import {
  AuthRepository,
  BrandsRepository,
  ProductsRepository,
  UsersRepository,
} from './repositories';

@NgModule({})
export class RepositoriesModule {
  static forRoot(): ModuleWithProviders<RepositoriesModule> {
    return {
      ngModule: RepositoriesModule,
      providers: [ProductsRepository, UsersRepository, AuthRepository, BrandsRepository],
    };
  }
}
